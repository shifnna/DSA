
// //sum
// class hashTable {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }

//     set(key, value) {
//         const index = this.hash(key);
//         let bucket = this.table[index];

//         if (!bucket) {
//             this.table[index] = [[key, value]];
//         } else {
//             let sameKey = bucket.find(item => item[0] === key);
//             if (sameKey) {
//                 sameKey[1] = value;
//             } else {
//                 bucket.push([key, value]);
//             }
//         }
//     }

//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(this.table[i]);
//             }
//         }
//     }
// }


// function sumOfDigits(number) {
//     let sum = 0;
//     while (number > 0) {
//         sum += number % 10; 
//         number = Math.floor(number / 10); 
//     }
//     return sum;
// }

// //use
// const table = new hashTable(50);
// const numbers = [123, 456, 789, 101, 99];

// numbers.forEach(num => {
//     const sum = sumOfDigits(num);
//     table.set(num.toString(), sum);
// });

// table.display();


// //sum 
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


// //linear probing
// class hashTable {
//     constructor(size) {
//         this.table=new Array(size);
//         this.size=size
//     }

//     hash(key){
//         let total =0;
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }

//     set(key,value){
//        let index = this.hash(key);
//        while(this.table[index]){
//           if(this.table[index].key === key){
//             this.table[index].value === value;
//             return;
//           }
//           index = (index+1) % this.size;
//        }
//        this.table[index] = {key,value}                
//     }

//     get(key){
//         let index = this.hash(key);

//         while (this.table[index]) {
//             if(this.table[index].key === key){
//                 return this.table[index].value;
//             }
//             index = (index+1)%this.size;
//         }
//         return 'no such data occure'
//     }

//     remove(key){
//         let index = this.hash(key);
//         while (this.table[index]) {
//             if(this.table[index].key===key){
//                this.table[index] === undefined;
//                return;
//             }
//             index = (index+1)%this.size;
//         }
//     }

//     display(){
//         console.log(this.table);      
//     }
// }

// const table = new hashTable(30);
// table.set('name','shifna');
// table.set('mane','ziya');
// table.set('age',7);

// table.display();
// console.log(table.get('age'));



