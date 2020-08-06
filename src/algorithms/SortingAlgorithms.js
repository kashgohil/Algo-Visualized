const bubbleSort = (randomArray) => {
    const len = randomArray.length
    let copy = randomArray.slice()
    let ans = []
    
    for(let i=0;i<len;i++){
        for(let j=0;j<len-i-1;j++){
            ans.push({first:j,second:j+1,action:"comp"})
            if(copy[j]>copy[j+1]){
                ans.push({first:j,second:j+1,action:"swap"})
                const tmp = copy[j]
                copy[j]=copy[j+1]
                copy[j+1]=tmp
            }
        }
    }
    return ans
}

const insertionSort = (randomArray) => {
    let ans =[]
    const len = randomArray.length
    let copy = randomArray.slice()
    
    for(let i=1;i<len;i++){
        const key = copy[i]
        let j = i-1
        while(j>=0 && copy[j]>key){
            ans.push({first:j+1,second:j,action:"comp"})
            ans.push({first:j+1,second:j,replace:copy[j],action:"replace"})
            copy[j+1]=copy[j]
            j--
        }
        ans.push({first:j+1,second:i,replace:key,action:"replace"})
        copy[j+1]=key
    }
    return ans
}

const mergeSort = (randomArray) => {

    const merge = (ccopy,copy,ans,start,mid,end) => {
        let k = start
        let i = start
        let j = mid+1
        while(i<=mid && j<=end){
            ans.push({first:i,second:j,action:"comp"})
            if(copy[i]<=copy[j]){
                ans.push({first:k,second:i,replace:copy[i],action:"replace"})
                ccopy[k++]=copy[i++]
            }
            else{
                ans.push({first:k,second:j,replace:copy[j],action:"replace"})
                ccopy[k++]=copy[j++]
            }
        }
        while(i<=mid){
            ans.push({first:k,second:i,replace:copy[i],action:"replace"})
            ccopy[k++]=copy[i++]
        }
        while(j<=end){
            ans.push({first:k,second:j,replace:copy[j],action:"replace"})
            ccopy[k++]=copy[j++]
        }
    }
    
    const mergesort = (copy,ccopy,start,end,ans) => {
        if(start===end)
            return
        const mid = Math.floor((start+end)/2)
        mergesort(ccopy,copy,start,mid,ans)
        mergesort(ccopy,copy,mid+1,end,ans)
        merge(ccopy,copy,ans,start,mid,end)
    }

    let ans = []
    let copy = randomArray.slice()
    let ccopy = randomArray.slice()
    const len = copy.length
    mergesort(copy,ccopy,0,len-1,ans)
    return ans
}

const quickSort = (randomArray) => {
    
    const partition = (copy,start,end,ans) => {
        const pivot = copy[end]
        let i = start-1
        for(let j=start;j<end;j++){
            ans.push({first:j,second:end,action:"comp"})
            if(copy[j]<pivot){
                i++
                ans.push({first:i,second:j,action:"swap"})
                const tmp = copy[i]
                copy[i] = copy[j]
                copy[j] = tmp
            }
        }
        ans.push({first:i+1,second:end,action:"swap"})
        const tmp = copy[i+1]
        copy[i+1] = copy[end]
        copy[end] = tmp
        return i+1
    }

    const quicksort = (copy,start,end,ans) => {
        if(start<end){
            const ind=partition(copy,start,end,ans)
            quicksort(copy,start,ind-1,ans)
            quicksort(copy,ind,end,ans)
        }
    }
    
    let ans = []
    let copy = randomArray.slice()
    const len = randomArray.length
    
    quicksort(copy,0,len-1,ans)
    
    return ans
}

const selectionSort = (randomArray) => {
    let ans = []
    let copy = randomArray.slice()
    const len = randomArray.length

    for(let i=0;i<len-1;i++){
        let minInd = i
        for(let j=i+1;j<len;j++){
            ans.push({first:j,second:minInd,action:"comp"})
            if(copy[j]<copy[minInd])
                minInd=j
        }
        ans.push({first:i,second:minInd,action:"swap"})
            const tmp = copy[i]
            copy[i] = copy[minInd]
            copy[minInd] = tmp
    }
    return ans
}

const heapSort = (randomArray) => {

    const heapify = (copy,len,i,ans) => {
        let largest = i
        const left = 2*i + 1
        const right = 2*i + 2
    
        ans.push({first:left,second:largest,action:"comp"})
        if(left<len && copy[left]>copy[largest])
            largest=left

        ans.push({first:right,second:largest,action:"comp"})
        if(right<len && copy[right]>copy[largest])
            largest=right

        if(largest!==i){
            ans.push({first:i,second:largest,action:"swap"})
            const tmp = copy[i]
            copy[i] = copy[largest]
            copy[largest] = tmp
            heapify(copy,len,largest,ans)
        }
    
    }

    let ans = []
    let copy = randomArray.slice()
    const len = randomArray.length

    for(let i=len/2-1;i>=0;i--)
        heapify(copy,len,i,ans)
    for(let i=len-1;i>0;i--){
        ans.push({first:0,second:i,action:"swap"})
        const tmp = copy[0]
        copy[0] = copy[i]
        copy[i] = tmp
        heapify(copy,i,0,ans)
    }
    return ans
}

const shellSort = (randomArray) => {
    let ans = []
    let copy = randomArray.slice()
    const len = randomArray.length

    for(let gap=len/2;gap>0;gap/=2){
        for(let i=gap;i<len;i++){
            const tmp = copy[i]
            let j = i
            for(;j>=gap && copy[j-gap]>tmp;j-=gap){
                ans.push({first:j,second:j-gap,replace:copy[j-gap],action:"replace"})
                copy[j]=copy[j-gap]
            }
            ans.push({first:j,second:i,replace:tmp,action:"replace"})
            copy[j]=tmp
        }
    }
    return ans
}

export {bubbleSort,mergeSort,insertionSort,quickSort,selectionSort,heapSort,shellSort}