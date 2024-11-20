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
// https://youtu.be/-0ZIresFUZI?si=XokaJuw2BdWdpjlA 


// //^^^ Reverse a stack

// class Stack {
//   constructor() {
//       this.stack = [];
//   }

//   // Push an item onto the stack
//   push(item) {
//       this.stack.push(item);
//   }

//   // Pop an item from the stack
//   pop() {
//       return this.stack.pop();
//   }

//   // Peek the top item of the stack
//   peek() {
//       return this.stack[this.stack.length - 1];
//   }

//   // Reverse the stack using recursion
//   reverse() {
//       if (this.stack.length === 0) {
//           return;
//       }
//       const item = this.pop();
//       this.reverse();
//       this.insertAtBottom(item);
//   }

//   // Helper function to insert an element at the bottom of the stack
//   insertAtBottom(item) {
//       if (this.stack.length === 0) {
//           this.push(item);
//       } else {
//           const top = this.pop();
//           this.insertAtBottom(item);
//           this.push(top);
//       }
//   }

//   // Display the stack
//   display() {
//       console.log(this.stack);
//   }
// }

// // Example usage:
// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);

// console.log("Original Stack:");
// stack.display();

// stack.reverse();

// console.log("Reversed Stack:");
// stack.display();


// //^^^ Find the Middle of a Stack:

// class Stack {
//   constructor() {
//       this.stack = [];
//   }

//   // Push an item onto the stack
//   push(item) {
//       this.stack.push(item);
//   }

//   // Pop an item from the stack
//   pop() {
//       return this.stack.pop();
//   }

//   // Find the middle of the stack
//   findMiddle() {
//       if (this.stack.length === 0) return null;

//       let slow = 0;
//       let fast = 0;
//       while (fast < this.stack.length && fast + 2 < this.stack.length) {
//           slow++;
//           fast += 2;
//       }

//       return this.stack[slow];
//   }

//   // Display the stack
//   display() {
//       console.log(this.stack);
//   }
// }

// // Example usage:
// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);

// console.log("Middle of Stack:", stack.findMiddle());


// //^^^ Valid Parenthesis

// function isValidParentheses(s) {
//   // Create an empty stack
//   let stack = [];
  
//   // Loop through each character in the string
//   for (let i = 0; i < s.length; i++) {
//       let char = s[i];
      
//       // If the character is an opening parenthesis, push it to the stack
//       if (char === '(') {
//           stack.push(char);
//       }
//       // If the character is a closing parenthesis
//       else if (char === ')') {
//           // Check if there is a matching opening parenthesis in the stack
//           if (stack.length === 0 || stack.pop() !== '(') {
//               return false; // If not, return false
//           }
//       }
//   }
  
//   // If the stack is empty, all parentheses are matched
//   return stack.length === 0;
// }

// // Test cases
// console.log(isValidParentheses("()"));       // true
// console.log(isValidParentheses("()()"));     // true
// console.log(isValidParentheses("(())"));     // true
// console.log(isValidParentheses("(()"));      // false
// console.log(isValidParentheses("())"));      // false
// console.log(isValidParentheses("(()())"));   // true
// console.log(isValidParentheses("()(()))"));  // false



// //^^^ Reverse a string using stack 

// function reverseString(str) {
//   // Create an empty stack (array in JavaScript)
//   let stack = [];
  
//   // Push each character of the string onto the stack
//   for (let i = 0; i < str.length; i++) {
//       stack.push(str[i]);
//   }
  
//   // Initialize an empty string to store the reversed string
//   let reversedStr = '';
  
//   // Pop characters off the stack and build the reversed string
//   while (stack.length > 0) {
//       reversedStr += stack.pop();
//   }
  
//   return reversedStr;
// }

// // Test cases
// console.log(reverseString("hello"));  // Output: "olleh"
// console.log(reverseString("world"));  // Output: "dlrow"
// console.log(reverseString("abcde"));  // Output: "edcba"
