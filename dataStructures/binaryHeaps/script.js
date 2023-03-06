class maxBinaryHeap {
    constructor() {
        // this.values = [];
        this.values = [41, 39, 33, 18, 27, 12];
    }

    insert(element) {
        this.values.push(element);

        this.bubbleUp();

        return this;
    }

    bubbleUp() {
        let currentIndex = this.values.length - 1;

        let element = this.values[currentIndex];
        let parentIndex = Math.floor((currentIndex - 1) / 2);
        let parent = this.values[parentIndex];

        while (element > parent) {
            this.values[parentIndex] = element;
            this.values[currentIndex] = parent;
            currentIndex = parentIndex;
            parentIndex = Math.floor((parentIndex - 1) / 2);
            parent = this.values[parentIndex];
        }
    }

    extractMax() {
        const removedEl = this.values[0];
        const lastEl = this.values.pop();
        this.values[0] = lastEl;

        this.sinkDown(lastEl);

        return removedEl;
    }

    sinkDown(el) {
        let parentIndex = 0;
        let leftChildIndex = 2 * parentIndex + 1 > 0;
        let leftChild = leftChildIndex > 0 ? this.values[leftChildIndex] : null;
        let rightChildIndex = 2 * parentIndex + 2;
        let rightChild =
            rightChildIndex > 0 ? this.values[rightChildIndex] : null;
        while (leftChild > el || rightChild > el) {
            if (leftChild >= rightChild) {
                this.values[parentIndex] = leftChild;
                this.values[leftChildIndex] = el;
                parentIndex = leftChildIndex;
                leftChildIndex = 2 * parentIndex + 1;
                leftChild =
                    leftChildIndex > 0 ? this.values[leftChildIndex] : null;
            } else if (rightChild > rightChild) {
                this.values[parentIndex] = rightChild;
                this.values[rightChildIndex] = el;
                parentIndex = rightChildIndex;
                rightChildIndex = 2 * parentIndex + 2;
                rightChild =
                    rightChildIndex > 0 ? this.values[rightChildIndex] : null;
            }
        }
    }
}

const heap = new maxBinaryHeap();

heap.insert(55);
heap.insert(100);
heap.insert(55);
console.log('b', heap);
const r = heap.extractMax();
console.log('result', r);
console.log('a', heap);
