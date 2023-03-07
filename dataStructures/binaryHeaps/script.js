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
        if (this.values.length > 0) {
            this.values[0] = lastEl;
            this.sinkDown();
        }

        return removedEl;
    }

    sinkDown() {
        let parentIdx = 0;
        const element = this.values[parentIdx];

        while (true) {
            let leftChildIdx = 2 * parentIdx + 1;
            let rightChildIdx = 2 * parentIdx + 2;
            let leftElement;
            let rightElement;
            let swap = null;

            if (leftChildIdx < this.values.length) {
                leftElement = this.values[leftChildIdx];

                if (leftElement > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < this.values.length) {
                rightElement = this.values[rightChildIdx];

                if (
                    (!swap && rightElement > element) ||
                    (swap && rightElement > leftElement)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (!swap) {
                return;
            }

            this.values[parentIdx] = this.values[swap];
            this.values[swap] = element;
            parentIdx = swap;
        }
    }
}

const heap = new maxBinaryHeap();

heap.insert(55);
heap.insert(100);
heap.insert(55);
console.log(heap);
