//Part 1 - Problem Solving

//Calculate the Cube
//Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

const calculateCube = (num) => {
    return Math.pow(num,3);
  }
  console.log(calculateCube(5))
  
  //Is a Vowel?
  //Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
  
  const isAVowel = (letter) => {
    const vowel = ['a', 'e', 'i', 'o','u'];
    for (let char = 0; char < vowel.length; char++){
      if (vowel[char] === letter.toLowerCase() ){
        return true;
      }
    }
  }
  
  console.log(isAVowel("a"));
  
  //Get Two Lengths
  //Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
  
  const getTwoLengths = (string1, string2) => {
    let stringArr = [];
    stringArr.push(string1.length, string2.length);
    return stringArr
  }
  
  console.log(getTwoLengths("Hank", "Hippopopalous"));
  
  //Get Multiple Lengths
  //Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
  
  const getMultipleLengths = (array) => {
    let stringArr = [];
    array.map(x => {
      stringArr.push(x.length);
  });
    return stringArr;
  };
  
  console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
  
  // Part 2 - Problem Solving
  
  //Maximum of Three Numbers
  //Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
  
  const maxOfThree = (num1, num2, num3) => {
    return Math.max(num1, num2, num3);
  }
  
  console.log(maxOfThree(6, 9, 1));
  
  // Print Longest Word
  //Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
  
  const printLongestWord = (array) => {
    const sorted = array.sort((a,b) => b.length - a.length)
    console.log(sorted[0])
  }
  
  printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]);
  
  //Transmogrify the Numbers
  //Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
  //The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
  //For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
  
  const transmogrify = (num1, num2, num3) => {
    return Math.pow(num1 * num2, num3);
  }
  
  console.log(transmogrify(5, 3, 2));
  
  //Project Euler Problem 2
  //Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.
  //Adjust the function to push the even numbered values into an array.
  //Adjust the function to return the summed value of the array.
  //Find the sum of the even numbered values that do not exceed four million.
  
  const fibona (){
  
  }
  
  // need help with figuring this out
  
  //A Needle in the Haystack
  //Can you find the needle in the haystack?
  // Write a function findNeedle() that takes an array full of junk but contains one "needle"
  // After your function finds the needle it should return a message (as a string) that says:
  // "found the needle at postition" plus the index it found the needle so:
  // findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
  // Should return:
  // "found the needle at position 5"
  
  function findNeedle (haystack){
    return "found the needle at position " + haystack.indexOf("needle")
  }
  
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
  
  //Sum the Positive
  // Given an array, return the sum of only the positive numbers
  
  // [1, -4, 7, 12] => 1 + 7 + 12 = 20
  
  function postiveSum (array){
    for(var i=0, count=0; i <= array.length; i++){
      if (array[i] >= 0){
        count += array[i];
      }
    }
    return count;
  }
  
  var arr = [1, -4, 7, 12]
  postiveSum(arr)
  