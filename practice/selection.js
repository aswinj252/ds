function selectionsort(arr){
    for(i=0;i<arr.length-1;i++){
    let min = i 
    for(j=i+1;j<arr.length;j++){
        if(arr[j]<arr[min]){
            min=j
        }
    }
    if(min!=i){
        [arr[i],arr[min]]=[arr[min],arr[i]]
    }

    }
    return arr

}
let result = selectionsort([5,1,9,3,6,4,8,2])
console.log(result);