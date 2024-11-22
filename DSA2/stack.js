//^^^ stack in linkedlist

// class Node {
//   constructor(value) {
//       this.value = value;
//       this.next = null;
//   }
// }

// class Stack {
//     constructor() {
//       this.top = null;
//       this.size = 0; 
//     }
  
//     push(value) {
//       const newNode = new Node(value);
//       newNode.next = this.top;
//       this.top = newNode;  
//       this.size++;
//     }
  
//     pop() {
//       if (this.isEmpty()) {
//         return "Stack is empty";
//       }
//       const poppedValue = this.top.value;
//       this.top = this.top.next; 
//       this.size--;
//       return poppedValue;
//     }
  
//     peek() {
//       if (this.isEmpty()) {
//         return "Stack is empty";
//       }
//       return this.top.value;
//     }
  
//     isEmpty() {
//       return this.size === 0;
//     }
//   }
  
//   const stack = new Stack();
//   stack.push(10);
//   stack.push(20);
//   console.log(stack.peek()); // 20
//   console.log(stack.pop());  // 20
//   console.log(stack.isEmpty()); // false
  
  
//   Stack:
// Uses a top pointer to track the most recent node.
// Push and pop operations are efficient (O(1)).
// https://youtu.be/-0ZIresFUZI?si=XokaJuw2BdWdpjlA 


//^^^ Reverse & Sort a stack

// class Stack{
//   constructor(){
//       this.stack=[];
//   }
//   isEmpty(){
//       return this.stack.length===0
//   }

//   push(element){

//       this.stack.push(element);

//   }


//   pop(){

//       if(this.isEmpty()){
//           console.log("stack is empty");
//           return;
//       }else{
//         return  this.stack.pop()
//       }
//   }


//   peek(){
//       if(this.isEmpty()){
//           console.log("stack is empty");
//           return 
//       }else{
//         return this.stack[this.stack.length-1]
          
//       }
//   }
    
// reverse() {
//     if (this.stack.length === 0) {
//         return;
//     }
//     const temp = this.stack.shift();
//     this.reverse();
//     this.push(temp);
// }

// sort(){
//   if(this.isEmpty()){
//       return;
//   }else{
//       let temp=this.pop();
//       this.sort();
//       this.sortInsert(temp);
//   }
// }
// sortInsert(temp){
//   if(this.isEmpty()||this.peek()<temp){
//       this.stack.push(temp)
      
//   }else{
//        let newTemp=this.stack.pop();
//       this.sortInsert(temp);
//       this.stack.push(newTemp);
//   }
// }

//   display(){
//       console.log(this.stack.join(" "));
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

//   push(item) {
//       this.stack.push(item);
//   }

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

// // // Test cases
// // console.log(isValidParentheses("()"));       // true
// // console.log(isValidParentheses("()()"));     // true
// // console.log(isValidParentheses("(())"));     // true
// // console.log(isValidParentheses("(()"));      // false
// // console.log(isValidParentheses("())"));      // false
// // console.log(isValidParentheses("(()())"));   // true
// // console.log(isValidParentheses("()(()))"));  // false



// //^^^ Reverse a string using stack 

// function reverseString(str) {
//   let stack = [];

//   for (let i = 0; i < str.length; i++) {
//       stack.push(str[i]);
//   }
  
//   let reversedStr = '';
  
//   while (stack.length > 0) {
//       reversedStr += stack.pop();
//   }
  
//   return reversedStr;
// }

// // Test cases
// console.log(reverseString("world")); 
// console.log(reverseString("abcde"));
// console.log(reverseString([1,2,3,4,5])); 