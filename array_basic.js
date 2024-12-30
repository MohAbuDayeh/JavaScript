// // 1- Find the largest element in an array.
// function findLargestElement(arr) {
//     let largest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }

// // 2- Find the smallest element in an array.
// function findSmallestElement(arr) {
//     let smallest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < smallest) {
//             smallest = arr[i];
//         }
//     }
//     return smallest;
// }

// // 3- Find the sum of all elements in an array.
// function findSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// // 4- Find the average of all elements in an array.
// function findAverage(arr) {
//     const sum = findSum(arr);
//     return arr.length ? sum / arr.length : 0;
// }

// // 5- Find the median of all elements in an array.
// function findMedian(arr) {
//     if (!arr.length) return 0;
//     let sorted = [...arr];
//     for (let i = 0; i < sorted.length - 1; i++) {
//         for (let j = 0; j < sorted.length - i - 1; j++) {
//             if (sorted[j] > sorted[j + 1]) {
//                 let temp = sorted[j];
//                 sorted[j] = sorted[j + 1];
//                 sorted[j + 1] = temp;
//             }
//         }
//     }
//     const mid = Math.floor(sorted.length / 2);
//     return sorted.length % 2 === 0
//         ? (sorted[mid - 1] + sorted[mid]) / 2
//         : sorted[mid];
// }

// // 6- Remove all duplicates from an array.
// function removeDuplicates(arr) {
//     let unique = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!unique.includes(arr[i])) {
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }

// // 7- Sort an array in ascending order.
// function sortAscending(arr) {
//     let sorted = [...arr];
//     for (let i = 0; i < sorted.length - 1; i++) {
//         for (let j = 0; j < sorted.length - i - 1; j++) {
//             if (sorted[j] > sorted[j + 1]) {
//                 let temp = sorted[j];
//                 sorted[j] = sorted[j + 1];
//                 sorted[j + 1] = temp;
//             }
//         }
//     }
//     return sorted;
// }

// // 8- Sort an array in descending order.
// function sortDescending(arr) {
//     let sorted = [...arr];
//     for (let i = 0; i < sorted.length - 1; i++) {
//         for (let j = 0; j < sorted.length - i - 1; j++) {
//             if (sorted[j] < sorted[j + 1]) {
//                 let temp = sorted[j];
//                 sorted[j] = sorted[j + 1];
//                 sorted[j + 1] = temp;
//             }
//         }
//     }
//     return sorted;
// }

// // 9- Shuffle the elements of an array randomly.
// function shuffleArray(arr) {
//     let shuffled = [...arr];
//     for (let i = shuffled.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         let temp = shuffled[i];
//         shuffled[i] = shuffled[j];
//         shuffled[j] = temp;
//     }
//     return shuffled;
// }

// // Example usage:
// const array = [5, 3, 8, 1, 2, 8, 5, 3];

// console.log("Largest Element:", findLargestElement(array));
// console.log("Smallest Element:", findSmallestElement(array));
// console.log("Sum of Elements:", findSum(array));
// console.log("Average of Elements:", findAverage(array));
// console.log("Median of Elements:", findMedian(array));
// console.log("Array without Duplicates:", removeDuplicates(array));
// console.log("Array Sorted in Ascending Order:", sortAscending(array));
// console.log("Array Sorted in Descending Order:", sortDescending(array));
// console.log("Array Shuffled:", shuffleArray(array));