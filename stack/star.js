class stack{
    constructor(){
    this. arr=[];
    }
append(data){
    this.arr.push(data)
}
pop(){
this.arr.pop()
}
display(){
    console.log(this.arr);
}
top(){
    console.log("the top is ",this.arr[this.arr.length-1]);
}

}
 const Stack = new stack()
 Stack.append(5)
 Stack.append(10)
 Stack.append(0)
 Stack.append(1)
 Stack.append(100)
 Stack.append(102)

Stack.pop()

 Stack.display()
 Stack.top()