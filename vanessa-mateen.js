//PROBLEM SOLVING

/*Write a function calculateCube that takes a 
single number and prints the volume of a cube made from that number.
*/

function calculateCube(size){
    return Math.pow(size,3);
  };
  console.log(calculateCube(5))

/*Write a function isAVowel that takes a character 
(i.e. a string of length 1) and returns true if it is a vowel, 
false otherwise. The vowel could be upper or lower case. */
   function isAVowel(char){
    const vowelList = ["a","e","i","o","u"];
    for(letter of vowelList){
      if (letter === char.toLowerCase()){
        return true;
      }
    }
    return false;
  };
  
  console.log(isAVowel("1"))

/* Write a function getTwoLengths that accepts two parameters 
(strings). The function should return an array of numbers where each 
number is the length of the corresponding string. */

  function getTwoLengths(str1,str2) {
      return [str1.length, str2.length]
  };
  console.log(getTwoLengths("Hank", "Hippopopalous"));
//PROBLEM SOLVING W/ FUNCTIONS PART 2
/*
Define a function maxOfThree that takes three numbers as arguments
and returns the largest of them. If all numbers are the same, 
it doesn't matter which one is returned. If the two largest numbers
 re the same, one of them should be returned.
  */ 

 function maxOfThree(n1,n2,n3) {
    var max = Math.max(n1,n2,n3);
    return max
  };
 console.log(maxOfThree(6, 9, 1));

/*Write a function printLongestWord that accepts a single argument, 
an array of strings. The method should return the longest word in the array. In case of a tie,
the method should return the word that appears first in the array.*/

const printLongestWord = (array) => {
    const sorted = array.sort((a,b)=> b.length - a.length)
    console.log(sorted[0])
  };
  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

/*Write a Javascript function called transmogrify. This function 
should accept three arguments, which you can assume will be numbers. 
Your function should return the "transmogrified" result. The
transmogrified result of three numbers is the product of the first 
two numbers, raised to the power of the third number.
For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to 
the power of 2 is 225.*/

function transmogrify (n1,n2,n3){
    return Math.pow((n1*n2),n3)
  };
  
  console.log(transmogrify(5, 3, 2));

  /*Project Euler Problem 2
Project Euler problem #2
Write a function that takes a parameter, a number. 
The function should print the Fibonacci sequence up to that number.
Adjust the function to push the even numbered values into an array.
Adjust the function to return the summed value of the array.
Find the sum of the even numbered values that do not exceed four million. */

function fibonacci(num){
    let evenNum = [];
    let seqStart = [0,1];
    if (num === 0){
      return seqStart[0]
    }else if(num === 1){
      return seqStart[1]
    }else{
      let i = 2;
      while(i < num){
        let calcNum= seqStart[i-2] + seqStart[i-1]
        seqStart.push(calcNum);
        i++;
        if (calcNum %2===0 && calcNum < 4000000) {
          evenNum.push(calcNum)
        }
      }
    }
    // console.log(evenNum)    // produces even number array fibonacci
    // console.log(seqStart)  // just produces fibonacci 
    return evenNum.reduce(function (a,b) {
      return a + b
    }, 0); // sum of even number array
  }
  
  console.log(fibonacci(90));

  /*Write a function findNeedle() that takes an array full of junk
but contains one "needle" After your function finds the needle it 
should return a message (as a string) that says: "found the needle at 
postition" plus the index it found the needle so: */

function findNeedle(haystack) {
    return "found the needle at postition " + haystack.indexOf('needle')
    
  };
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])


  /*Given an array, return the sum of only the positive numbers */

  function sumPositive(numbers) {
    var sum = 0;
    for(var i = 0; i< numbers.length; i++) {
      if(numbers[i] > 0) {
        sum += numbers[i];
      }
    }
    return sum
    }
  sumPositive([1, -4, 7, 12]);