//Question 1
//Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
//console.log(calculateCube(5));
//=> 125

function calculateCube(){
    console.log(5*25)
  }
   calculateCube()
  //I wasnt sure about this solution, but it came out to 125. Im pretty sure there is a right way of doing this just not sure what it is.
  
  
  //Question 2
  //Is a Vowel?
  // Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
  
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const isAVowel = (letter) => {
    if (vowels.indexOf(letter.toUpperCase()) !== -1) {
      return true
    }
    return false
  }
  console.log(isAVowel('a'))
  //Got some help from Seth and Trez on this one. On a scale from 1-10 id say im at a 5 with this one for i dont 100% understand it.
  
  
  
  //Question 3
  // Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
  
  // console.log(getTwoLengths("Hank", "Hippopopalous"));
  // => [4, 13]
  
  const getTwoLengths = (string1, string2) => {
    let arr = [string1.split('').length, string2.split('').length]
    return arr
    //console.log(string1.length, string2.length)
  }
  // getTwoLengths('Name something else', 'Names')
  //Me Seth and Trez were working on this together but couldnt get past putting one parameter as an argument. I wasnt sure on how to do that but have decent understanding on whats going on. 
  
  
  
  
  //Question 4
  //Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
  
  console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
  // => [5, 4, 2, 2, 4]
  
  const getMultipleLengths = (arrayOfStrings) => {
    let arr = [arrayOfStrings.split('').length, strings2.split('').length]
    return arr
  }
  
  getMultipleLengths(['this', 'pizza', 'is', 'bomb', 'yo'])
  //Wasnt completed sure on how to do this. Would love extra help on this.
  
  //const getMultipleLengths = (arr) => {
  
  // var num = []
  // var numLet = ''
  
  //let i = 0
  // while(i < arr.lenth){
  //   numLet = arr[i].split('')
  //   num.push(numLet.length)
  //   i++
  // }
  // return num
  // }
  // console.log(getMultipleLengths(['this', 'pizza', 'is', 'bomb', 'yo']))
  //MATEENS SOLUTION^
  
  
  //Question 5
  //Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
  
  let arr = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]
  
  function printLongestWord(word) {
    let word1 = word[0]
      for (i = 0; i < word.length; i++) {
      if (word[i].length > word1.length) {
        word1 = word[i];
      }
    }
    return word1;
  }
  
  console.log(printLongestWord(arr));
  //Google definately helped alot with this promt. Have a decent understanding on whats going on just a little confused on all the variables being declared.
  
  
  
  
  //Question 6
  //Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
  // The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
  // For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
  // console.log(transmogrify(5, 3, 2));
  
  const transmogrify = (num1,num2,num3) => {
      let newNum = num1 * num2;
      let newNum2 = Math.pow(newNum,num3)
  return newNum2;
  }
  
  transmogrify(5,3,2)
  //Trez broke this down and explained to me what was going on after Brunos office hours. I Have a decent understanding.
  
  //transmogrify = (num1, num2, num3) => {
  //   return Math.pow(num1 * num2 * num3)
  // }
  // console.log(transmogrify(5, 3, 2))
  //Mateen's solution
  
  
  
  //Question 7
  //Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.
  
  // Adjust the function to push the even numbered values into an array.
  
  // Adjust the function to return the summed value of the array.
  
  // Find the sum of the even numbered values that do not exceed four million.
  // WRITE COMMENT
  const fibonacci = (num) => {
        const fibArray = [0,1]
        for(let i = 2; i <= num; i++) {
            const prevNum1 = fibArray[i-1]
            const prevNum2 = fibArray[i-2]
            fibArray.push(prevNum1 + prevNum2)
  }
      return fibArray[num]
  }
  fibonacci(20)
  //Bruno went over this with some other students in office hours and would love extra help on this. I would say Im not super comfortable with whats going on. I have the code down to break it down and really analyze whats going on.
  
  
  
  
  //const fib = (limit) => {
  // let arr = [0]
  // let evenArr = []
  
  // for(let i = 0; i < 100; i++){
  //   if(arr[arr.length - 1] <= limit){ 
  //     if(i > 1){
  //       arr.push(arr[i -1] + arr[i - 2])
  //     } else {
  //       arr.push(i)
  //     }
  //   }
  // }
  // for(index of arr){
  // if(index % 2 === 0)
  //   }
  // let sum = arr.reduce((acc, current) => {
  //   return acc + current
    
  // }
  
  //   return arr
  
  // }
  
  // console.log(fib(40))
  //METEENS SOLUTION ^
  
  
  
  
  
  
  //Can you find the needle in the haystack?
  
  // Write a function findNeedle() that takes an array full of junk but contains one "needle"
  
  // After your function finds the needle it should return a message (as a string) that says:
  
  // "found the needle at postition" plus the index it found the needle so:
  
  // findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
  
  // Should return:
  
  // "found the needle at position 5"
  
  // let findNeedle = ['grass', 'tree', 'needle', 'junk', 'house'];
  
  // findNeedle(findNeedle);
  
  const findNeedle = (haystack) => {
    return "found the needle at position " + haystack.indexOf("needle");
  }
  
  findNeedle(['car', 'junk', 'hay', 'needle', 'house', 'junk', 'random'])
   
  
  // Given an array, return the sum of only the positive numbers
  // [1, -4, 7, 12] => 1 + 7 + 12 = 20
  
  
  
  const SummPositive = (numbers) => {
    var negatives = [];
    var sum = 0;
    for(var i = 0; i < numbers.length; i++) {
      if(numbers[i] < 0) {
        negatives.push(numbers[i]);
      }else{
        sum += numbers[i];
      }
    }
    console.log(negatives);
    return sum;
  }
  var sum_result = SummPositive([ 1, -4, 7, 12]);
  //Did some googling and found some solutions. Got it to analyze and break it down. Need help understanding better.