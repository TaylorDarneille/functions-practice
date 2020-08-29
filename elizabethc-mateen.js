// 1.
//Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
const calculateCube = (num) => {
  console.log(num*num*num)
}
calculateCube(5)
// 2.
//Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
const isAVowel = (char) => {
  const vowelList = ["a", "e", "i", "o", "u"]; 
  for(letter of vowelList){
    if (letter === char) {
      return true;
    }
  }
  return false;
}
isAVowel("a")
// 3.
//Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
const getTwoLengths = (one, two) => {
  return [one.length, two.length]
}
getTwoLengths("Hank", "Hippopopalous")
// 4.
//Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
function getMultipleLengths(...strings){
  return strings.map(string => string.length);
}
getMultipleLengths("hello", "what", "is", "up", "dude")
// Part 2
// 1.
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
const maxOfThree = (one, two, three) => {
  return Math.max(one, two, three)
}
maxOfThree(6, 9 ,1)
// 2.
//Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. 
const printLongestWord = (arr) => {
  let longest = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}
printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"])
// 3.
//Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
//The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
const transmogrify = (num1, num2, num3) => {
  return Math.pow((num1 * num2), num3)
}
transmogrify (5, 3, 2)
// 4.
// Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.
//Adjust the function to push the even numbered values into an array.
//Adjust the function to return the summed value of the array.
//Find the sum of the even numbered values that do not exceed four million.

let sum = 0
const fibonacci = (num) => {
  let num1 = 0
  let num2 = 1
  let num3 = 0
  const even = []
  for(let i = 0; i < num; i++){
    num3 = num1 + num2
    num1 = num2
    num2 = num3
    console.log(num2)
    if(num2 % 2 === 0)
      even.push(num2)
      sum += num2
  }
  console.log(even)
  return sum
}
fibonacci(30)
// 5.
//Write a function findNeedle() that takes an array full of junk but contains one "needle"
//After your function finds the needle it should return a message (as a string) that says:
//"found the needle at postition" plus the index it found the needle so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
const haystack = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']
const findNeedle = () => {
  const n = haystack.indexOf('needle');
  return ("found the needle at position " + n)
}
findNeedle()
// 6.
//Given an array, return the sum of only the positive numbers
const array = [1, -4, 7, 12]
const sumOfPositive = (arr) => {
  const pos = []
  let sum = 0
  for(i = 0; i < array.length; i++){
    if(array[i] > 0){
      pos.push(array[i])
      sum += array[i]
    }
  }
  return sum
}
sumOfPositive(array)