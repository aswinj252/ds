class Node{
    constructor (data){
        this.value= data
        this.next = null
    }
}
class Queue{
    constructor(){
        this.first= null
        this.last = null
        this.length=0
    }

    enqueue(data)
    {
        const node = new Node(data)
        if(this.length==0){
            this.first= node
            this.last = node
            this.length++
        }
        else{
            this.last.next=node
            this.last= node
             this.length++
        }
         
    }
    
    dequeue(){
        this.first=this.first.next
        this.length--
    }
    display(){
        console.log(this.first);
        console.log(this.last);
    }
}

const queue = new Queue()
queue.enqueue(5)
queue.enqueue(10)
queue.enqueue(1)


queue.dequeue()
console.log(queue);
queue.display()