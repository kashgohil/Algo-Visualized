import React, {useState,useEffect} from 'react'
import Header from 'components/Header/Header'
import './sortpage.scss'

const SortPage = () => {

    document.title = "Algo Visualized | Sorting"
    
    const [randomArray, setRandomArray] = useState([])
    const [selected,setSelected] = useState({first: null, second: null})

    const randomHeightGenerator = () => {
        return Math.random()+1
    }

    const randomArrayGenerator = () => {
        const array = [...Array(100)].map(()=> 100*randomHeightGenerator()-100)
        setRandomArray(array)
    }

    useEffect(() => {
        const array = [...Array(100)].map(()=> 100*randomHeightGenerator()-100)
        setRandomArray(array)
    }, [])

    const handleSort = (ans) => {
        for(let i=0;i<ans.length;i++){
            setTimeout(()=>{
                setSelected({first:ans[i].first,second:ans[i].second})
                if(ans[i].action==="swap"){
                    const tmp = randomArray[ans[i].first]
                    randomArray[ans[i].first] = randomArray[ans[i].second]
                    randomArray[ans[i].second] = tmp   
                }
                else if(ans[i].action==="replace"){
                    randomArray[ans[i].first]=ans[i].replace
                }
                setTimeout(()=>{setSelected({first:null,second:null})},0)
            },100)
        }
    }

    return (
        <>
            <Header sort={{sort:true,randomArray:randomArray,handleSort:handleSort,randomArrayGenerator:randomArrayGenerator}} />
            <div className="sorting-page-container flex-center">
                <div className="sorting-bar flex-center">
                    {randomArray.map((bar,ind)=>{
                        return (
                            <div 
                                className="bar"
                                key={ind} 
                                id={ind} 
                                style={{
                                    height:`${bar}%`,
                                    backgroundColor: ind === selected.first ? "red" : ind === selected.second ? "green" : "#4f30b3"
                                }}
                            ></div>
                        )
                    })}           
                </div>
            </div>
        </>
    )
}

export default SortPage