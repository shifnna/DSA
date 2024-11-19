//^^^ 1. BASIC OPERATIONS

//* Insert at beginning

// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null
//     }

    // insertBeginning(data){
    //     const newNode= new Node(data);
    //     newNode.next=this.head;
    //     this.head=newNode;

    //     if(this.tail==null){
    //         this.tail=newNode;
    //     }
    // }

//     display(){
//         if(this.head==null){
//             console.log('no node occure')
//         }else{
//             let current=this.head;
//             while (current !==null) {
//                 console.log(current.data);
//                 current=current.next;
//             }
//         }
//     }
// }

// const list = new LinkedList();
// list.insertBeginning(1);
// list.insertBeginning(2);
// list.insertBeginning(3);
// list.display();



//* insert at end

// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null
//     }

//     append(data){
//         const newNode=new Node(data);
//         if(this.head==null){
//             this.head=newNode;
//             this.tail=newNode;
//         }else{
//             this.tail.next=newNode;
//             this.tail=newNode;
//         }
//     }

//     display(){
//         if(this.head==null){
//             console.log('no node occure')
//         }else{
//             let current=this.head;
//             while (current !==null) {
//                 console.log(current.data);
//                 current=current.next;
//             }
//         }
//     }
// }

// const list = new LinkedList();
// list.append(1);
// list.display();




//* Insert after;

// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null
//     }

//     append(data){
//         const newNode=new Node(data);
//         if(this.head==null){
//             this.head=newNode;
//             this.tail=newNode;
//         }else{
//             this.tail.next=newNode;
//             this.tail=newNode;
//         }
//     }

//     insertAfter(after, data) {
//         const newNode = new Node(data);
//         let current = this.head;    
//         // Traverse to find the node with data matching 'after'
//         while (current !== null && current.data !== after) {
//             current = current.next;
//         }   
//         // If the node with data 'after' is found, insert the new node after it
//         if (current !== null) {
//             newNode.next = current.next;
//             current.next = newNode;
    
//             if (current === this.tail) {
//                 this.tail = newNode;
//             }
//         } else {
//             console.log(`Node with data ${after} not found.`);
//         }
//     }
    

//     display(){
//         if(this.head==null){
//             console.log('no node occure')
//         }else{
//             let current=this.head;
//             while (current !==null) {
//                 console.log(current.data);
//                 current=current.next;
//             }
//         }
//     }
// }

// const list = new LinkedList();
// list.append(5);
// list.append(10);
// list.append(20);
// list.insertAfter(10,15)
// list.display();


//* Insert at a position

// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null
//     }

//     append(data){
//         const newNode=new Node(data);
//         if(this.head==null){
//             this.head=newNode;
//             this.tail=newNode;
//         }else{
//             this.tail.next=newNode;
//             this.tail=newNode;
//         }
//     }

//     insertBeginning(data){
//                 const newNode= new Node(data);
//                 newNode.next=this.head;
//                 this.head=newNode;
        
//                 if(this.tail==null){
//                     this.tail=newNode;
//                 }
//             }
        
//     insertAt(position, data) {
//         const newNode= new Node(data);
//         if(position===1){
//             insertBeginning(data);
//         }
//         let current=this.head;
//         let previous=null;
//         let index=1;

//         while (current!==null && index<position) {
//             previous=current;
//             current=current.next;
//             index++;
//         }

//         newNode.next=current;
//         if (previous !== null) {
//         previous.next=newNode;
//         }

//         if(newNode.next==null){
//             this.tail=newNode;
//         }
//     }
    

//     display(){
//         if(this.head==null){
//             console.log('no node occure')
//         }else{
//             let current=this.head;
//             while (current !==null) {
//                 console.log(current.data);
//                 current=current.next;
//             }
//         }
//     }
// }

// const list = new LinkedList();
// list.append(5);
// list.append(10);
// list.append(20);
// list.insertAt(3,15)
// list.display();



//* Count nodes

// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null;
//     }

//     add(data){
//         let newNode=new Node(data);
//         if(this.head ==null){
//             this.head=newNode;
//             this.tail=newNode;
//         }else{
//           this.tail.next=newNode;
//           this.tail=newNode;
//         }
//     }

//     count(){
//         let count=0;
//         let current=this.head;
//         while (current!=null) {
//             current=current.next;
//             count++;
//         }
//         console.log('total count: ',count);
        
//     }
// }

// let list=new LinkedList;
// list.add(21);
// list.add(31);
// list.add(21);
// list.add(31);
// list.add(21);

// list.count();



//* Find a Node

// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null;
//     }

//     add(data){
//         const newNode = new Node(data);
//         if (this.head==null) {
//             this.head=newNode;
//             this.tail=newNode;
//         }else{
//             this.tail.next=newNode;
//             this.tail=newNode;
//         }
//     }

//     find(data){
//         let current=this.head;
//         while (current!==null && current.data!==data) {
//             current=current.next;
//         } 

//         if(current!=null){
//             console.log(current);
//         }else{
//             console.log('sorry, your node is not found');
            
//         }
        
//     }
// }

// let list = new LinkedList();
// list.add(10);
// list.add(30);
// list.add(50);

// list.find(10);


//* Delete a Node

// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null;
//     }

//     add(data){
//         const newNode = new Node(data);
//         if (this.head==null) {
//             this.head=newNode;
//             this.tail=newNode;
//         }else{
//             this.tail.next=newNode;
//             this.tail=newNode;
//         }
//     }

//     delete(data){
//         let current = this.head;
//         let previous=null;
        
//     // Case when the node to delete is the head node
//     if (current.data === data) {
//         this.head = current.next;

//         if (this.head === null) {
//             this.tail = null;
//         }
//         return;
//     }

//         while (current!==null && current.data!==data) {
//            previous=current
//            current = current.next;
//         }

//         if(current==null){
//             console.log('sorry , this node is not found');
//         }else{
//             previous.next=current.next;
//         }
//     }

//     display(){
//        let current=this.head;
//         while (current!==null) {
//             console.log(current);
//             current=current.next;
//         }
//     }
// }

// let list = new LinkedList();
// list.add(10);
// list.add(30);
// list.add(50);

// list.delete(10);
// list.display();




//^^^ 2.INTERMEDIATE PROBLEMS


//* Reverse the linkedList

// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null;
//     }

//     add(data){
//         const newNode = new Node(data);
//         if (this.head==null) {
//             this.head=newNode;
//             this.tail=newNode;
//         }else{
//             this.tail.next=newNode;
//             this.tail=newNode;
//         }
//     }

//     reverse(){
//         let previous=null;
//         let next=null;
//         let current=this.head;
//         this.tail=current;

//         while (current!==null) {
//             next=current.next;
//             current.next=previous;

//             previous=current;
//             current=next;
//         }
//         this.head=previous;
//     }

//     display(){
//        let current=this.head;
//         while (current!==null) {
//             console.log(current.data);
//             current=current.next;
//         }
//     }
// }

// let list = new LinkedList();
// list.add(10);
// list.add(30);
// list.add(50);

// console.log('Original List');
// list.display();

// console.log('Reversed List');
// list.reverse();
// list.display();



//* Detect if there is a loop in a linkedList

// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null;
//     }

//     add(data){
//         const newNode = new Node(data);
//         if (this.head==null) {
//             this.head=newNode;
//             this.tail=newNode;
//         }else{
//             this.tail.next=newNode;
//             this.tail=newNode;
//         }
//     }

//     hasLoop() {
//         let slow = this.head;
//         let fast = this.head;

//         while (fast !== null && fast.next !== null) {
//             slow = slow.next;          
//             fast = fast.next.next;     

//             if (slow === fast) {     // the fast is running faster than slow, so, when the slow and fast reach in the same node only it  will return true.    
//                 return true;        //and only when it works in a cycle loop they will meet at a same node together. 
//             }                      //(it is not checking the data same or not, it checks if they are in the same node eppozhenkilum ee cycle il karangi nadakkumbo) 
//         }
        
//         return false;                    
//     }

// }

// let list = new LinkedList();
// list.add(10);
// list.add(30);
// list.add(50);
// list.tail.next=list.head.next;  //If you make the last node's next point to any previous node (instead of null), 
// console.log(list.hasLoop());   //it creates a loop (cycle).This means the list doesn't have an end and goes in circles.



//* Remove Duplicates from a sorted list

// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null;
//     }
// }

// class linkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null
//     }

//     add(data){
//         const newNode=new Node(data)
//         if(this.head==null){
//            this.head=newNode;
//            this.tail=newNode;
//         }else{
//             this.tail.next=newNode;
//             this.tail=newNode;
//         }
//     }

//     removeDuplicates(){
//         let current=this.head;
//         while (current && current.next) {
//             if(current.data==current.next.data){
//                 current.next=current.next.next;
//             }else{
//                 current=current.next;
//             }
//         }
//     }

//     display(){
//        let current=this.head;
//         while (current!==null) {
//             console.log(current.data);
//             current=current.next;
//         }
//     }
// }

// const list = new linkedList();
// list.add(10);
// list.add(20);
// list.add(20);
// list.add(30);
// list.add(40);
// list.add(40);
// list.add(40);
// list.add(40);

// console.log('original list');
// list.display();

// console.log('list afterr removing duplicates');
// list.removeDuplicates();
// list.display();


//* Find Center of the list

// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null;
//     }
// }

// class linkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null
//     }

//     add(data){
//         const newNode=new Node(data)
//         if(this.head==null){
//            this.head=newNode;
//            this.tail=newNode;
//         }else{
//             this.tail.next=newNode;
//             this.tail=newNode;
//         }
//     }

//     findMiddle(){
//          let slow=this.head;
//          let fast=this.head;

//          while (fast!==null && fast.next!==null) {
//             slow=slow.next;
//             fast=fast.next.next;
//          }
//         console.log('middle is:',slow.data);
//     }

// }

// const list = new linkedList();
// list.add(10);
// list.add(20);
// list.add(20);
// list.add(30);
// list.add(40);
// list.add(40);
// list.add(40);

// list.findMiddle();



//* Is Palindrome checking

// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null;
//     }
// }

// class linkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null
//     }

//     add(data){
//         const newNode=new Node(data)
//         if(this.head==null){
//            this.head=newNode;
//            this.tail=newNode;
//         }else{
//             this.tail.next=newNode;
//             this.tail=newNode;
//         }
//     }

//     isPalindrome() {
//         let values = [];
//         let current = this.head;
    
//         // Step 1: Copy all values to an array
//         while (current) {
//             values.push(current.data);
//             current = current.next;
//         }
    
//         // Step 2: Check if the array is a palindrome
//         let left = 0;
//         let right = values.length - 1;
//         while (left < right) {
//             if (values[left] !== values[right]) {
//                 return false;
//             }
//             left++;
//             right--;
//         }
    
//         return true;
//     }

// }

// const list = new linkedList();
// list.add(40);
// list.add(10);
// list.add(30);
// list.add(30);
// list.add(10);
// list.add(40);

// console.log('is palindrome?:',list.isPalindrome());


 
//* Find minimum value


// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null;
//     }
// }

// class linkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null
//     }

//     add(data){
//         const newNode=new Node(data)
//         if(this.head==null){
//            this.head=newNode;
//            this.tail=newNode;
//         }else{
//             this.tail.next=newNode;
//             this.tail=newNode;
//         }
//     }

//     findMin(){
//         if (this.head === null) {
//             console.log("The list is empty.");
//             return null;
//         }
    
//         let current=this.head;
//         let min=current.data;
        
//         while(current){
//             if (current.data < min) {
//                 min = current.data;
//             }
//             current = current.next;
//         }
//         return min;

//     }

// }

// const list = new linkedList();
// list.add(40);
// list.add(10);
// list.add(20);

// console.log('min:',list.findMin());



//* find Maximum 


// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null;
//     }
// }

// class linkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null
//     }

//     add(data){
//         const newNode=new Node(data)
//         if(this.head==null){
//            this.head=newNode;
//            this.tail=newNode;
//         }else{
//             this.tail.next=newNode;
//             this.tail=newNode;
//         }
//     }

//     findMax(){
//         if (this.head === null) {
//             console.log("The list is empty.");
//             return null;
//         }
    
//         let current=this.head;
//         let max=current.data;
        
//         while(current){
//             if (current.data > max) {
//                 max = current.data;
//             }
//             current = current.next;
//         }
//         return max;

//     }

// }

// const list = new linkedList();
// list.add(40);
// list.add(10);
// list.add(20);

// console.log('max:',list.findMax());




//* array to linkedlist

// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null;
//     }
// }

// class linkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null
//     }

//     add(data){
//         const newNode=new Node(data)
//         if(this.head==null){
//            this.head=newNode;
//            this.tail=newNode;
//         }else{
//             this.tail.next=newNode;
//             this.tail=newNode;
//         }
//     }

//     fromArray(arr){
//         for(let one of arr){
//             this.add(one);
//         }
//     }
    
//     display(){
//         let current=this.head;
//        while (current!==null) {
//          console.log(current.data);
//          current=current.next;
//         }
//      }

// }

// const list = new linkedList();
// const arr=[1,2,3,4,5];
// list.fromArray(arr);
// list.display();



//* Remove Duplicates (method-1)


// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null;
//     }
// }

// class linkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null
//     }

//     add(data){
//         const newNode=new Node(data)
//         if(this.head==null){
//            this.head=newNode;
//            this.tail=newNode;
//         }else{
//             this.tail.next=newNode;
//             this.tail=newNode;
//         }
//     }

//     removeDuplicates(){
//         let current=this.head;
//         let previous=null;
//         let seen = new Set();

//         while (current) {
//             if(seen.has(current.data)){
//                 previous.next=current.next;
//             }else{
//                 seen.add(current.data);
//                 previous=current;
//             }
//             current=current.next;
//         }
//     }
    
//     display(){
//         let current=this.head;
//        while (current!==null) {
//          console.log(current.data);
//          current=current.next;
//         }
//      }

// }

// const list = new linkedList();
// list.add(10);
// list.add(20);
// list.add(10);
// list.add(20);
// list.add(10);
// list.add(20);
// list.add(10);
// list.add(20);

// list.removeDuplicates()
// list.display();



//* Remove Duplicates (method-2)


// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null;
//     }
// }

// class linkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null
//     }

//     add(data){
//         const newNode=new Node(data)
//         if(this.head==null){
//            this.head=newNode;
//            this.tail=newNode;
//         }else{
//             this.tail.next=newNode;
//             this.tail=newNode;
//         }
//     }

//     removeDuplicates(){
//         let current=this.head;
//         while (current) {
//             let runner = current;
//             while (runner.next) {
//                 if(current.data===runner.next.data){
//                     runner.next = runner.next.next;
//                 }else{
//                     runner=runner.next;
//                 }
//             }
//             current=current.next;
//         }
//     }
    
//     display(){
//         let current=this.head;
//        while (current!==null) {
//          console.log(current.data);
//          current=current.next;
//         }
//      }

// }

// const list = new linkedList();
// list.add(10);
// list.add(20);
// list.add(10);
// list.add(20);
// list.add(10);
// list.add(20);
// list.add(10);
// list.add(20);

// list.removeDuplicates()
// list.display();




//^^^ Doubly linked list


//* Reverse the Doubly linkedList


// class Node {
//     constructor(data) {
//         this.data=data;
//         this.next=null;
//         this.previous=null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null;
//     }

//     add(data){
//         const newNode = new Node(data);
//         if (this.head==null) {
//             this.head=newNode;
//             this.tail=newNode;
//         }else{
//             this.tail.next=newNode;
//             newNode.previous=this.tail;
//             this.tail=newNode;
//         }
//     }

    // reverse(){
    //     let current = this.head;
    //     let temp = null;

    //     while (current) {
    //         temp = current.previous;
    //         current.previous = current.next;
    //         current.next = temp;
    //         current = current.previous; 
    //     }
    //     if (temp !== null) {
    //         this.head = temp.previous;
    //     }
    // }

//     display(){
//        let current=this.head;
//         while (current!==null) {
//             console.log(current.data);
//             current=current.next;
//         }
//     }
// }

// let list = new LinkedList();
// list.add(10);
// list.add(20);
// list.add(30);
// list.add(40);
// list.add(50);

// console.log('Original List');
// list.display();

// console.log('Reversed List');
// list.reverse();
// list.display();