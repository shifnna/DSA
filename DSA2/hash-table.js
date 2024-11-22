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

// class hashTable{
//     constructor(size){
//         this.table = new Array(size);
//         this.size=size;
//     }

//     hash(key){
//         let total = 0;
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }

//     set(key,value){
//         let index = this.hash(key);
//         let bucket = this.table[index];

//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             let sameKey = bucket.find(item=>item[0]===key)
//             if(sameKey){
//                 sameKey[1] = value
//             }else{
//                 bucket.push([[key,value]]);
//             }
//         }
//     }

//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(this.table[i]);               
//             }
//         }
//     }
// }


// function sumOfDigits(num){
//     let sum=0;
//     while (num>0) {
//         let digit = num%10;
//         sum += digit;
//         num = Math.floor(num/10);
//     }
//     return sum;
// }


//  const table = new hashTable(30);
//  const num = 12345

//  table.set(num.toString(),sumOfDigits(num))

//  table.display();


// //^^^ Collision handling using open address (linear probing)


// class HashTable {
//     constructor(size) {
//       this.table = new Array(size);
//       this.size = size;
//     }
  
//     hash(key) {
//       let total = 0;
//       for (let i = 0; i < key.length; i++) {
//         total += key.charCodeAt(i);
//       }
//       return total % this.size;
//     }
  
//     set(key, value) {
//       let index = this.hash(key);
//       while (this.table[index]) {
//         if (this.table[index].key === key) {
//           this.table[index].value = value;
//           return;
//         }
//         index = (index + 1) % this.size;
//       }
//       this.table[index] = { key, value };
//     }
  
//     get(key) {
//       let index = this.hash(key);
//       while (this.table[index]) {    
//         if (this.table[index].key === key) {
//           return this.table[index].value;
//         }
//         index = (index + 1) % this.size;      // set ilum ee index il vekkan kazhiyathath kond next index il okke ayirikkum vechittundaakuka.
//       }
//       return 'Key not found';         
//     }
  
//     remove(key) {
//       let index = this.hash(key);
//       while (this.table[index]) {
//         if (this.table[index].key === key) {
//           this.table[index] = undefined;
//           return;
//         }
//         index = (index + 1) % this.size;
//       }
//       return 'Key not found';
//     }
  
//     display() {
//       console.log(this.table);
//     }
//   }
  
//   let hashTable = new HashTable(5);
  
//   hashTable.set('name', 'John');
//   hashTable.set('city', 'New York');
//   hashTable.set('ram', 'India');
    
//   hashTable.remove('age');
//   console.log(hashTable.get('ram'));
  
//   hashTable.display();
 

// //^^^ Collision handling using open address (quadratic probing)

// class HashTable {
//     constructor(size) {
//       this.table = new Array(size);
//       this.size = size;
//     }
  
//     hash(key) {
//       let total = 0;
//       for (let i = 0; i < key.length; i++) {
//         total += key.charCodeAt(i);
//       }
//       return total % this.size;
//     }
  
//     set(key, value) {
//       let index = this.hash(key);
//       let i = 0;
      
//       while (this.table[index] !== undefined && this.table[index].key !== key) {
//         i++;
//         index = (index + i * i) % this.size; // Quadratic probing
//       }
      
//       this.table[index] = { key, value };
//     }
  
//     get(key) {
//       let index = this.hash(key);
//       let i = 0;
      
//       while (this.table[index] !== undefined) {
//         if (this.table[index].key === key) {
//           return this.table[index].value;
//         }
//         i++;
//         index = (index + i * i) % this.size; // Quadratic probing
//       }
//       return 'Key not found';
//     }
  
//     remove(key) {
//       let index = this.hash(key);
//       let i = 0;
      
//       while (this.table[index] !== undefined) {
//         if (this.table[index].key === key) {
//           this.table[index] = undefined;
//           return;
//         }
//         i++;
//         index = (index + i * i) % this.size; // Quadratic probing
//       }
//       return 'Key not found';
//     }
  
//     display() {
//       console.log(this.table);
//     }
//   }
  
//   let hashTable = new HashTable(5);
  
//   hashTable.set('name', 'John');
//   hashTable.set('city', 'New York');
//   hashTable.set('ram', 'India');
    
//   hashTable.remove('age');
//   console.log(hashTable.get('age'));
  
//   hashTable.display();



// //^^^  Check if Two Arrays Are Equal

// function areArraysEqual(arr1,arr2) {
//     let hashTable = {};
//     if(arr1.length!==arr2.length) return false;
//     //add frequencies
//     for(let i=0;i<arr1.length;i++){
//         let key=arr1[i];
//         hashTable[key] ? hashTable[key]++ : hashTable[key]=1;            
//     }
//     //reducing frequencies in hashtable if that value exists in arr2
//     for(let i=0;i<arr2.length;i++){
//         let key = arr2[i];
//         if(!hashTable[key] && hashTable[key]!==0){
//             return false;
//         }else{
//             hashTable[key]--;
//         }
//     }
//     //check if any of them value not zero
//     for(let key in hashTable){
//         if(hashTable[key]!==0) return false;
//     }

//     return true;
// }

// let array3 = [1, 2, 2, 4];
// let array4 = [4, 2, 2, 1];
// console.log(areArraysEqual(array3, array4));


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


// //^^^ Return unique values

// function uniqueValues(arr) {
//     let hashTable = {};
//     let unique = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (hashTable[arr[i]]) {
//             hashTable[arr[i]]++;
//         } else {
//             hashTable[arr[i]] = 1;
//         }
//     }

//     for (let key in hashTable) {
//         if (hashTable[key] === 1) {
//             unique.push(Number(key)); // Convert key back to a number
//         }
//     }

//     return unique;
// }

// let arr = [1, 2, 3, 4, 5, 1, 3, 5];
// console.log(uniqueValues(arr)); 
// // Returns [2, 4]
