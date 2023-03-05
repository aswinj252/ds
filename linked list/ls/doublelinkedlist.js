class doubleLinkedList{
    constructor(data){
        this.head={
            value:data,
            next:null,
            prev:null
        }
        this.tail=this.head
        this.length=1
    }
    append(data){
    const  newNOde={
        value:data,
        next:null,
        prev:null

    }
    this.tail.next=newNOde 
  
    newNOde.prev=this.tail 
     this.tail=newNOde
    this.lenght++
    

    }
    prepend(data){
        const newNOde={
            value:data,
            next:null,
            prev:null

        }
        newNOde.next=this.head
        this.head.prev=newNOde
        this.head=newNOde
        this.length++
    }
    display(){
        this.temp = this.head
        while(this.temp != null){
            console.log(this.temp.value);
            this.temp = this.temp.next
        }
        // console.log('head :',this.head,'tail :',this.tail );
    }
displayReverse(){
    this.temp = this.tail
        while(this.temp != null){
            console.log(this.temp.value);
            this.temp = this.temp.prev
        }
    // console.log('head :',this.head,'tail :',this.tail );
    }

    
}
let dlist= new doubleLinkedList(10)
dlist.append(60)
dlist.append(6)
dlist.append(5)
dlist.prepend(0)
dlist.display()
dlist.displayReverse ()

