class Queue {
    constructor() {
      this.front = null; // The front of the queue
      this.rear = null;  // The rear of the queue
      this.size = 0;     // Tracks the size of the queue
    }
  
    // Add an element to the rear of the queue
    enqueue(value) {
      const newNode = new Node(value);
      if (this.isEmpty()) {
        this.front = this.rear = newNode; // First element in the queue
      } else {
        this.rear.next = newNode; // Link the new node at the end
        this.rear = newNode;      // Update the rear pointer
      }
      this.size++;
    }
  
    // Remove and return the front element of the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      const dequeuedValue = this.front.value;
      this.front = this.front.next; // Update the front pointer
      if (!this.front) {
        this.rear = null; // If the queue becomes empty
      }
      this.size--;
      return dequeuedValue;
    }
  
    // View the front element without removing it
    frontValue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.front.value;
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.size === 0;
    }
  }
  
  // Example Usage
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  console.log(queue.frontValue()); // 10
  console.log(queue.dequeue());    // 10
  console.log(queue.isEmpty());    // false

  
//   Queue:

// Maintains both front and rear pointers for efficient enqueue and dequeue operations.
// Operations are efficient (O(1)).
// https://youtu.be/15q-fLZqo_0?si=FrVPaSIc3PP5YI19