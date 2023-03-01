class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        return this;
    }

    pop() {
        if (!this.head) {
            return;
        }

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
            this.head = null;
        }

        return current;
    }

    shift() {
        if (!this.head) {
            return;
        }

        const currentHead = this.head;
        this.head = currentHead.next;

        currentHead.next = null;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }

    unshift(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;

        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let current = this.head;
        let counter = 0;

        while (counter < index) {
            current = current.next;
            counter++;
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
        const prev = this.get(index - 1);
        newNode.next = prev.next;
        prev.next = newNode;
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

        const prevNode = this.get(index - 1);
        const removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        removedNode.next = null;
        return removedNode;
    }

    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let prev;
        let next = current.next;

        while (next) {
            prev = current;
            current = next;
            next = next.next;
            current.next = prev;
        }
        this.tail.next = null;
    }

    // print() {
    //     const arr = [];
    //     let current = this.head;
    //     while (current) {
    //         arr.push(current.val);
    //         current = current.next;
    //     }

    //     console.log(arr);
    // }
}

const list = new SinglyLinkedList();

list.unshift('HI');
list.push('hello,');
list.push('how');
list.push('are');
list.push('you');
list.push('!');
