function quickSort(arr){
    if(arr.length<=1){
        return arr
    }
    const pivot = arr[0]
    const left =[]
    const right = []
    for(i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return[...quickSort(left), pivot, ...quickSort(right)]
}
let result = quickSort([5,1,9,3,6,4,8,2])
console.log(result);