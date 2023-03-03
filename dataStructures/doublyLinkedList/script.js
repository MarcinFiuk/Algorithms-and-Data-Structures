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

    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === 0) {
            return Boolean(this.unshift(val));
        }

        if (index === this.length) {
            return Boolean(this.push(val));
        }

        const newNode = new Node(val);
        const prevNode = this.get(index - 1);

        newNode.next = prevNode.next;
        newNode.next.prev = newNode;
        newNode.prev = prevNode;
        prevNode.next = newNode;

        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return;
        }

        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }

        const removedNode = this.get(index);

        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.prev = null;
        removedNode.next = null;

        this.length--;
        return removedNode;
    }

    reverse() {
        let current = this.tail;
        this.tail = this.head;
        this.head = current;

        for (let i = 0; i < this.length; i++) {
            const temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            current = current.next;
        }

        return this;
    }

    print() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }

        console.log(arr);
    }
}

const dList = new DoublyLinkedList();

dList.push(10);
// dList.push(20);
// dList.push(30);
// dList.push(40);
// dList.push(50);
console.log(dList.print());

dList.reverse();
console.log(dList.print());
