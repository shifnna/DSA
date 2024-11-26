// //^^^ Heap basic implimentation (Min & Max included)

//^^^ Min heap

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

//    heapifyDown() {
//         let index = 0;
//         while (this.leftChildIndex(index) < this.heap.length) {
//             let smallerChildIndex = this.leftChildIndex(index);                        //s
//             if (                                                                       //m
//                 this.rightChildIndex(index) < this.heap.length &&                      //a
//                 this.heap[this.rightChildIndex(index)] < this.heap[smallerChildIndex]  //l        find smaller left/right
//             ) {                                                                        //l
//                 smallerChildIndex = this.rightChildIndex(index);                       //e 
//             }                                                                          //r
                                                                                 
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




//^^^ max heap

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
