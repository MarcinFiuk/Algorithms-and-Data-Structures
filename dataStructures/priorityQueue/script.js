class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        const newNode = new Node(val, priority);

        this.values.push(newNode);

        this.bubbleUp();

        return this;
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const currentNode = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            const parentNode = this.values[parentIdx];

            if (currentNode.priority < parentNode.priority) {
                this.swap(this.values, idx, parentIdx);
                idx = parentIdx;
            } else {
                return;
            }
        }
    }

    swap(arr, i1, i2) {
        return ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]);
    }

    dequeue() {}
}

const pQ = new PriorityQueue();

console.log('---before---', pQ);
pQ.enqueue(1, 2);
pQ.enqueue(2, 3);
pQ.enqueue(2, 4);
console.log('middle', pQ);
pQ.enqueue(2, 1);
pQ.enqueue(2, 6);
pQ.enqueue(2, 2);
pQ.enqueue(2, 5);
pQ.enqueue(2, 3);
console.log('---after---', pQ);
