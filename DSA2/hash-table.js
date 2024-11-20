// //^^^^ Here collision occures

// class hashTable {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash(key){
//         let total = 0;
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }

//     set(key,value){
//         const index = this.hash(key);
//         this.table[index] = value;
//     }

//     get(key){
//        const index = this.hash(key);
//        if(this.table[index]){
//           return this.table[index];
//         }else{
//           return 'no keys found'
//        }
//     }

//     remove(key){
//         const index = this.hash(key);
//         this.table[index] = undefined;
//     }

//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     } 
// }

// const table = new hashTable(50);

// table.set('name','shifna');
// table.set('mane','hanna');
// table.display();


// //^^^ No collision occure

// class hashTable {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash(key){
//         let total = 0;
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }

//     set(key,value){
//         const index = this.hash(key);
//         let bucket = this.table[index];
        
//         if(!bucket){ //no bucket case
//             this.table[index] = [[key,value]]
//         }else{
//             let sameKey = bucket.find(item => item[0]===key);        // sameKey[0] -> key &  sameKey[1] -> value
//             if(sameKey){     //samekeys
//                 sameKey[1] = value;
//             }else{          //deff keys
//                 bucket.push([key,value]);
//             }
//         }
//     }

//     get(key){
//         const index = this.hash(key);
//         let bucket = this.table[index];

//         if(bucket){
//             let sameKey = bucket.find(item => item[0]===key);
//             if(sameKey){
//                 return sameKey[1];
//             }
//         }

//         return 'no keys found'
//     }

//     remove(key){
//         const index = this.hash(key);
//         let bucket = this.table[index];

//         if(bucket){
//             let sameKey = bucket.find(item => item[0]===key);
//             if(sameKey){
//                 bucket.splice(bucket.indexOf(sameKey),1); //or //this.table[index] = this.table[index].filter(item => item[0] !== key);
//             }
//         }
//     }

//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     } 
// }

// const table = new hashTable(50);

// table.set('name','shifna');
// table.set('mane','hanna');
// table.set('age','19');
// // console.log(table.get('mane'));
// // table.remove('mane');
// table.display();


// //^^^ Sum of Digits

// class HashTable {
//     constructor(size) {
//         this.table = new Array(size);
//     }

//     // Hash function to calculate index
//     hash(key) {
//         return key % this.table.length;
//     }

//     // Insert key-value pair (digit-frequency)
//     set(key) {
//         const index = this.hash(key);
//         if (!this.table[index]) {
//             this.table[index] = 0;
//         }
//         this.table[index] += 1; // increment the frequency of the digit
//     }

//     // Get the sum of frequencies (or values)
//     sum() {
//         return this.table.reduce((acc, curr) => acc + (curr || 0), 0);
//     }
// }

// // Example function to sum the digits of a number
// function sumOfDigits(num) {
//     const hashTable = new HashTable(10); // Array of size 10 (for digits 0-9)
//     let sum = 0;
    
//     // Iterate through each digit of the number
//     while (num > 0) {
//         const digit = num % 10;
//         sum += digit;  // Add to sum
//         hashTable.set(digit);  // Store digit in hash table (keeping track of frequency)
//         num = Math.floor(num / 10);  // Remove the last digit
//     }
    
//     console.log("Sum of digits:", sum);  // This is the final sum of digits
//     console.log("Digit Frequencies:", hashTable.table); // This shows the frequency of each digit (optional)
// }

// sumOfDigits(1234);  // Output: Sum of digits: 10, Digit Frequencies: [ 0, 1, 1, 1, 1, 0, 0, 0, 0, 0 ]


// //^^^ Collision handling using open address (linear probing)

// class HashTable {
//     constructor(size) {
//       this.table = new Array(size);
//       this.size = size;
//     }
  
//     // Hash function to calculate index based on key
//     hash(key) {
//       let total = 0;
//       for (let i = 0; i < key.length; i++) {
//         total += key.charCodeAt(i);
//       }
//       return total % this.size;
//     }
  
//     // Insert key-value pair
//     set(key, value) {
//       let index = this.hash(key);
  
//       // Linear probing: if the index is occupied, check the next slot
//       while (this.table[index] !== undefined) {
//         // If the same key exists, update its value
//         if (this.table[index].key === key) {
//           this.table[index].value = value;
//           return;
//         }
  
//         // If the slot is occupied, move to the next index (linear probing)
//         index = (index + 1) % this.size;
//       }
  
//       // If the index is empty, insert the key-value pair
//       this.table[index] = { key, value };
//     }
  
//     // Retrieve value by key
//     get(key) {
//       let index = this.hash(key);
  
//       // Linear probing: look for the key
//       while (this.table[index] !== undefined) {
//         if (this.table[index].key === key) {
//           return this.table[index].value;
//         }
  
//         // Move to the next index
//         index = (index + 1) % this.size;
//       }
  
//       return 'Key not found';  // If key is not found
//     }
  
//     // Remove key-value pair
//     remove(key) {
//       let index = this.hash(key);
  
//       // Linear probing: look for the key
//       while (this.table[index] !== undefined) {
//         if (this.table[index].key === key) {
//           // Set the slot to undefined to remove the entry
//           this.table[index] = undefined;
//           return;
//         }
  
//         // Move to the next index
//         index = (index + 1) % this.size;
//       }
  
//       return 'Key not found';  // If key is not found
//     }
  
//     // Display the hash table
//     display() {
//       console.log(this.table);
//     }
//   }
  
//   // Example Usage:
//   let hashTable = new HashTable(5);
  
//   hashTable.set('name', 'John');
//   hashTable.set('city', 'New York');
  
//   // Adding a key that causes a collision
//   hashTable.set('ram', 'India');  // Will collide with 'name'
    
//   hashTable.remove('age');
//   console.log(hashTable.get('age'));   // Key not found
  
//   hashTable.display(); // Displays the current state of the hash table

  

// //^^^  Check if Two Arrays Are Equal

// function areArraysEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;
    
//     const hashTable = {};

//     // Count frequency of elements in arr1
//     for (let num of arr1) {
//         hashTable[num] = (hashTable[num] || 0) + 1;
//     }

//     // Check if elements of arr2 match
//     for (let num of arr2) {
//         if (!hashTable[num]) return false;
//         hashTable[num]--;
//     }

//     return true;
// }

// let arr1 = [1, 2, 3, 4];
// let arr2 = [4, 3, 2, 1];

// areArraysEqual(arr1, arr2); // Returns true



// //^^^  Count Distinct Elements in an Array

// function countDistinct(arr) {
//     const hashTable = {};

//     for (let num of arr) {
//         hashTable[num] = true; // Store each number as a key (duplicates won't be added)
//     }

//     return Object.keys(hashTable).length; // Return the count of distinct elements
// }

// let arr = [1, 2, 2, 3, 4, 5, 5];

// countDistinct(arr); // Returns 5 (distinct elements: 1, 2, 3, 4, 5)


// //^^^ Find Duplicates in an Array

// function findDuplicates(arr) {
//     const hashTable = {};
//     const duplicates = [];

//     for (let num of arr) {
//         if (hashTable[num]) {
//             duplicates.push(num);
//         } else {
//             hashTable[num] = true;
//         }
//     }

//     return duplicates;
// }

// let arr = [1, 2, 3, 4, 5, 1, 3, 5];

// findDuplicates(arr); // Returns [1, 3, 5]


