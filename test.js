// const target= 10;
// const arr=[10,60,4,9,8,6];

// function find(target,arr) {
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==target){               //   0(n2) S
//                 return [arr[i],arr[j]]               //   0(1) T
//             }
//         }
        
//     }
// }

// console.log(find(target,arr));





// const target= 10;
// const arr=[10,60,4,9,8,6];

// function find(target,arr) {
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             let bal = target-arr[i];
//             if(arr[j]==bal){
//                 return [arr[i],arr[j]]
//             }
//         }
        
//     }
// }


// console.log(find(target,arr));




// function moveTargetToEnd(arr, target) {
//     let index = 0; // Pointer for placing non-target elements

//     // First pass: move all non-target elements to the front
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== target) {
//             arr[index] = arr[i];
//             index++;
//         }
//     }

//     // Second pass: fill the rest of the array with the target
//     for (let i = index; i < arr.length; i++) {
//         arr[i] = target;
//     }
// }

// // Example usage:
// const array = [1, 2, 3, 4, 3, 2, 3, 1, 3];
// const target = 3;
// moveTargetToEnd(array, target);

// console.log(array); // Output: [1, 2, 4, 2, 1, 3, 3, 3, 3]


                                 //& linked list add , delete , insert

// class Node {
//     constructor(data) {
//         this.data = data;  // Value of the node
//         this.next = null;  // Pointer to the next node
//     }
// }


// class LinkedList {
//     constructor() {
//         this.head = null;  // Start of the list
//         this.tail = null;  // End of the list
//     }

//     // Method to add a new node at the end of the list
//     add(data) {
//         const newNode = new Node(data);  // Create a new node with the given data

//         if (this.head === null) {  // If the list is empty
//             this.head = newNode;
//             this.tail = newNode;
//         } else {                   // If the list already has elements
//             this.tail.next = newNode;  // Link the last node to the new node
//             this.tail = newNode;  // Update the tail to the new node
//         }
//     }

//     // Method to display the list
//     printList() {
//         let current = this.head;
//         while (current !== null) {
//             console.log(current.data);  // Print data of each node
//             current = current.next; 
//         }
//     }

//     deleteNode(data) {
//      let temp = this.head;
//         if (temp !== null && temp.data == data) {
//             this.head = this.head.next;
//             return;
//         }

//         while (temp.next) {
//             if (temp.next.data === data) {
//                  //for tail deletion handle;
//                  if (current.next === this.tail) {
//                     this.tail = current; // Update the tail to the current node (new last node)
//                 }

//                 temp.next = temp.next.next; // Bypass the node to be deleted
//                 return;
//             }
//             temp = temp.next; 
//         }
//     }

// }

// // Example usage:
// const list = new LinkedList();
// list.add(1);
// list.add(2);
// list.add(3);
// list.deleteNode(3)
// list.printList(); // Outputs: 1, 2, 3


                //& Factorial Problem from broto channel

// function f(n){

//     if(n<=1){
//         return 1;
//     }

//     f(n-1);

//     console.log(n);

//     f(n-1);
// }

// f(5);




