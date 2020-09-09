// Question 1
//Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

const calculateCube = (num) => {
  var result = num * num * num; {
    return result
  } 
 }
 console.log(calculateCube(5));

// I tried it two ways
const calculateCube = (num) => {
  
  console.log(Math.pow(num, 3))
}
calculateCube(5)



// Question 2
//  write a function with an parameter for a string
function isAVowel(str) {
    // write a agrument for the length of the string and determine its a vowel
    let count = 0
    const vowels = "abpurtRWKO"
    for(var i = 0; i < str.length; i++){
    console.log(vowels.indexOf(str[i].toLowerCase()) > -1)
    }
    
  } 
  
  isAVowel("a")


  // Question 3
function getTwoLengths(str) {
const name = "Hank";
const lastname = "Hippopopalous";
console.log([name.length, lastname.length])
}
getTwoLengths()

// Question 4
 /*4 Get Multiple Lengths
   Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
   
   console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
   => [5, 4, 2, 2, 4] */
   
const getMultipleLengths = (arr) => {


var num = []
var numlet = "";

let i = 0;
while( i < arr.length) {
  numlet = arr[i].split("")
  num.push(numlet.length)
  i++
  }
  return num
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// Part 2
const maxOfThree = (num1, num2, num3) => {
    return Math.max(num1, num2, num3)
  }
  
  maxOfThree(6, 9, 1)
  console.log(maxOfThree(6, 9, 1))


//Question 2
 /* Print Longest Word
   Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
   
   console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
   => "Peanutbutter" */


  printLongestWord = (arr) {
    //loop to sort through the array
   arr.sort(a,b) => b.length - a.length)
  return arr[0]
  }
  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

 // Question 3  Transmogrify the Numbers

 function transmogrify(num1,num2,num3) {
    // Calculate num1 and num2 using the Math.pow() multiple the result by num3
    return Math.pow(num1 * num2, num3);
    
  }
  transmogrify(5, 3, 2);

  //Question 4
  // One i first tried on my own
  let fib2 = function fib2(result, len) {
    //Checking length of the function so it can have a end
    if (result.length >= len) {
      return result
    }
    //code to keep the sequence going
    result.push(result[result.length - 2] + result[result.length - 1]);
    return fib2(result, len);
  }
  
  fib2 ([1,2], 10)
// The version we did in class. I tried to do it on my own
  const fib = (limit) =>{
    let arr = [ 0 ];
    let evenArr = [];
  // get the fib seq
    for(let i = 0; i < 100; i++){
        if(arr[arr.length - 1] <= limit){
          if(i > 1){
            arr.push(arr[i - 1] + arr[i - 2]);
          } else{
            arr.push(i)
          }
        }
    }
  // get the even
    for(index of arr){
      if(index % 2 === 0){
        evenArr.push(index)
      }
    }
  // get the sum of all
    let sum = arr.reduce((acc, current) => {
      return acc + current;
    });
  // gettig the sum of the evens
    // let sumEven = evenArr.forEach((acc, current) => {
    //   return acc + current
    // })
  return sumEven;
  }
  // console.log(fib(40))
  // reduce without method
  const reduceNum = (arr) => {
    let total = 0;
    for(let i = 0; i < arr.length; i++ ){
        total += arr[i]
    }
    return total 
  }
  let myArr = [0, 1, 4, 6]
  console.log(reduceNum(myArr))



  /* 5
   A Needle in the Haystack
   From Codewars
   
   Can you find the needle in the haystack?
   
   Write a function findNeedle() that takes an array full of junk but contains one "needle"
   
   After your function finds the needle it should return a message (as a string) that says:
   
   "found the needle at postition" plus the index it found the needle so:
   
   findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
   
   Should return:
   
   "found the needle at position 5" */

  const findNeedle = (arr) => {
    if(arr.indexOf("needle") !== -1 ){
       return "found the needle at position " + arr.indexOf("needle")
    }
  }

  console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))

     /* 6 Sum the Positive
   From Codewars
   
   Given an array, return the sum of only the positive numbers
   
   [1, -4, 7, 12] => 1 + 7 + 12 = 20 */
   
   const sumPositive = (arr) => {
    let total = 0
    for (i=0; i < arr.length; i++){
      if (arr[i] > 0) total += arr[i]
    }
    return total
  }
  
  console.log(sumPositive([1, -4, 7, 12]))