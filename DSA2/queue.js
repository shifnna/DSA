// //^^^ Queue in linkedlist

// class Node{
//   constructor(value){
//      this.value=value;
//      this.next=null
//   }
// }

// class Queue {
//  constructor() {
//      this.front = null;
//      this.rear = null;
//      this.size = 0;
//  }

//  enqueue(value){
//      const newNode=new Node(value);
//      if(this.isEmpty()){
//          this.front = this.rear = newNode;
//      }else{
//          this.rear.next = newNode;
//          this.rear = newNode;
//      }
//      this.size++;
//  }

//  dequeue(){
//      if(this.isEmpty()){
//          return 'Queue is empty'
//      }
//      const deqValue = this.front.value;
//      this.front = this.front.next;
//      if(!this.front){
//          this.rear = null
//      }
//      this.size--;
//      return deqValue;
//  }

//  peek(){
//      if(this.isEmpty()){
//          return 'Queue is Empty'
//      }
//      return this.front.value;
//  }

//  isEmpty(){
//      return this.size === 0;
//  }
// }

// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log(queue.peek());      // 10
// console.log(queue.dequeue());   // 10
// console.log(queue.peek());      // 20
// console.log(queue.isEmpty());   // false
// console.log(queue.dequeue());   // 20
// console.log(queue.isEmpty());   // true
// console.log(queue.dequeue());   // queue is empty

  
//   Queue:
// Maintains both front and rear pointers for efficient enqueue and dequeue operations.
// Operations are efficient (O(1)).
// https://youtu.be/15q-fLZqo_0?si=FrVPaSIc3PP5YI19


// //^^^ reverse a queue

// class Queue {
//   constructor() {
//       this.queue = [];
//   }

//   // Enqueue an item to the queue
//   enqueue(item) {
//       this.queue.push(item);
//   }

//   // Dequeue an item from the queue
//   dequeue() {
//       return this.queue.shift();
//   }

//   // Reverse the queue using recursion
 function reverse() {
      if (this.queue.length === 0) {
          return;
      }
      const item = this.dequeue();
      this.reverse();
      this.enqueue(item);
  }

//   // Display the queue
//   display() {
//       console.log(this.queue);
//   }
// }

// // Example usage:
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);

// console.log("Original Queue:");
// queue.display();

// queue.reverse();

// console.log("Reversed Queue:");
// queue.display();


// //^^^ Middle of a queue

// class Queue {
//   constructor() {
//       this.queue = [];
//   }

//   enqueue(item) {
//       this.queue.push(item);
//   }

//   dequeue() {
//       return this.queue.shift();
//   }

//   findMiddle() {
//       if (this.queue.length === 0) return null;

//       let slow = 0;
//       let fast = 0;
//       while (fast < this.queue.length && fast + 2 < this.queue.length) {
//           slow++;
//           fast += 2;
//       }

//       return this.queue[slow];
//   }

//   display() {
//       console.log(this.queue);
//   }
// }

// // Example usage:
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);

// console.log("Middle of Queue:", queue.findMiddle());
