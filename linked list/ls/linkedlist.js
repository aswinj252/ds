class LinkedList{
constructor(data){
this.head= {
    value:data,
    next:null

}
this.tail = this.head 
this.length = 1;
}
append(data){
const newNode ={
    value:data, 
    next:null
}
this.tail.next = newNode
this.tail = newNode
this.length++
}
prepend(data){
    const newNode={ 
        value:data,
        next:null
    }
    newNode.next= this.head
    this.head=newNode
    this.length++
    
}
display(){
   let  temp=this.head
    while(temp!=null){
        console.log(temp.value);
        temp= temp.next
    }
}
}
const myList = new LinkedList(20)

myList.append(5)
myList.append(50)
myList.append(7)
myList.prepend(2)
myList.display()
// console.log(myList);