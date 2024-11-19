class Stack {
    constructor() {
      this.top = null; // The top of the stack
      this.size = 0;   // Tracks the size of the stack
    }
  
    // Add an element to the stack
    push(value) {
      const newNode = new Node(value);
      newNode.next = this.top; // Link the new node to the current top
      this.top = newNode;      // Update the top pointer
      this.size++;
    }
  
    // Remove and return the top element of the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      const poppedValue = this.top.value;
      this.top = this.top.next; // Update the top pointer
      this.size--;
      return poppedValue;
    }
  
    // View the top element without removing it
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.top.value;
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.size === 0;
    }
  }
  
  // Example Usage
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  console.log(stack.peek()); // 20
  console.log(stack.pop());  // 20
  console.log(stack.isEmpty()); // false
  
  
//   Stack:

// Uses a top pointer to track the most recent node.
// Push and pop operations are efficient (O(1)).