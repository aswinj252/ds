class linkedlist{
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
        this.tail=newNode
        this.length++
    }
    display(){
    
        let  temp= this.head
          while(temp!=null){
              console.log(temp.value);
              temp=temp.next
          }
      }
      bubbleSort(){
        let swapped = false;
        do {
          let  cNode=this.head
          swapped = false;
      
        
        while(cNode.next!==null){
            if(cNode.value>cNode.next.value){
               
               let temp=cNode.value
                cNode.value=cNode.next.value
                cNode.next.value=temp
                swapped = true;
            }
            cNode=cNode.next
        }
      }while (swapped)
    } 
        
  
}

let link = new linkedlist(45)

function arrtolink(arr) {
    for(i=0;i<arr.length;i++){
        
        link.append(arr[i])
    }
}

arrtolink([4,1,8,6,7,2,3,0])
link.bubbleSort()
link.display()