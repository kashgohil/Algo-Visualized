import React from 'react'
import {selectionSort,insertionSort,bubbleSort,mergeSort,quickSort,heapSort,shellSort} from 'algorithms/SortingAlgorithms'
import {bfs,dfs} from 'algorithms/GraphAlgorithms'
import './header.scss'

const Header = ({sort,graph}) => {
    
    const handleSorting = (sorting) => {
        const ans = sorting(sort.randomArray)
        sort.handleSort(ans)
    }

    const handleGraph = (graphAlgo) => {
        const ans = graphAlgo(graph.node)
        graph.handleGraphAlgo(ans)
    }

    return (
        <div className="header-container">
            {sort 
                ?
                    <>
                        <span className="button" onClick={sort.randomArrayGenerator}>Generate random array</span>
                        <div>
                            <span className="button" onClick={()=>handleSorting(selectionSort)}>Selection Sort</span>
                            <span className="button" onClick={()=>handleSorting(insertionSort)}>Insertion Sort</span>
                            <span className="button" onClick={()=>handleSorting(bubbleSort)}>Bubble Sort</span>
                            <span className="button" onClick={()=>handleSorting(mergeSort)}>Merge Sort</span>
                            <span className="button" onClick={()=>handleSorting(quickSort)}>Quick Sort</span>
                            <span className="button" onClick={()=>handleSorting(heapSort)}>Heap Sort</span>
                            {/* <span className="button" onClick={()=>handleSorting(shellSort)}>Shell Sort</span> */}
                        </div>
                    </>
                :
                    graph
                        ?
                            <>
                                <span className="button" onClick={graph.setRandomNodes}>Generate random nodes</span>
                                <div>
                                    <span className="button" onClick={()=>handleGraph(bfs)}>BFS</span>
                                    <span className="button" onClick={()=>handleGraph(dfs)}>DFS</span>
                                </div>
                            </>
                        :
                            <span className="title">Algo Visualised</span>
            }
        </div>
    )
}

export default Header