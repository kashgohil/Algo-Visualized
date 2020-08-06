const bfs = (node) => {
    let q = []
    let ans = []
    let copy = [...Array(30)].map((row,ind)=>[...Array(30)])
    q.push(node.source)

    while(q.length>0){
        const tmp = q[0]
        q.shift()

        copy[tmp.x][tmp.y]='v'
        ans.push({x:tmp.x,y:tmp.y,action:"visited"})

        if(tmp.x===node.destination.x && tmp.y===node.destination.y)
            return ans
        
        if(tmp.x-1>=0 && copy[tmp.x-1][tmp.y]!=='v'){
            q.push({x:tmp.x-1,y:tmp.y})
        }
        if(tmp.x+1<10 && copy[tmp.x+1][tmp.y]!=='v'){
            q.push({x:tmp.x+1,y:tmp.y})
        }
        if(tmp.y-1>=0 && copy[tmp.x][tmp.y-1]!=='v'){
            q.push({x:tmp.x,y:tmp.y-1})
        }
        if(tmp.y+1<10 && copy[tmp.x][tmp.y+1]!=='v'){
            q.push({x:tmp.x,y:tmp.y+1})
        }
    }
}

const dfs = (node) => {
    let st = []
    let ans = []
    let copy = [...Array(10)].map((row,ind)=>[...Array(10)])

    st.push(node.source)

    while(st.length>0){
        let tmp = st[st.length-1]
        st.pop()
        
        copy[tmp.x][tmp.y]='v'
        ans.push({x:tmp.x,y:tmp.y,action:"visited"})

        if(tmp.x===node.destination.x && tmp.y===node.destination.y)
            return ans
        
        if(tmp.x-1>=0 && copy[tmp.x-1][tmp.y]!=='v'){
            st.push({x:tmp.x-1,y:tmp.y})
        }
        if(tmp.x+1<10 && copy[tmp.x+1][tmp.y]!=='v'){
            st.push({x:tmp.x+1,y:tmp.y})
        }
        if(tmp.y-1>=0 && copy[tmp.x][tmp.y-1]!=='v'){
            st.push({x:tmp.x,y:tmp.y-1})
        }
        if(tmp.y+1<10 && copy[tmp.x][tmp.y+1]!=='v'){
            st.push({x:tmp.x,y:tmp.y+1})
        }
    }
}

export {bfs,dfs}