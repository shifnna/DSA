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

