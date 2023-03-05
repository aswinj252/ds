class Node {
    constructor(data){
       this. value = data
      this. next = null
    }
}

class Stack{ 
    constructor(){
        this.top = null
        this.length = 0
    }

    append(data){
        const mynode = new Node(data)
        if(this.length == 0){
            this.top = mynode
        }
        else{
            let hp=this.top
            this.top = mynode
            mynode.next=hp
         
         
        }
        this.length++
    }

    display() {
        console.log(this.top);
    }


    remove(){
        const newTop= this.top.next
        this.top= newTop
        this.length--
    }
}
const stack = new Stack()
stack.append(1)
stack.append(6)
stack.append(55)
// 
stack.display()