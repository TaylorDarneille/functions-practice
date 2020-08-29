//Calculate Cube
function calculateCube(num) {
    console.log(num*num*num)
  }
  
  calculateCube(5)
  
//Is a Vowel?
  var vowels = [ "a", "e", "i", "o", "u","y"] 
  const isAVowel = (letter) => {
    if (vowels.includes(letter)) {
      return true
    } else {
      return false
    }
  }  
  console.log(isAVowel("a"));

//Get Two Lengths
    const getTwoLengths = (string1,string2) => {
    var x = [];
    x.push(string1.length);
    x.push(string2.length);
    return x
  }
  console.log(getTwoLengths("Hank", "Hippopopalous"));

//Get Multiple Lengths
  function getMultipleLengths(array) {
    y=[]
    for (i=0; i<array.length;i++){
        y.push(array[i].length)
        }   
    return y
    }
      
  console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"])) 
    
//Maximum of Three Numbers
  const maxOfThree =(n1,n2,n3) => {
    return Math.max(n1,n2,n3)
  }
  console.log(maxOfThree(6, 9, 1));  

//Print Longest Word
  function printLongestWord(longWords) {
    var longest = longWords[0]
    for (i=0; i< longWords.length; i++) {
      var current=longWords[i]
      if (current.length > longest.length) {
        longest = current
      } else if (current.length <= longest.length) {
        longest = longest
      }
    }   
    return longest
  }
  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]))

//Transmorgify the Numbers
  var val
  function transmogrify(no1,no2,no3) {
    for (i=0;i<=no3;i++) {
      val = (no1*no2)
      val = val * val
    }
    return val
  }
  console.log(transmogrify(5, 3, 2))

//Project Euler Problem 2

function eulerProj(anyNumber) {
  fibb = []
  
  var x=1
  var y=0
  var wow 
  for (i=0; i<= anyNumber; i++){
    wow = x+y
    x=y
    y=wow
  fibb.push(wow)
  } 
  return fibb // [fibb.length-1]
}
console.log(eulerProj(7))


// function eulerProj(anyNumber) {
//   fibb = []
//   var x=1
//   var y=0
//   var wow 
//   let i=0
//   while (i<=anyNumber) {
//     wow = x+y
//     x=y
//     y=wow
//   fibb.push(wow)
//   i++
//   } return fibb
// }
// //0,1,1,2,3,5,8,13
// console.log(eulerProj(7))

// const fibby = (reps) => {
//   fibb = []
//   var x=1
//   var y=0
//   var wow 
//   if (fibb[fibb.length-1] <= reps) {
//     wow = x+y
//     x=y
//     y=wow
//   fibb.push(wow)
//   return fibb
//   } else {
//     return
//     }
// }
  
//   console.log(fibby(21))

