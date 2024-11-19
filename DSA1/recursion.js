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