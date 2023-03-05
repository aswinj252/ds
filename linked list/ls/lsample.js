class LinkedList{
    constructor(data){
        this.head={
            vallue:data,
            next:null
        }
        this.tail=this.head,
        this.length=1
    }
    append(data){
        const newNode={
            value:data,
            next:null
        }
        this.tail.next=newNode
        this.tail= newNode
        this.length++
        
    }
    prepend(data){
        const newNode={
            head:data,
            tail:null
        }
        newNode.next=this.head
        this.head=newNode
        this.length++
    }
     traverse(req){
        let counter = 0
        let currentNode = this.head

        while(counter!=req){
            counter++
            currentNode=currentNode.next
        }
        return currentNode
     }
    add(index, data){
        const newNode={
           value:data,
           next:null
        }
        const lNode = this.traverse(index-1);
        const nextNode = lNode.next

        lNode.next= newNode
        newNode.next=nextNode
    }
    
    
}
const list=new LinkedList(10)
list.append(12)
list.prepend(60)
list.add(1,89)
list.delete(3)
console.log(list);