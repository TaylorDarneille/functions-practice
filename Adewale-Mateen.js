// Calculate the Cube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

const calculateCube = (num) => {
    console.log(Math.pow(num, 3));
  }
  
  calculateCube(5);
  
  // Is a Vowel?
  // Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
  
  const isAVowel = (char) => {
    if (char == "a" || char == "e" || char == "i" || char == "i" || char == "o" || char == "u") {
      console.log(true);
    }else{
      console.log(false);
    }
  }
  
  isAVowel("a");
  
  // Get Two Lengths
  // Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
  
  const getTwoLengths = (string1, string2) => {
    let stringArr = [string1.length, string2.length];
    return(stringArr);
  }
  
  getTwoLengths("Adewale", "Dada");
  
  // Get Multiple Lengths
  // Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
  
  const getMultipleLengths = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i].length);
    }
    console.log(newArr);
  }
  
  getMultipleLengths(["Samantha", "Yamileth", "Cordova"]);
  
  // ----------------Problem Solving w/ functions part 2------------------
  
  // Maximum of Three Numbers
  // Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
  
  const maxOfThree = (num1, num2, num3) => {
    return Math.max(num1, num2, num3);
  }
  
  maxOfThree(3, 2, 3);
  
  // Print Longest Word
  // Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
  
  const printLongestWord = (arr) => {
    let longestWord = arr.sort(function(a, b) {
      return b.length - a.length;})
      return longestWord[0]
    }
  
  printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]);
  
  // Transmogrify the Numbers
  // Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
  
  const transmogrify = (num4, num5, num6) => {
    return Math.pow((num4*num5), num6)
  }
  console.log(transmogrify(5, 3, 2));
  
  // Project Euler Problem 2
  
  // Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.
  let fibArr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
  
  const fib = (num) => {
    let newFibArr = [];
    for (let i = 0; i < fibArr.length; i++) {
      // console.log(fibArr[i]);
      if (fibArr[i]%2 === 0) { // Adjust the function to push the even numbered values into an array.
        newFibArr.push(fibArr[i]);
      }
      if (fibArr[i] === num) {// Adjust the function to return the summed value of the array.
        return newFibArr.reduce(function (a, b) {
          return a + b;
        })
      }
    }
  }
  
  fib(21);
  
  
  // Find the sum of the even numbered values that do not exceed four million.
  //Can we go over this in your office hours next Monday? I really want to get this one!!
  
  
  // A Needle in the Haystack
  
  const findNeedle = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "needle") {
        console.log("found the needle at position " + i)
      }
    }
  }
  
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']);
  // ended up signing up for code wars after I solved this one!!
  
  
  // Sum the Positive
  // Given an array, return the sum of only the positive numbers
  
  let sumArr = [1, -4, 7, 12];
  
  const posArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (sumArr[i] < 0) {
        sumArr.splice(i, 1);
        return sumArr.reduce(function (a,b){
          return a + b;
        })
      }
    }
  } 
  
  posArr(sumArr);
  
  
  
  
  
  
  
  
  
  
  
  
  