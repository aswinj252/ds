function bubbleSort(arr){
   
    for (i=0;i<arr.length;i++){
        for(j=0;j<arr.length-1;j++)
{
    if(arr[j]>arr[j+1]){
        temp=arr[j]
        arr[j]=arr[j+1]
        arr[j+1]= temp
    }
} 
   
}
return arr
}

result=bubbleSort([5,1,9,3,6,4,8,2])
console.log(result);