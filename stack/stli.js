class Node{
    constructor(data){
       this. value=data,
      this.  next= null
    }
}
class Stack{
    constructor(){
        this.top=null
        this.length=0
         
      
    }
    

    append(data){
        const node= new Node(data)
        if(this.length=0){
            this.top=node
        }
        else{
            let hp = this.top
            this.top=node
            this.top.next=hp
        }
        this.length++
    }
    display(){
        console.log(this.top);
    }
    pop(){
        this.top=this.top.next
        this.length--
    }
}

const stack= new Stack()
stack.append(4)
stack.append(5)
stack.pop()
stack.pop()
stack.display()
