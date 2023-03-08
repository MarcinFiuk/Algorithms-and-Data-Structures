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

    dequeue() {
        const priorityEl = this.values[0];
        const lastEl = this.values.pop();

        if (this.values.length) {
            this.values[0] = lastEl;
            this.sinkDown();
        }

        return priorityEl;
    }

    sinkDown() {
        let parentIdx = 0;
        const element = this.values[parentIdx];

        while (true) {
            let leftIndex = 2 * parentIdx + 1;
            let rightIndex = 2 * parentIdx + 2;
            let leftElement = this.values[leftIndex];
            let rightElement = this.values[rightIndex];

            if (
                leftElement?.priority < element.priority &&
                (!rightElement ||
                    leftElement?.priority <= rightElement?.priority)
            ) {
                this.swap(this.values, leftIndex, parentIdx);
                parentIdx = leftIndex;
            } else if (rightElement?.priority < element.priority) {
                this.swap(this.values, rightIndex, parentIdx);
                parentIdx = rightIndex;
            } else {
                return;
            }
        }
    }
}

const pQ = new PriorityQueue();

pQ.enqueue(1, 20);
pQ.enqueue(2, 12);
pQ.enqueue(3, 13);
pQ.enqueue(3, 33);
pQ.enqueue(3, 27);
pQ.enqueue(3, 2);
pQ.enqueue(3, 21);
pQ.enqueue(3, 40);
pQ.enqueue(3, 54);
pQ.enqueue(3, 12);
console.log('---before---', pQ);
let returnV = pQ.dequeue();
console.log(returnV);
returnV = pQ.dequeue();
console.log(returnV);
returnV = pQ.dequeue();
console.log(returnV);
returnV = pQ.dequeue();
console.log(returnV);
returnV = pQ.dequeue();
console.log(returnV);
returnV = pQ.dequeue();
console.log(returnV);
returnV = pQ.dequeue();
console.log(returnV);
returnV = pQ.dequeue();
console.log(returnV);
returnV = pQ.dequeue();
console.log(returnV);
console.log('---after---', pQ);
