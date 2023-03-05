class stack{
    constructor(data){
        this.arr=[];

    }
    append(data){
        this.arr.push(data)
    }
    peek(){
        console.log(this.arr[this.arr.length-1]);
    }
    pop(){
        this.arr.pop()
    }
    
    display(){
        console.log(this.arr);
    }
}
const Stack = new stack()
Stack.append(56)
Stack.append(5)
Stack.append(4)
Stack.append(8)
Stack.append(7)

Stack.pop()
Stack.peek()
Stack.display()