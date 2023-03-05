class BinaryHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
    
      this.heap.push(value);
      let currentIndex = this.heap.length - 1;
      let parentIndex = Math.floor((currentIndex - 1) / 2);
  
      
      while (currentIndex > 0 && this.heap[parentIndex] > this.heap[currentIndex]) {
    
        [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
        currentIndex = parentIndex;
        parentIndex = Math.floor((currentIndex - 1) / 2);
      }
    }
  }
  const heap = new BinaryHeap();
heap.insert(4);
heap.insert(5);
heap.insert(6);
heap.insert(8);
heap.insert(9);
heap.insert(11);
console.log(heap.heap); // [4, 5, 6, 8, 9, 11]
heap.insert(7);
console.log(heap.heap); // [4, 5, 6, 8, 9, 11, 7]
