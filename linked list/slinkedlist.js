class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // add a node to the linked list
    add(data) {
      let node = new Node(data);
      let current;
  
      if (this.head == null) {
        this.head = node;
      } else {
        current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
      this.size++;
    }
    
    // insert a node at a specific position
    insertAt(data, index) {
      if (index > 0 && index > this.size) {
        return false;
      } else {
        let node = new Node(data);
        let curr, prev;
        curr = this.head;
        if (index === 0) {
          node.next = head;
          this.head = node;
        } else {
          curr = this.head;
          let it = 0;
          while (it < index) {
            it++;
            prev = curr;
            curr = curr.next;
          }
          node.next = curr;
          prev.next = node;
        }
        this.size++;
      }
      return true;
    }
  
    // remove a node from the linked list
    removeFrom(index) {
      if (index > 0 && index > this.size) {
        return -1;
      } else {
        let curr, prev, it = 0;
        curr = this.head;
        prev = curr;
        if (index === 0) {
          this.head = curr.next;
        } else {
          while (it < index) {
            it++;
            prev = curr;
            curr = curr.next;
          }
          prev.next = curr.next;
        }
        this.size--;
        return curr.data;
      }
    }
  
    // print the linked list
    printList() {
      let curr = this.head;
      let str = "";
      while (curr) {
        str += curr.data + " ";
        curr = curr.next;
      }
      console.log(str);
    }
  }
  
  let ll = new LinkedList();
  ll.add(1);
  ll.add(2);
  ll.add(3);
  ll.add(4);
  ll.insertAt(5, 2);
  console.log("Linked List after insertion: ");
  ll.printList();
  console.log("Removed element: " + ll.removeFrom(2));
  console.log("Linked List after removal: ");
  ll.printList();