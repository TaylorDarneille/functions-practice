// -----PART 1------

//QUESTION 1

function calculateCube (num){
    console.log(num*num*num)
  }
  calculateCube(5)
  
  
  //QUESTION 2
  
  
  function isAVowel (num){
    if(num == "a"| num == "e"|num == "i"|num == "o"| num == "u"|num == "A"| num == "E"|num == "I"|num == "O"| num == "U"){
      return true
    }
    return false 
  }
  isAVowel("a")
  
  //QUESTION 3
  
  function getTwoLengths (one, two){
    let three = one.split("")
    let four = two.split("")
    return([three.length,four.length])
  }
  getTwoLengths("two","three")
  //QUESTION 4
  
  function getMultipleLengths (array){
    return array.map(element => element.length)
    
  }
  getMultipleLengths(["two","three"])
  
  
  // -----PART 2------
  //QUESTION 1
  function maxOfThree (one,two,three){
    return Math.max(one,two,three)
  }
  maxOfThree(3,6,6)
  
  //QUESTION 2
  function printLongestWord(word) {
     var num = word.sort
     // I searched online for a way to use the sort function to put the elements of an array in descending order. This is where I found it: https://stackoverflow.com/questions/10630766/how-to-sort-an-array-based-on-the-length-of-each-element#:~:text=sort%20method%20to%20sort%20the,)%7B%20%2F%2F%20ASC%20%2D%3E%20a.
     (function (a,b){
        return b.length - a.length
     })
      return num[0]
    }
  printLongestWord(["two","three","four"])
  
  //QUESTION 3
  function transmogrify(one,two,three){
    return Math.pow((one*two),three)
  }
  
  transmogrify(5,3,2)
  
  //QUESTION 4
  // I could not find a way to make it stop at a desired number instead of a desired index 
  function fibonacci (num){
   var fibonacciSequence = []
   fibonacciSequence[0] = 0
   fibonacciSequence [1] = 1
   evenNumbers = []
      for (let i = 2; i < num; i++){
        fibonacciSequence[i] = fibonacciSequence[i - 2] + fibonacciSequence[i - 1];
        // console.log(fibonacciSequence[i]);
        if (fibonacciSequence[i]%2===0){
           evenNumbers.push(fibonacciSequence[i])
        }
      }
  return evenNumbers.reduce((a,b)=>a+b)
    }
  fibonacci()
  
  
  
  
  //QUESTION 5
  function findNeedle(array){
  for (let i of array){
    if (i === "needle") {
      console.log( "found the needle at position",array.indexOf(i))
    }
   }
  }
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle'])
  //QUESTION 6
  
  
  // function sumThePositive(array){
    var positive = 0;
    for (let i of array){ 
      if (i>0){
       positive += i
      }
    }
    return positive
  }
  
  sumThePositive([1, -4, 7, 12])