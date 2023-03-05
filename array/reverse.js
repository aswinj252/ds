 let arr=[5,2,8,7,6,1,3,4]
 let length=arr.length-1
for(i=0;i<arr.length/2;i++){

        
  temp=arr[i]
  arr[i]=arr[length-i]
  arr[length-i]= temp
    
 
} 
  console.log(arr);