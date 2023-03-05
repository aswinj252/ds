class Linkedlist{
    constructor(data){
        this.head={
            value:data,
            next:null
        }
        this.tail= this.head
        this.length=1
    }
    
    append(data){
        const newNode={
value:data,
next:null


        }
        this.tail.next=newNode
        this.tail=newNode
        this.length++
    }
    trav(data){
     let counter=0
     let    currentNode=this.head
        while(counter!=data){ 
            
        currentNode=currentNode.next
       counter++
    } 
    console.log(currentNode);
    return currentNode
    }
   
    display(){
        let temp= this.head
         while(temp!=null){
            console.log(temp.value);
            temp=temp.next
         }
    }
    delete(data){
      let  leaderNode=this.trav(data-1)
       let  deleteNode=leaderNode.next
      let  newNode=deleteNode.next

      leaderNode.next=newNode
      this.length--



    }
    deleteSvalue(data)
{

}
}
const link = new Linkedlist(10)
link.append(5)

// console.log(link);
function arrtolink(arr){
    for(i=0;i<arr.length;i++){
        link.append(arr[i])
    }
}
arrtolink([1,2,3,4,5,6])
link.delete(2)
console.log(link);
// link.display()
