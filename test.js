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
//////////////////////////////////////////////////////////////////////////////

// //^^^ Bubble Sort problem

// function bubbleSort(arr){   //the largest (or smallest) will bubbles up to the end then ,
//     let swapped=true;       //the second largest (or smallest) will bubbles up to the second end then the third will repeat... 
//     while (swapped) {       // that why its called bubble sorting!
//         swapped=false;
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i];
//                 arr[i]=arr[i+1];
//                 arr[i+1]=temp;
//                 swapped=true;
//             }
//         }
//     }
//     return arr;
    
// }

// let arr=[8,20,-2,4,-6];
// console.log('sorted array:',bubbleSort(arr));



// //^^^ Insertion Sort problem  (sorted in one part and unsorted into another (Yes/No))

// function insertionSort(arr){

//     for(let i=1;i<arr.length;i++){
//         let numberToInsert = arr[i];
//         let j = i-1;
//         while (j>=0 && arr[j]>numberToInsert) {
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = numberToInsert;
//     }

//     return arr;
// }

// let arr = [8,20,-2,4,-6]
// console.log('sorted array:',insertionSort(arr));



// //^^^ Quick Sort problem  (select an random number and in the leftSubArr ,add the numbers which is less than random number into that and greater to the rightSubArr)

// //* last element as pivot

// function quickSort(arr){
//     if(arr.length<2){
//         return arr;
//     }

//     let left = [];
//     let right = [];
//     let pivot = arr[arr.length-1];

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }
//             //first cmplt this          and then cmplt this 
//     return [...quickSort(left),pivot,...quickSort(right)]

// }

// let arr = [8, 20, -2, 4, -6]
// console.log('sorted array:',quickSort(arr));


// //* random element as pivot

// function quickSort(arr){
//     if(arr.length<2){
//         return arr;
//     }

//     let left = [];
//     let right = [];
//     let randomIndex = Math.floor(Math.random() * arr.length);
//     let pivot = arr[randomIndex];

//     for(let i=0;i<arr.length;i++){
//         if(i===randomIndex) continue;
//         if(arr[i]<pivot){
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }

//     return [...quickSort(left),pivot,...quickSort(right)]

// }

// let arr = [8, 20, -2, 4, -6]
// console.log('sorted array:',quickSort(arr));


// //* mid element as pivot

// function quickSort(arr){
//     if(arr.length<2){
//         return arr;
//     }

//     let left = [];
//     let right = [];
//     let pivot = arr[Math.floor(arr.length/2)]; //

//     for(let i=0;i<arr.length;i++){    //remove -1
//         if(arr[i]===pivot) continue; //
//         if(arr[i]<pivot){
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }

//     return [...quickSort(left),pivot,...quickSort(right)]

// }

// let arr = [8, 20, -2, 4, -6]
// console.log('sorted array:',quickSort(arr));



// //^^^ Merge sorting (deviding and sort from scratch)

// //deviding
// function mergeSorting(arr){ 
//     if(arr.length < 2){
//         return arr;
//     }

//     let mid = Math.floor(arr.length/2);
//     let leftArr = arr.slice(0,mid);
//     let rightArr = arr.slice(mid);
//     return merge(mergeSorting(leftArr),mergeSorting(rightArr));
// }

// //comparing&sorting
// function merge(leftArr,rightArr){
//     let sortedArr = [];

//     while (leftArr.length && rightArr.length) {
//         if(leftArr[0]<=rightArr[0]){
//             sortedArr.push(leftArr.shift());
//         }else{
//             sortedArr.push(rightArr.shift());
//         }
//     }

//     return [...sortedArr,...leftArr,...rightArr];
// }


// let arr = [8, 20, -2, 4, -6];
// console.log(mergeSorting(arr));



// //^^^ Selection sort (position changing)

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let minPosition = i;

//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minPosition]>arr[j]){
//                 minPosition = j;
//             }
//         }

//         let temp = arr[i];
//         arr[i] = arr[minPosition];
//         arr[minPosition] = temp;

//     }
//     return arr;
// }

// let arr = [8, 20, -2, 4, -6];
// console.log(selectionSort(arr));
////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////array
//^^^ Basic Operations

//*  Reverse an Array

// function reverse(array){
//       let newArray = [];
//       for(let i=0;i<array.length;i++){
//         newArray[i] = array[(array.length-1)-i]
//       }
//       return newArray;
// }

// let array = [1,2,3,4,5]
// console.log('revered array:',reverse(array));


//*  Insert , delete and search an Element at a specific position  

// ...


//^^^  Intermediate Problems

//* Find Min & Max

// function find(arr){
//     let min = arr[0];
//     let max = arr[0];
//     for(let i=1;i<arr.length;i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//         if(arr[i] < min){
//             min = arr[i];
//         }
//     }
//     return {min,max}
// }

// let arr = [10,2,3,4,5]
// let result = find(arr)
// console.log('min:',result.min);
// console.log('max:',result.max);


//* Duplicates count

// function duplicates(arr){
//     let count = 0;
//     let isDuplicate = false;

//     for(let i=0;i<arr.length-1;i++){
//         isDuplicate = false;

//         for(let k=0;k<i;k++){
//             if(arr[k]==arr[i]){
//                 isDuplicate = true;
//             }
//         }

//         if(!isDuplicate){
//             for(let j=i+1;j<arr.length;j++){
//                 if(arr[i]==arr[j]){
//                     count++;
//                 }
//             }
//         }

//     }
//     return count;
// }

// let arr = [1,4,2,3,4,5];
// console.log('duplicates count:',duplicates(arr));


//* Remove Duplicates

// function rmDuplicates(arr){

//     let isDuplicate = false;
//     let array = [];

//     for(let i=0;i<arr.length;i++){
//         isDuplicate = false;
         
//         for(let k=0;k<i;k++){
//             if(arr[k]==arr[i]){
//                 isDuplicate = true;
//                 break;
//             }
//         }
            
//         if(!isDuplicate){
//             array.push(arr[i]);
//         }

//     }
//     return array;;
// }

// let arr = [1,2,3,4,5,1,2,3,4,5];
// console.log('duplicates count:',rmDuplicates(arr));


//* Move zeros to the end

// function moveZeros(arr){
//     let index = 0;

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==0){
//             arr[index]=arr[i];
//             index++;
//         }
//     }

//     for(let i=index;i<arr.length;i++){
//         arr[i]=0;
//     }

//     return arr;
// }

// let arr = [1,2,0,0,0,0,3,0,4,5];
// console.log('move zeros to the end',moveZeros(arr));


//* Merge two sorted arrays

// function mergeSortedArrays(arr1, arr2) {
//     let i = 0; 
//     let j = 0; 
//     let mergedArray = []; 

//     // Traverse both arrays and add the smaller element to mergedArray
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             mergedArray.push(arr1[i]);
//             i++;
//         } else {
//             mergedArray.push(arr2[j]);
//             j++;
//         }
//     }

//     while (i<arr1.length) {
//         mergedArray.push(arr1[i]);
//         i++
//     }
//     while (j<arr2.length) {
//         mergedArray.push(arr2[j]);
//         j++
//     }

//     return mergedArray;
// }

// let arr1 = [1, 3, 5];
// let arr2 = [2, 4, 6];
// console.log('Merged and sorted array:', mergeSortedArrays(arr1, arr2));


//* Find Intersection

// function findIntersection(arr1,arr2){
//     let array = [];
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){

//             if(arr1[i]===arr2[j]){
                
//                 let alreadyAdded = false;

//                 for(let k=0;k<array.length;k++){
//                     if(arr1[i]===array[k]){
//                         alreadyAdded =true;
//                     }
//                 }

//                 if(!alreadyAdded){
//                     array.push(arr1[i]);
//                 }

//             }

//         }
//     }
//     return array;
// }

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 6 , 3 , 7];
// console.log('Intersection of arrays:', findIntersection(arr1, arr2));


//* Two Sum

// function twoSum(array,target){
//     for(let i=0;i<array.length-1;i++){
//         for(let j=0;j<array.length;j++){
//              if(array[i]+array[j]===target){
//                 return [array[i],array[j]]
//              }
//         }
            
//     }
//     return [];
// }

// let arr = [2, 7, 11, 15];
// let target = 9;
// console.log('Two sum result:', twoSum(arr, target));


//* Binary Searching

// function BinarySearch(arr,target){
//     let left = 0;
//     let right = arr.length - 1 ;

//     while (left <= right){
//         let middle = Math.floor((right+left)/2);

//         if(arr[middle]===target){
//            return console.log('target found in position:',middle+1);
//         }else if(arr[middle] > target){
//             right = middle-1;
//         }else{
//             left = middle+1;
//         }
        
//     }

//     return console.log('target not found in the array');
    
// }

// arr=[10,20,30,40,50]
// BinarySearch(arr,30);

//* Find the peak element in an array

// function findPeak(array){
//     let peak = array[0];

//     if(array.length === 1){ // not necessary
//         return array[0];
//     }

//     for(let i=1;i<array.length;i++){
//         if(peak < array[i]){
//             peak = array[i];
//         }
//     }
    
//     return peak;
// }

// let array = [1, 3, 20, 4, 1, 0];
// console.log('peak element in the array : ',findPeak(array));


//* Sort an array

// function sortArray(array){
//     for(let i=0;i<array.length-1;i++){

//         for(let j=i+1;j<array.length;j++){
//         if(array[i] > array[j]){
//             let temp = array[i];
//             array[i] = array[j];
//             array[j] = temp
//           }
//        }

//     }
//     return array;
// }

// let array = [64, 34, 25, 12, 22, 11, 90];
// console.log('after sorting:',sortArray(array));


//* Reverse an array

// function reverse(array){

//     for(let i=0;i<array.length/2;i++){
//        let temp = array[i];
//            array[i] = array[(array.length-1)-i];
//            array[(array.length-1)-i] = temp;
//     }
    
//     return array;
// }

// let array = [1, 2, 3, 4, 5];
// console.log('array : ',reverse(array));


//* Second Largest

// function SecondLargest(array){
//     for(let i=0;i<array.length-1;i++){

//         for(let j=i+1;j<array.length;j++){
//         if(array[i] > array[j]){
//             let temp = array[i];
//             array[i] = array[j];
//             array[j] = temp
//           }
//        }

//     }
//     return array[array.length-2];
// }

// let array = [64, 34, 25, 12, 22, 11, 90];
// console.log('second largest element :',SecondLargest(array));

 //////////////////////////////////////////////////////////////////////////////////////linked list
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
///////////////////////////////////////////////////////////////////recursion
//^^^ Basic operations

//* Find Factorial

// function Factorial(n){
//     if(n<=1){
//        return 1;
//     }else{
//         return n*Factorial(n-1);
//     }
// }
// console.log(Factorial(5));


//* Sum upto 'n'

// function sumUpto(n){
//     if(n<=1){
//        return 1;
//     }else{
//         return n + sumUpto(n-1);
//     }
// }
// console.log(sumUpto(5));


//* nth value in an array

// function findNthElement(arr, n, index ) {
//     if (index === n) {
//         return arr[index];
//     }
//     return findNthElement(arr, n, index + 1);
// }

// const array = [10, 20, 30, 40, 50];
// let index = 0;
// console.log(findNthElement(array, 3 , index)); // Output: 40 (0-based index)


//* Reverse a string

// function reverseString(str,index=0,reversed=''){
//     if(index===str.length){
//         return reversed;
//     }else{
//         return reverseString(str,index+1,str[index]+reversed);
//     }
// }

// console.log(reverseString("hello"));


//* Power of a number

// function power(base,exponent){
//     if(exponent===0){
//         return 1;
//     }else{
//         return base*power(base,exponent-1);
//     }
// }

// console.log('power:',power(2,3));


//* Sum of Digits

// function sumOfDigits(num){
//     if(num===0){
//       return 0;
//     }else{
//         return (num%10) + sumOfDigits((num-(num%10))/10);
//     }
// }

// console.log(sumOfDigits(1234));


//* Febinocci of a number

// with recursion

// function febinocci(n){       // feb(n) = feb(n-1) + feb(n-2)
//     if(n<2){
//         return n;
//     }else{
//         return febinocci(n-1)+febinocci(n-2)  // oru function mathram focus cheyth nokk (maximum trust the process) , enna pinne adthat just koottiyal madhi
//     }
// }
// console.log(febinocci(7));


//without recursion

// function febinocci(n){
//     let array=[0,1];

//     for(let i = 2; i < n ; i++){
//         array.push(array[i-1]+array[i-2])
//     }
//     return array;
// }

// console.log(febinocci(7));



//* check isPalindrome?

// function isPalindrome(str,start=0,end=str.length-1){
//     if(start >= end){
//         return true;
//     }

//     if(str[start]!==str[end]){
//         return false;
//     }

//     return isPalindrome(str,start+1,end-1);
// }

// console.log('isPalindrome:',isPalindrome('mada'));


//* Sum of an array

// function sum(arr,index=0){
//     let n = arr.length-1 ;

//     if(index === n){
//         return arr[n];
//     }
//     return arr[index] + sum(arr,index+1);

// }

// let arr = [10,20,30,20,20];
// console.log('sum of the array:',sum(arr));


//* Greatest Common Devisor

// function gcd(a, b) {
//     if (b === 0) {
//         return a;
//     }
//     return gcd(b, a % b);
// }

// console.log(gcd(10, 25));

//* Binary searching

// function BinarySearch(arr,target,left=0,right=arr.length-1){

//     if(left>right){
//         return 'not found'
//     }

//     const mid = Math.floor((left+right)/2);

//     if(arr[mid]===target){
//         return mid;
//     }

//     if(arr[mid]>target){
//         return BinarySearch(arr,target,left,mid-1)
//     }

//     if(arr[mid]<target){
//         return BinarySearch(arr,target,mid+1,right)
//     }
// }

// const sortedArray = [1, 3, 5, 7, 9, 11];
// console.log(BinarySearch(sortedArray, 4));

//* Permutation of a string

// function getPermutations(str) {
//     // Base case: if the string has only one character, return it as the only permutation
//     if (str.length === 1) {        
//         return [str];
//     }
//     let permutations = []; 

//     for (let i = 0; i < str.length; i++) {
//         const currentChar = str[i];
//         let remainingStr = '';

//         for (let j = 0; j < str.length; j++) {
//             if (i !== j) {
//                 remainingStr += str[j];
//             }
//         }

//         const remainingPermutations = getPermutations(remainingStr);

//         for (let k = 0; k < remainingPermutations.length; k++) {
//             permutations.push(currentChar + remainingPermutations[k]);
//         }
//     }

//     return permutations;
// }

// const str = "abc";
// const result = getPermutations(str);
// console.log(result);


//* Sum of odd numbers in the array

// function sumOfOdd(arr,index=0){
//     if(index===arr.length){
//         return 0;
//     }

//     let sum = 0;
//     if(arr[index]%2!==0){
//         sum = arr[index];
//     }

//     return sum+sumOfOdd(arr,index+1)

// }

// let arr = [1,2,3,4,5];
// console.log('sum of odds:',sumOfOdd(arr));


//* Sum of even numbers in the array

// function sumOfEven(arr,index=0){
//     if(index===arr.length){
//         return 0;
//     }

//     let sum = 0;
//     if(arr[index]%2==0){
//         sum = arr[index];
//     }

//     return sum+sumOfEven(arr,index+1)

// }

// let arr = [1,2,3,4,5];
// console.log('sum of odds:',sumOfEven(arr));


//* Prime or Not

// function isPrime(num,index=2){
//     let n = Math.floor(num/2);

//     if(index <= n && num%index==0){
//         return false
//     }

//     if(index > n){
//         return true;
//     }

//     return isPrime(num,index+1);
// }

// console.log('isPrime:',isPrime(10));


//* Remove Duplicates  (page no:1)

// function removeDuplicates(arr,index=0){
//     if(index===arr.length){
//         return arr;
//     }

//     for(let i=index+1;i<arr.length;i++){
//         if(arr[index]===arr[i]){
//             for(let j=i;j<arr.length;j++){
//                 arr[j]=arr[j+1];
//             }
//             arr.length--;
//             i--;
//         }
//     }
//     return removeDuplicates(arr,index+1);
    
// }

// let arr = [1,2,3,1,3,4,5];
// console.log('new array:',removeDuplicates(arr));


//* Remove char from a position

// function removeChar(str,char,result='',index=0){
//     if(index===str.length){
//         return result;
//     }

//     if(str[index]!==char){
//         result += str[index]        
//     }

//     return removeChar(str,char,result,index+1);
// }

// let str = 'hello world'
// console.log(removeChar(str,'o'));


//* To UpperCase

// function toUppercase(str, index = 0) {
//     // Base case: if the entire string has been processed
//     if (index === str.length) return "";

//     // Get the ASCII code of the current character
//     let charCode = str.charCodeAt(index);

//     // Convert lowercase letters (a-z) to uppercase
//     if (charCode >= 97 && charCode <= 122) {
//         charCode -= 32;
//     }

//     // Convert the ASCII code back to a character and proceed recursively
//     return String.fromCharCode(charCode) + toUppercase(str, index + 1);
// }

// console.log(toUppercase("Hello World!")); // Output: "HELLO WORLD!"


//* Find Uniques
// function Uniques(arr,index=0,result=[]){
//     if(index==arr.length){
//         return result;
//     }

//     let dupli=false;
//     for(let i=0;i<result.length;i++){
//         if(arr[index]==result[i]){
//             dupli=true;
//             break;
//         }
//     }

//     if(!dupli){
//         result.push(arr[index])
//     }
//     return Uniques(arr,index+1,result)
// }


//* Find Duplicates
//////////////////////////////////////////////////////////////////////////string
//^^ Without Using any Built-In methods

//* Reverse "Hello Shifna" (each spelling)

// function reverse(str) {
//     let rev = '';
//     for(let i = str.length-1;i>=0;i--){
//         rev += str[i];
//     }
//     return rev;
// }

// console.log(reverse('Hello shifna'));


//* Reverse "Hello Shifna" (each word);

// function reverse(str) {
//     let rev = '' ;
//     let word = '' ;

//     for(let i = str.length-1;i>=0;i--){
//         if(str[i]===" "){
//             rev = rev +" "+ word;  //same (nothing but, only this lines)
//             word = "";
//         }else{
//             word = str[i] + word;  // main logic
//         }
//     }
//     //for adding the last word
//     rev = rev + " " + word; //same
//     return rev;
// }

// console.log(reverse('Hello shifna'));



//* Reversing each word from its position

// function reverse(str) {
//     let word = '' ;
//     let rev='' ;
//     for (let i = 0; i < str.length; i++) {

//         if(str[i]===" "){
//             rev  = rev+" "+word;
//             word =''
//         }else{
//             word = str[i] + word;  // main logic
//         }
        
//     }
//     return rev+" "+word;
// }

// console.log("Original:",'Hello Shifna');
// console.log("Reversed:",reverse('Hello Shifna'));


//* Palindrome

// function isPalindrome(str){

//     for(let i=0;i<str.length/2;i++){

//         if (str[i]!==str[(str.length-1)-i]) {
//             return false;
//         }

//     }
//     return true;
// }

// console.log("isPalindrome?:",isPalindrome("asdfghjkllkjhgfdsa"));


//* Anagrams checking

// function isAnagrams(string1,string2) {

//     if (string1.length !== string2.length) {
//         return false;
//     }

//     for(let i=0;i<string1.length;i++){
//         let flag = 0;
//         for(let j=0;j<string1.length;j++){
//              if(string1[i]===string2[j]){
//                 flag = 1;
//              }
//         }
//         if(flag==0){
//             return false;
//         }
//     }
//     return true;

// }

// console.log('isAnagram?:',isAnagrams('listen','silent'));
// console.log('isAnagram?:', isAnagrams('rail safety', 'fairy tales'));


//* Count Vowels

// function vowels(string){
//     let count = 0;
//     let vowels = ['a','e','i','o','u','A','E','I','O','U'];
//     for(let i=0;i<string.length;i++){
//         for(let j=0;j<vowels.length;j++){
//             if(string[i]==vowels[j]){
//                 count++;
//             }
//         }
//     }
//     return count;
// }

// console.log('vowels count:',vowels('shifnaA'));


//* Duplicates Count

// function duplicates(string){
//     let count = 0;
//     for(let i =0;i<string.length;i++){
//         let isDuplicate = false;

//         // check is the string[i] already checked (flag nn pakaram)

//         for(let k=0;k<i;k++){
//             if(string[i]==string[k]){
//                 isDuplicate = true;
//                 break;
//             }
//         }

//         //checking and count if it has duplicates

//         if(!isDuplicate){
//             for(let j=i+1;j<string.length;j++){
//                 if(string[i]==string[j]){
//                     count++;
//                     // break; (ethra elements nn aahn atleast one dupli engilum ullath ennanengil ith add cheyyam, but totallly ethra dupli und enn count cheyyan ith venda)
//                 }
//             }
//         }

//     }
//     return count;

// }

// console.log('count of duplicates:',duplicates('clccccllll'));


//* Longest word in a string

// function longest(str){
//    let currentWord ='';
//    let longest = '';
//    let currentLength = 0;
//    let maxLength = 0;

//     for(let i=0;i<=str.length;i++){

//         if(str[i]==" " || i==str.length){

//             if(currentLength > maxLength){
//                 maxLength = currentLength;
//                 longest = currentWord;
//             }
//             currentWord = '';
//             currentLength = 0; 

//         }else{

//             currentWord += str[i];
//             currentLength++;

//         }

//     }
//     return longest;

// }

// console.log('longest word:',longest("hello helloo woooorld"));


//* To Pascal Case

// function toPascal(str){
//     let word = '';
//     for(let i=0;i<str.length;i++){
//         if(i==0){
//             word += str[i].toUpperCase();
//         }else if(str[i]==' '){
//             i++;
//             word += str[i].toUpperCase();
//         }else{
//             word += str[i];
//         }
//     }
//     return word;
// }

// console.log('in PascalCase:',toPascal('hello world india'));



//* To Snake Case

// function toSnake(str){
//     let word = '';
//     for(let i=0;i<str.length;i++){
//          if(str[i]===" "){
//             word += "_";
//          }else{
//             word += str[i];
//          }
//     }
//     return word;
// }

// console.log("in snakeCase",toSnake("hello world"));


//* To Title Case

// function toTitle(str){
//     let word = '';
//     for(let i=0;i<str.length;i++){
//         if(i===0){
//             word += str[i].toUpperCase();
//         }else if(str[i]===" "){
//             i++;
//             word += " "+str[i].toUpperCase();
//         }else{
//             word += str[i];
//         }
//     }
//     return word;
// }

// console.log('in titleCase:',toTitle('hello world india'));
