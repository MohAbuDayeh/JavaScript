// 1- Write a program that prints numbers from 1 to 10 using a for loop.

// console.log("Numbers from 1 to 10:");
//         for (let i = 1; i <= 10; i++) {
//             console.log(i);
//         }


// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.

// console.log("Even numbers from 1 to 10:");
//         for (let i = 1; i <= 10; i++) {
//             if (i % 2 === 0) {
//                 console.log(i);
//             }
//         }


// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.

// console.log("Odd numbers from 1 to 10:");
//         let j = 1;
//         while (j <= 10) {
//             if (j % 2 !== 0) {
//                 console.log(j);
//             }
//             j++;
//         }


// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.

// const number = prompt("Enter a number to display its multiplication table:");
//         console.log(`Multiplication table of ${number}:`);
//         for (let i = 1; i <= 10; i++) {
//             console.log(`${number} x ${i} = ${number * i}`);
//         }


// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.

// console.log("Sum of numbers from 1 to 100:");
// let sum = 0;
// let k = 1;
// while (k <= 100) {
//     sum += k;
//     k++;
// }
// console.log(sum);


// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.

// const factNum = prompt("Enter a number to calculate its factorial:");
// let factorial = 1;
// for (let i = 1; i <= factNum; i++) {
//     factorial *= i;
// }

// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.

// const fibLimit = prompt("Enter a number to display Fibonacci series up to:");
// console.log(`Fibonacci series up to ${fibLimit}:`);
// let a = 0, b = 1;
// let nextFib = a + b;
// console.log(a);
// console.log(b);
// while (nextFib <= fibLimit) {
//     console.log(nextFib);
//     a = b;
//     b = nextFib;
//     nextFib = a + b;
// }


// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.

// console.log("Reverse of numbers 5, 10, 15, 20:");
//         let numbers = [5, 10, 15, 20];
//         let index = numbers.length - 1;
//         while (index >= 0) {
//             console.log(numbers[index]);
//             index--;
//         }