
// data structures
// linked list

// task1 

class Nodes {
    constructor(value) {
        this.value = value
        //  the value of the node 
        this.next = null
        // Pointer to the next node
    }
}


const node1 = new Nodes(1);
console.log(node1)

// task2
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a node to the end of the list
    add(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Remove a node from the end of the list
    remove() {
        if (this.head === null) {
            return;
        } else if (this.head.next === null) {
            this.head = null;
        } else {
            let current = this.head;
            while (current.next.next !== null) {
                current = current.next;
            }
            current.next = null;
        }
    }

    // Display all nodes in the list
    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage:
const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
console.log("Initial list:");
list.display();

list.remove();
console.log("After removing last node:");
list.display();

