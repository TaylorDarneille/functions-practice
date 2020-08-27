//1. Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
 function calculateCube(number){
   console.log(Math.pow(number,3))
 }
 calculateCube(5) //125

//2. Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
function isAVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u' ]
  if (vowels.includes(char.toLowerCase())) {
    return true
  } else {
    return false
  }
}
console.log(isAVowel('a')); //true
console.log(isAVowel('b')); //false
console.log(isAVowel('E')); // true


// 3. Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
const getTwoLengths = (a, b) => {
  const lengths = []
  lengths.push(a.length)
  lengths.push(b.length)
  return lengths
}

console.log(getTwoLengths('pepperoni', 'pizza')) //[9,5]

//  4. Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
const getMultipleLengths = (array) => {
  const lengths = [];
  for (let i = 0; i < array.length; i++) {
    lengths.push(array[i].length)
  }
  return lengths;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"])); // [5,4,2,2,4]

// ============================
//      Part 2
// ============================



// 1. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
const maxOfThree = (num, num1, num2) => {
  let max = num
  if (max < num1) {
    max = num1
  }
  if (max < num2) {
    max = num2
  }
  return max
}

console.log(maxOfThree(1, 5, 10)) //10
console.log(maxOfThree(7, 5, 3)) //7
console.log(maxOfThree(4, 4, 4))  //4
console.log(maxOfThree(2, 99, 25)) //99


// 2.Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
const printLongestWord = (arr) => {
  let longest = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"])); //"Peanutbutter"



// Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
const transmogrify = (a, b, c) => {
  return Math.pow(a * b, c)
}
console.log(transmogrify(5, 3, 2)); //225


// 4. Project Euler problem 2
const fib = (num) => {
  let a =1,b=2;
  const fibArray = []
  if (num<1){
    console.log("Input must be positive");
  }
  while(a<num){
    if(a%2==0){
      //keep all the even fib sequence in an array
      fibArray.push(a)
    }
    let temp = a+b;
    a=b;
    b=temp;
  }
  let sum = 0;
 fibArray.forEach(item=>{
   //add item to the sum only if the item is less than 4million
   if(item<4000000){
     sum += item;
   }
 });
 return sum;
}

fib(1)
fib(90000000)
fib(90)

// 5. A needle in the haystack
const findNeedle = (array) =>{
  return `Found the needle at position ${array.indexOf('needle')}`
}
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])



//6. Sum Positive: Given an array, return the sum of only the positive numbers

//with for loop
const sumPositive = (arr) =>{
  let sum = 0;
  for (item of arr){
    if(item>0){
      sum += item;
    }
  }
  return sum;
}

sumPositive([1, -4, 7, 12]); //20

//with reduce
function sumPos(arr){
  return arr.reduce((acc,val)=>{
    return val>0 ? val+acc : acc
  })
}
sumPos([1, -4, 7, 12]); //20
