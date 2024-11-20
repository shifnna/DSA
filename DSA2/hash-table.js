//^^^^ Here collision occures

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


//^^^ No collision occure

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
//                 bucket.splice(bucket.indexOf(sameKey),1)
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
// console.log(table.get('mane'));