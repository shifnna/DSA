// //^^^ Heap basic implimentation (Min & Max included)

// class Heap {
//     constructor(type = 'min') {
//         this.data = []; // Array to hold the heap
//         this.type = type; // 'min' for Min-Heap, 'max' for Max-Heap
//     }

//     // Get the index of parent and children
//     getParentIndex(index) {
//         return Math.floor((index - 1) / 2);
//     }
//     getLeftChildIndex(index) {
//         return 2 * index + 1;
//     }
//     getRightChildIndex(index) {
//         return 2 * index + 2;
//     }

//     // Swap helper
//     swap(index1, index2) {
//         [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
//     }

//     // Compare two elements based on heap type
//     compare(a, b) {
//         if (this.type === 'min') {
//             return this.data[a] < this.data[b];
//         } else {
//             return this.data[a] > this.data[b];
//         }
//     }

//     // Insert a value into the heap
//     insert(value) {
//         this.data.push(value); // Add the value at the end
//         this.heapifyUp(); // Fix the heap
//     }

//     // Remove and return the root (min or max)
//     removeRoot() {
//         if (this.data.length === 0) return null;
//         if (this.data.length === 1) return this.data.pop();

//         const root = this.data[0];
//         this.data[0] = this.data.pop(); // Replace root with the last element
//         this.heapifyDown(); // Fix the heap
//         return root;
//     }

//     // Heapify up to maintain the heap property after insertion
//     heapifyUp() {
//         let index = this.data.length - 1;
//         while (index > 0) {
//             const parentIndex = this.getParentIndex(index);
//             if (this.compare(index, parentIndex)) {
//                 this.swap(index, parentIndex);
//                 index = parentIndex;
//             } else {
//                 break;
//             }
//         }
//     }

//     // Heapify down to maintain the heap property after deletion
//     heapifyDown() {
//         let index = 0;
//         const length = this.data.length;

//         while (true) {
//             const leftChildIndex = this.getLeftChildIndex(index);
//             const rightChildIndex = this.getRightChildIndex(index);
//             let swapIndex = index;

//             if (leftChildIndex < length && this.compare(leftChildIndex, swapIndex)) {
//                 swapIndex = leftChildIndex;
//             }
//             if (rightChildIndex < length && this.compare(rightChildIndex, swapIndex)) {
//                 swapIndex = rightChildIndex;
//             }

//             if (swapIndex === index) break;

//             this.swap(index, swapIndex);
//             index = swapIndex;
//         }
//     }

//     // View the current state of the heap
//     printHeap() {
//         console.log(this.data);
//     }
// }

// const maxHeap = new Heap('max');  //* just change here , when you want max Heap
// maxHeap.insert(10);
// maxHeap.insert(20);
// maxHeap.insert(5);
// maxHeap.insert(7);
// maxHeap.insert(2);

// console.log("Max-Heap:");
// maxHeap.printHeap();

// console.log("Removed root:", maxHeap.removeRoot());
// maxHeap.printHeap();



// //^^^ Min heap only

// class MinHeap {
//     constructor() {
//         this.heap = [];
//     }

//     // Get the index of parent and children
//     parentIndex(index) {
//         return Math.floor((index - 1) / 2);
//     }
//     leftChildIndex(index) {
//         return 2 * index + 1;
//     }
//     rightChildIndex(index) {
//         return 2 * index + 2;
//     }

//     // Insert an element into the heap
//     insert(value) {
//         this.heap.push(value); // Add value to the end
//         this.heapifyUp(); // Restore heap property
//     }

//     heapifyUp() {
//         let index = this.heap.length - 1; // Start from the last element
//         while (
//             index > 0 &&
//             this.heap[index] < this.heap[this.parentIndex(index)]
//         ) {
//             // Swap if the parent is greater
//             [this.heap[index], this.heap[this.parentIndex(index)]] = 
//             [this.heap[this.parentIndex(index)], this.heap[index]];
//             index = this.parentIndex(index);
//         }
//     }

//     // Remove and return the smallest element (root)
//     remove() {
//         if (this.heap.length === 0) return null;
//         if (this.heap.length === 1) return this.heap.pop();

//         const root = this.heap[0];
//         this.heap[0] = this.heap.pop(); // Replace root with the last element
//         this.heapifyDown(); // Restore heap property
//         return root;
//     }

//     heapifyDown() {
//         let index = 0;
//         while (this.leftChildIndex(index) < this.heap.length) {
//             let smallerChildIndex = this.leftChildIndex(index);
//             if (
//                 this.rightChildIndex(index) < this.heap.length &&
//                 this.heap[this.rightChildIndex(index)] < this.heap[smallerChildIndex]
//             ) {
//                 smallerChildIndex = this.rightChildIndex(index);
//             }
//             if (this.heap[index] <= this.heap[smallerChildIndex]) break;

//             // Swap if the child is smaller
//             [this.heap[index], this.heap[smallerChildIndex]] = 
//             [this.heap[smallerChildIndex], this.heap[index]];
//             index = smallerChildIndex;
//         }
//     }
// }

// // Example Usage
// const heap = new MinHeap();
// heap.insert(10);
// heap.insert(5);
// heap.insert(20);
// heap.insert(2);

// console.log(heap.heap); // Output: [2, 5, 20, 10]
// console.log(heap.remove()); // Output: 2 (smallest element)
// console.log(heap.heap); // Output: [5, 10, 20]




// //^^^ max heap only

// class MaxHeap {
//     constructor() {
//         this.heap = [];
//     }

//     // Get the index of parent and children
//     parentIndex(index) {
//         return Math.floor((index - 1) / 2);
//     }
//     leftChildIndex(index) {
//         return 2 * index + 1;
//     }
//     rightChildIndex(index) {
//         return 2 * index + 2;
//     }

//     // Insert an element into the heap
//     insert(value) {
//         this.heap.push(value); // Add value to the end
//         this.heapifyUp(); // Restore max-heap property
//     }

//     heapifyUp() {
//         let index = this.heap.length - 1; // Start from the last element
//         while (
//             index > 0 &&
//             this.heap[index] > this.heap[this.parentIndex(index)]
//         ) {
//             // Swap if the parent is smaller
//             [this.heap[index], this.heap[this.parentIndex(index)]] = 
//             [this.heap[this.parentIndex(index)], this.heap[index]];
//             index = this.parentIndex(index);
//         }
//     }

//     // Remove and return the largest element (root)
//     remove() {
//         if (this.heap.length === 0) return null;
//         if (this.heap.length === 1) return this.heap.pop();

//         const root = this.heap[0];
//         this.heap[0] = this.heap.pop(); // Replace root with the last element
//         this.heapifyDown(); // Restore max-heap property
//         return root;
//     }

//     heapifyDown() {
//         let index = 0;
//         while (this.leftChildIndex(index) < this.heap.length) {
//             let largerChildIndex = this.leftChildIndex(index);
//             if (
//                 this.rightChildIndex(index) < this.heap.length &&
//                 this.heap[this.rightChildIndex(index)] > this.heap[largerChildIndex]
//             ) {
//                 largerChildIndex = this.rightChildIndex(index);
//             }
//             if (this.heap[index] >= this.heap[largerChildIndex]) break;

//             // Swap if the child is larger
//             [this.heap[index], this.heap[largerChildIndex]] = 
//             [this.heap[largerChildIndex], this.heap[index]];
//             index = largerChildIndex;
//         }
//     }
// }

// // Example Usage
// const maxHeap = new MaxHeap();
// maxHeap.insert(10);
// maxHeap.insert(20);
// maxHeap.insert(5);
// maxHeap.insert(30);

// console.log(maxHeap.heap); // Output: [30, 20, 5, 10]
// console.log(maxHeap.remove()); // Output: 30 (largest element)
// console.log(maxHeap.heap); // Output: [20, 10, 5]
