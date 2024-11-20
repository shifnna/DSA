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