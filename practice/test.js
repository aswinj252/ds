function insertionsort(arr){
    for(i=1;i<arr.length;i++){
        let j=i-1
        let temp = arr[i]
        while(j>=0&&arr[j]>temp){
             if(arr[j]>arr[j+1]){
                arr[j+1]= arr[j]
                j--
             }
             arr[j+1]=temp
        }

    }
    return arr
}
let ressult = insertionsort([8,1,9,2])
console.log(ressult);