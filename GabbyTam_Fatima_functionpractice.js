
/* worked on part 1: 1-3 with breakout partner Daniel L */


// source for string reversal loop
https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
        //console.log(newString);
    }
    if(newString== str){
      return true;
    } else {
      return false;
    }
}

// console.log(reverseString('mom'));
reverseString('racecar');

//Part 1: 1 Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

function calculateCube(num) {
  //console.log(num*num*num);
  return Math.pow(num, 3);
  //using built in exponent method 
  //console.log(Math.pow(num,3));
}
console.log(calculateCube(2));


// Part 1: 2 Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
// a, e, i, o, u
function isAVowel(a) {
  if (a === 'a' || a=== 'e' || a=== 'i'|| a=== 'o' || a=== 'u'){
    return true;
  } else {
    return false;
  }
}

//this works but its not efficient 
console.log(isAVowel('e'));

//Part 1: 3 Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

function getTwoLengths(first, second) {
  let arrayNum= [];
  arrayNum.push(first.length);
  arrayNum.push(second.length);
  return arrayNum;
}
//but why is in not .length-1?? 
//answer: -1 and +1 comes into play when you are using for loops, declaring your variable at 0 or at 1 will make a difference as to what add on youll need to .length property 
// .length counts string and arrays starting at index 0
 
console.log(getTwoLengths("Hank", "Hippopopalous"));


//Part 1: 4 Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

const getMultipleLengths = (array) => {
  let arrayOfNum= [];
  for(let i=0; i<= array.length-1; i++){
    arrayOfNum.push(array[i].length); 
  }
  return arrayOfNum;
  //console.log(arrayOfNum);
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//Part 2: 1 Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.


/*
first attempt: 

 const maxOfThree = (num1, num2, num3) => {
  if(num1> num2 && num1> num3){
    return num1;
  }
  if(num2> num1 && num2> num3){
    return num2;
  }
  if(num3> num1 && num3 > num2){
    return num3;
  }
  if(num1== num2== num3){
    return num1;
  }
}

console.log(maxOfThree(6, 9, 1));

*/

//attempt after googling 
const maxOfThree = (num1, num2, num3) => {
  let max= Math.max(num1,num2,num3);
  return max;
}

console.log(maxOfThree(6, 9, 1));

//Part 2: 2 Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

/* This doesnt work because of the use of return, return stops/breaks the code


function printLongestWord(arr){
  for(let i=0; i<arr.length-1;i++){
    if(arr[i].length> arr[i+1].length){
      return arr[i];
    } else {
      return arr[i+1];
    }
  }
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
*/

//this works but only for this set of strings, if the longest word comes before peanutbutter it is overwritten by peanutbutter in later computation 

function printLongestWord(arr){
  let longest= '';
  for(let i=0; i<arr.length-1; i++){
    if(arr[i].length> arr[i+1].length){

      longest= arr[i];
    } //else {
    //continue;
   // }
  } 
  return longest;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

//Part 2: 3 Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

//The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

//For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

const transmogrify = (num1, num2, num3) => {
  let part1= num1*num2;
  let part2= Math.pow(part1, num3);
  return part2;
}

console.log(transmogrify(5, 3, 2));

//Part 2: 4 Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.

//Adjust the function to push the even numbered values into an array.

//Adjust the function to return the summed value of the array.



const fibonacci= (number) => {
  let start= 1;
  let newNum= 0;
  let fillArr= [];
  let sum= 0;
  for(let i=1; i<=number; i++){
    //this code will only write the fibonacci numbers up until the number passed in as the argument 
    //it has to be newNum PLUS start because newNum alone would go one computation too far, because the block of code runs after the if statement is checked 
    if(newNum+start<=number){
      newNum= newNum + start;
      //need to update start or else it will stay at value of 1
      //start has to be newnum-start because in the step above, start was added to newNum
      start= newNum - start;
      console.log(newNum);
      if(newNum%2===0){
      fillArr.push(newNum);
      }
    }
  }
  console.log(fillArr);
  for (let j=0; j<=fillArr.length-1; j++){
    //sum is initialized at 0, this loop and code will iterate through all elements in the fillArr and add the element to the sum
    sum= sum+fillArr[j];
  }
  //console.log(sum) works, prints sum to the console 
  if(sum<=4000000){
  console.log(sum);
  } else {
    console.log('Sum exceeds 4 million');
    console.log(sum);
  }
  //return does not work, not sure why :(
  return sum;
}

fibonacci(5670);


//Find the sum of the even numbered values that do not exceed four million.



//Part 2: 5 Write a function findNeedle() that takes an array full of junk but contains one "needle"

//After your function finds the needle it should return a message (as a string) that says: "found the needle at postition" plus the index it found the needle so:


function findNeedle(junkArray) {
  for(let i=0; i<=junkArray.length-1; i++){
    if(junkArray[i]=== 'needle'){
      console.log('found the needle at position', junkArray.indexOf('needle'));
    }
  }
}

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])


//Part 2: 6 Given an array, return the sum of only the positive numbers

const posSum= (numArr) => {
  let totalSum= 0;
  for(let i= 0; i<=numArr.length-1; i++){
    if(numArr[i]> 0){
      totalSum+= numArr[i];
    }
  }
  return totalSum;
}

posSum([1, -4, 7, 12]);


//*****keyword continue inside a loop
