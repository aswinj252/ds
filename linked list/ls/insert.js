class linkedList{
    constructor(data) {
     this.head={
        value:data,
        next:null
     }
     this.tail=this.head
     this.length=1
    }
   
    prepend(data){
    const newNode={
        value:data,
        next:null
    }
    newNode.next=this.head
    this.head = newNode
    this.length++
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

    trav(value){
        let count = 0
        let currentNode=this.head

        while(count!=value){
            count++
            currentNode=currentNode.next
        }
        console.log(currentNode);
        return currentNode
    }
    traverse(){
        let count = 0
        let currentNode=this.head

        while(count<this.length){ 
            console.log(currentNode);
         
            currentNode=currentNode.next
               count++
        }
       
       
    }
   insert(index,data){
    const newNode={
        value:data,
        next:null
    }
    const leader = this.trav(index-1)
    const lnode=leader.next

    leader.next = newNode
    newNode.next= lnode
    this.length++

    
    
   }
   delete(index){
 const leaderNode= this.trav(index-1)
 const unwant=leaderNode.next
  const newNode= unwant.next

 leaderNode.next= newNode
 this.length--
   }
    display(){
        this.temp = this.head
        while(this.temp != null){
            console.log(this.temp.value);
            this.temp = this.temp.next
        }
        // console.log('head :',this.head,'tail :',this.tail );
    }
}
const link = new linkedList(12)
link.prepend(50)
link.append(21)
link.append(88)
link.insert(3,99)

// link.delete(3)
link.display()
// 

