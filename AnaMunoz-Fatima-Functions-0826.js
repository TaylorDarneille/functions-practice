//============================================
// PART 2 
//============================================


// # 1 Calculate the Cube
//============================================
const calculateCube = (x) => {
  return x**3;
}
console.log(calculateCube(5));


// #2 Is a Vowel?
//============================================
const isAVowel = (letter) => {
  if (letter === 'a') {
  return true
} 
else {
return false
}
}
console.log(isAVowel("a"));
// console.log(isAVowel("b"));//Test

// // #3 Get Two Lenghts?
//============================================

const getTwoLengths = (word1,word2) => {
  return [word1,word2].map((x) => x.length); //The map() method calls the provided function once for each element in an array, in order
} 
console.log(getTwoLengths("Hank", "Hippopopalous"));
//


// 4 Get Multiplet Lengths
//============================================
function getMultipleLengths(strArray)//A StrArray (String Array) stores an array of character strings.  
{
  const newArray = [];
  for (let i=0; i <strArray.length; i++) {
      newArray.push(strArray[i].length);
  }
  return newArray;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//============================================
// PART 2 
//============================================

// 1 Maximum of Three Numbers
//============================================

function maxOfThree(num1, num2, num3) 
{
  var largest = Math.max(num1, num2, num3);
  return largest;
}

console.log(maxOfThree(6, 9, 1));

// 2 print the longest word 
//============================================
printLongestWord = (arr) => {
  arr.sort((a,b) => b.length - a.length)
  return arr[0]
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

// 3 Transmogrity
//============================================
transmogrify = (num1,num2,num3) => {
  return Math.pow(num1 * num2, num3)
}

console.log(transmogrify(5, 3, 2));

//4 Project Euler Problem 2 Fibonacci 
//============================================

const fib = (limit) => {
  let arr = [0];
  let evenArr = [];

  for(let i = 0; i < 100; i++){
      if(arr[arr.length - 1] <= limit){
          if(i >1){
              arr.push(arr[i -1] + arr[i-2]);
          } else {
              arr.push(i)
          }
      }
  }



  for(index of arr){
      if (index % 2 ===0){
      evenArr.push(index)
      }
  }

  let sum = arr.reduce((acc, current) => {
      return acc + current;
  });

  let sumEven = evenArr.reduce((acc,current)=> {
      return acc + current;
  });

return sumEven;

}

console.log(fib(40))

// 5 Needle in the Haystack
//============================================

const findNeedle = (arr)  => {
  if(arr.indexOf("needle") !== -1 ){
      return "found the needle at position " +
      arr.indexOf('needle')
  }
}

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'randomJunk','needle']) //Check