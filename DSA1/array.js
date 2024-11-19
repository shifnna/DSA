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