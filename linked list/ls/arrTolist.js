class LinkedList{
    constructor(data){
        this.head={
            value:data,
            next:null
        }
        this.tail=this.head
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
    display(){
        this.temp = this.head
        while(this.temp != null){
            console.log(this.temp.value);
            this.temp = this.temp.next
        }
        // console.log('head :',this.head,'tail :',this.tail );
    }
}
const list = new LinkedList(88)
function arrtolist(arr){
    for(i=0;i<arr.length;i++){
        list.append(arr[i])
    }
}
list.append(5)
arrtolist([2,3,4,5,6,7,8])
list.display()

// let arr=[1,2,3,4,5,6,7]
// let n= arr.length
// arrtolist(arr,n)
