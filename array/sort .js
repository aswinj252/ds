arr=[5,2,8,7,6,1,3,4]
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
  temp=arr[i]
  arr[i]=arr[j]
  arr[j]= temp

        }

    }
   
} console.log(arr);