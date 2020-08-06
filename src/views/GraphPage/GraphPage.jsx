import React,{useState, useEffect} from 'react'
import Header from 'components/Header/Header'
import './graphpage.scss'

const GraphPage = () => {
    
    const [grid,setGrid] = useState([])
    const [selected,setSelected] = useState({x:null,y:null})
    const [node,setNode] = useState(null)

    const randomGenerator = () => {
        return Math.floor(Math.random()*100)
    }

    const setRandomNodes = () => {
        let tmp={}
        if(node)
            grid[node.destination.x][node.destination.y]=undefined
        do{
            tmp = {
                source:{
                    x: randomGenerator()%10,
                    y: randomGenerator()%10
                },
                destination:{
                    x: randomGenerator()%10,
                    y: randomGenerator()%10
                }
            }
        }while(tmp.source.x===tmp.destination.x && tmp.source.y===tmp.destination.y)
        setNode(tmp)
        setGrid([...Array(10)].map(()=>[...Array(10)]))
        setSelected({x:null,y:null})
    }
    
    const handleGraph = (ans) => {
        console.log("inside the handleGraph function")
        for(let i=0;i<ans.length;i++){
            setTimeout(()=>{
                setSelected({x:ans[i].x,y:ans[i].y})
                grid[ans[i].x][ans[i].y]='v'
            },100)
        }
    }

    useEffect(() => {
        setRandomNodes()
    }, [])


    return (
        <div>
            <Header graph={{graph:true,handleGraphAlgo: handleGraph,setRandomNodes:setRandomNodes,node:node}} />
            <div className="graph-page-container flex-center">
                <div className="grid-container flex-center">
                        {grid!==[] &&
                            grid.map((row,ind1)=>{
                                return (
                                    <div key={ind1} style={{width:"100%"}}>
                                        {row.map((item,ind2)=>
                                            <div 
                                                key={`${ind1}${ind2}`} 
                                                className={
                                                    `grid-item 
                                                    ${node.source.x===ind1 && node.source.y===ind2 
                                                        ? "source" 
                                                        : node.destination.x===ind1 && node.destination.y===ind2 
                                                            ? "destination" 
                                                            : (selected.x===ind1 && selected.y===ind2) || grid[ind1][ind2]==='v'
                                                                ?"visited"
                                                                :""
                                                    }`
                                                }
                                            ></div>
                                        )}
                                        
                                    </div>
                                )
                            })
                        }
                </div>
            </div>            
        </div>
    )
}

export default GraphPage