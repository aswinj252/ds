let arr=[1,2,3,6,7]
let arrr=[]
let f=0

for(i=arr.length-1;i>arr.length/2;i--){
 arrr[f]=arr[i]
  
   f++
}

for(i=0;i<arr.length/2;i++){
    arrr[f+i]=arr[i]
    
}                             
console.log(arrr);

