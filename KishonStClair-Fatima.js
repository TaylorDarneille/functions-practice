// Question 1
//Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

function calculateCube(number) {
  
    console.log(number * number * number)
}
calculateCube(5)


// Question 2
//  write a function with an parameter for a string
function isAVowel(str) {
    // write a agrument for the length of the string and determine its a vowel
    let count = 0
    const vowels = "abpurtRWKO"
    for(var i = 0; i < str.length; i++){
    console.log(vowels.indexOf(str[i]) > -1)
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
function getMultipleLengths(str) {
  const name = "Hank";
  const lastname = "Hippopopalous";
  console.log(["hello".length, "what".length, "is".length, "up".length, "dude".length])
}
getMultipleLengths()

// Part 2
const maxOfThree = (num1, num2, num3) => {
    return Math.max(num1, num2, num3)
  }
  
  maxOfThree(6, 9, 1)
  console.log(maxOfThree(6, 9, 1))


//Question 2
 function printLongestWord(str) {
    let words = str.split("  ");
    let longest = "";
  
    for (var word of words) {
      if(word.length > longest.length) longest = word;
    }
    return longest;
  }
  printLongestWord("BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob")

 // Question 3
 function transmogrify(num1,num2,num3) {
    // Calculate num1 and num2 then multiple the answer against each other. it's the same as to the power of 2
    let result = (num1 * num2) * (num1 * num2);
      console.log(result);
    
  }
  transmogrify(5, 3, 2);

  //Question 4
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