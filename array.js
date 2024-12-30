console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

// let array1 = [ 1, 7, 9, 45];
// let array2 = ["str", "alex", "moh"];
// let array3 = ["the", "fox", "over", "lazy", "dog"];

/* 
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

// var fruits = ["Tomato", "Banana", "Watermelon"];
// console.log("Index of Banana:", fruits.indexOf("Banana"));
// console.log("Index of Tomato:", fruits.indexOf("Tomato"));

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

// let favoriteFood = ["Mulukhiyah", "Burger", "Pizza", "calzone", "Mansaf"];
// let favoriteSports = ["Football", "Running", "Swimming"];
// let favoriteMovies = ["Inception", "Interstellar", "Matrix", "Avatar"];


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

// function firstOfArray(arr) {
//     return arr[0];
//   }
//   console.log(firstOfArray([1, 4, 5]));
//   console.log(firstOfArray(["t", "u", "g", "x"]));
  

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

// function lastOfArray(arr) {
//     return arr[arr.length - 1];
//   }
//   console.log(lastOfArray([1, 4, 5]));
//   console.log(lastOfArray(["t", "u", "g", "x"]));

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

// var array = [0,5,7,9];
// array.shift();
// array.shift();
// array.shift();
// array.shift();
// array.unshift(1,3,4);
// array.push(6,8,9,10);
// console.log(array);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

// var array2 = [5, 9, -7, 3.5];
// console.log(array2.push(10)); 
// console.log(array2.unshift(2)); 
// console.log(array2.shift()); 
// console.log(array2.pop());


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

// function middleOfArray(arr) {
//     let length = arr.length;
//     let mid = Math.floor(length / 2);
  
//     if (length % 2 === 0) {
//       return `${arr[mid - 1]} and ${arr[mid]}`;
//     } else {
//       return arr[mid];
//     }
//   }
//   console.log(middleOfArray([1, 4, 5])); 
//   console.log(middleOfArray(["t", "u", "g", "x"])); 
  

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

// var animals = ['cat', 'ele', 'bird'];
//  animals= ['zebra', 'elephant'];
//  console.log(animals);

//  var nums = [1, 2, 3, 8, 9];
//  nums = [5, -22, 3.5, 44, 98, 44];
//  console.log(nums);

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
// var nums= [1,2,3,8,9]
// function indexOfArray(arr, index) {
//     return arr[index];
//   }
//   console.log(indexOfArray(nums, 3));
//   console.log(indexOfArray(nums, 1));
//   console.log(indexOfArray(nums, 4));


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
// var nums= [1,2,3,8,9];
// function arrayExceptLast(arr) {
//     return arr.slice(0, -1);
//   }
// console.log(arrayExceptLast(nums));
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

// var nums= [1,2,3,8,9];
// function addToEnd(arr, value) {
//     arr.push(value);
//     return arr;
//   }
//   console.log(addToEnd(nums, 55));




// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// var nums= [1,2,3,8,9];
// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) sum += arr[i];
//     return sum;
//   }
//   function sumArrayWhile(arr) {
//     let sum = 0, i = 0;
//     while (i < arr.length) sum += arr[i++];
//     return sum;
//   }
//   console.log(sumArray(nums));
//   console.log(sumArrayWhile(nums));




/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// var nums= [1,2,3,8,9];
// function minInArray(arr) {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) 
//         if (arr[i] < min) min = arr[i];
//     return min;
//   }
//   function minInArrayWhile(arr) {
//     let min = arr[0], i = 1;
//     while (i < arr.length) if (arr[i] < min) min = arr[i++];
//     return min;
//   }
//   console.log(minInArray(nums));
//  console.log(minInArrayWhile(nums));




/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// var nums= [1,2,3,8,9];
// function removeFromArray(arr, element) {
//     return arr.filter(el => el !== element);
//   }
//   console.log(removeFromArray(nums, 8));
 




/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// var nums= [1,2,3,8,9];
// function oddArray(arr) {
//     return arr.filter(el => el % 2 !== 0);
//   }
//   console.log(oddArray(nums));




/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// var nums= [1,2,3,8,9];
// function aveArray(arr) {
//     return sumArray(arr) / arr.length;
//   }
//   console.log(aveArray(nums));



/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// function shorterInArray(arr) {
//     return arr.reduce((shortest, current) => current.length < shortest.length ? current : shortest);
//   }
//   console.log(shorterInArray(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]));



/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// var string = "alex mercer madrasa rashed2 emad hala";
// function repeatCharFor(str, char) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         count++;
//       }
//     }
//     return count;
//   }

// function repeatCharWhile(str, char) {
//     let count = 0;
//     let i = 0;
//     while (i < str.length) {
//       if (str[i] === char) {
//         count++;
//       }
//       i++;
//     }
//     return count;
//   }
  
//   console.log(repeatCharFor(string, "a")); 
//   console.log(repeatCharFor(string, "z")); 



/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];

// function evenIndexOddLengthFor(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (i % 2 === 0 && arr[i].length % 2 !== 0) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }
//   console.log(evenIndexOddLengthFor(strings));

// function evenIndexOddLengthWhile(arr) {
//     let result = [];
//     let i = 0;
//     while (i < arr.length) {
//       if (i % 2 === 0 && arr[i].length % 2 !== 0) {
//         result.push(arr[i]);
//       }
//       i++;
//     }
//     return result;
//   }
//   console.log(evenIndexOddLengthWhile(strings)); 



/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// var nums= [44, 5, 4, 3, 2, 10];

// function powerElementIndexFor(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       result.push(Math.pow(arr[i], i)); 
//     }
//     return result;
//   }
//   console.log(powerElementIndexFor(nums));

// function powerElementIndexWhile(arr) {
//     let result = [];
//     let i = 0;
//     while (i < arr.length) {
//       result.push(Math.pow(arr[i], i)); // Raise the element to the power of its index
//       i++;
//     }
//     return result;
//   }
//   console.log(powerElementIndexWhile(nums));



/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// var nums= [5,2,2,1,8,66,55,77,34,9,55,1];

// function evenNumberEvenIndexFor(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i += 2) {
//       if (arr[i] % 2 === 0) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }
//   console.log(evenNumberEvenIndexFor(nums));

//   function evenNumberEvenIndexWhile(arr) {
//     let result = [];
//     let i = 0;
//     while (i < arr.length) {
//       if (i % 2 === 0 && arr[i] % 2 === 0) {
//         result.push(arr[i]);
//       }
//       i += 2; 
//     }
//     return result;
//   }
//   console.log(evenNumberEvenIndexWhile(nums));