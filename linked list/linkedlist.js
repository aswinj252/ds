class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0

    }
    getSize() {
        return this.size
    }
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {

            this.head = node

        }
        else {
            node.next = this.head
            this.head = node
        }
        this.size++
        
    }
    print() {
        if (this.isEmpty()) {
            console.log("list is emptybbncvn");
        } else {
            let curr = this.head

            while (curr) {
                console.log(curr.value);
                curr = curr.next
            }

        }
    }

}

    const list = new LinkedList()
console.log('list is empty ', list.isEmpty());
console.log('list size ', list.getSize());
list.print()
list.prepend(15)
list.print()
list.prepend(5)
list.prepend(1)
list.prepend(155)

list.print()