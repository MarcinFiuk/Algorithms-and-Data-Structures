class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.tail) {
            return;
        }

        const removedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }

        this.length--;
        return removedNode;
    }

    unshift(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    shift() {
        if (!this.head) {
            return;
        }

        const removedNode = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }

        this.length--;
        return removedNode;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let counter;
        let current;
        if (index <= this.length / 2) {
            counter = 0;
            current = this.head;

            while (counter < index) {
                current = current.next;
                counter++;
            }
        } else {
            counter = this.length - 1;
            current = this.tail;

            while (counter > index) {
                current = current.prev;
                counter--;
            }
        }

        return current;
    }

    set(index, val) {
        const foundNode = this.get(index);

        if (foundNode) {
            foundNode.val = val;
            return true;
        }

        return false;
    }
}

const dList = new DoublyLinkedList();

dList.push(10);
dList.push(20);
dList.push(30);
dList.push(40);
dList.push(50);

const r = dList.set(-1, 'bpb');
console.log(r);
console.log(dList);
