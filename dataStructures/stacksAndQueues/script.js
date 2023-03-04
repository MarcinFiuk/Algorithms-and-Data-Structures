class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//--------------------------

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        this.length++;
        return this.length;
    }

    pop() {
        if (this.length === 0) {
            return null;
        }

        const removedNode = this.first;

        if (this.length === 1) {
            this.last = null;
        }

        this.first = removedNode.next;
        removedNode.next = null;

        this.length--;
        return removedNode;
    }
}

//--------------------------

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
        return this.length;
    }

    dequeue() {
        if (this.length === 0) {
            return null;
        }

        const removedNode = this.first;

        if (this.length === 1) {
            this.last = null;
        }
        this.first = removedNode.next;
        removedNode.next = null;

        this.length--;
        return removedNode;
    }
}
