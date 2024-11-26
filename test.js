//* install an extension called 'Colorful Comments' in VS code for better experience😊

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Get the index of parent and children
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    leftChildIndex(index) {
        return 2 * index + 1;
    }
    rightChildIndex(index) {
        return 2 * index + 2;
    }

    // Insert an element into the heap
    insert(value) {
        this.heap.push(value); // Add value to the end
        this.heapifyUp(); // Restore heap property
    }

    heapifyUp() {
        let index = this.heap.length - 1; // Start from the last element
        while (
            index > 0 &&
            this.heap[index] > this.heap[this.parentIndex(index)]
        ) {
            // Swap if the parent is greater
            [this.heap[index], this.heap[this.parentIndex(index)]] = 
            [this.heap[this.parentIndex(index)], this.heap[index]];
            index = this.parentIndex(index);
        }
    }

    // Remove and return the smallest element (root)
    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop(); // Replace root with the last element
        this.heapifyDown(); // Restore heap property
        return root;
    }

   heapifyDown() {
        let index = 0;
        while (this.leftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.leftChildIndex(index);                        //s
            if (                                                                       //m
                this.rightChildIndex(index) < this.heap.length &&                      //a
                this.heap[this.rightChildIndex(index)] > this.heap[smallerChildIndex]  //l        find smallerIndex left/right
            ) {                                                                        //l
                smallerChildIndex = this.rightChildIndex(index);                       //e 
            }                                                                          //r
                                                                                 
            if (this.heap[index] >= this.heap[smallerChildIndex]) break;

            // Swap if the child is smaller
            [this.heap[index], this.heap[smallerChildIndex]] = 
            [this.heap[smallerChildIndex], this.heap[index]];
            index = smallerChildIndex;
        }
    }
}

// Example Usage
const heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(20);
heap.insert(2);

console.log(heap.heap); // Output: [2, 5, 20, 10]
console.log(heap.remove()); // Output: 2 (smallest element)
console.log(heap.heap); // Output: [5, 10, 20]

