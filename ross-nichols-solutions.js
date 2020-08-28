//PART ONE
//#1
const calculateCube = (num) => {
    return num * num * num
  }
  
  calculateCube(5)
  console.log(calculateCube(5))
  
  //#2
  const isAVowel = (str) => {
    if(str.includes('a')) {
      return true
    } else if (str.includes('e')){
      return true
    } else if (str.includes('i')) {
      return true
    } else if (str.includes('o')) {
      return true
    } else if (str.includes('u')) {
      return true
    } else if (str.includes('y')) {
      return 'sometimes'
    } else {
      return false
    }
  }
  
  isAVowel('a')
  console.log(isAVowel('a'))
  
  //#3
  const getTwoLengths = (str1, str2) => {
    const arr = []
    length1 = str1.length
    length2 = str2.length
    arr.push(length1)
    arr.push(length2)
    return arr
  }
  
  getTwoLengths('Hank', 'Hippopopalous')
  console.log(getTwoLengths('Hank', 'Hippopopalous'))
  
  //#4
  const getMultipleLengths = (arr) => {
    let wordCount = []
    for(i = 0; i < arr.length; i++) {
      len = arr[i].length
      //console.log(len)
      wordCount.push(len)
    }
    console.log(wordCount)
  }
  
  getMultipleLengths(['hello','what','is','up','dude'])
  
  
  
  //PART TWO
  //#1
  const maxOfThree = (num1, num2, num3) => {
    return Math.max(num1, num2, num3)
  }
  
  maxOfThree(6, 9, 1)
  console.log(maxOfThree(6, 9, 1))
  
  //#2
  const printLongestWord = (arr) => {
    let longest = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if (longest.length <= arr[i].length) {
        longest = arr[i]
      }
      //console.log(longest)
    }
    return longest
  }
  
  printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"])
  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]))
  
  //#3
  const transmogrify = (num1, num2, num3) => {
    //multiply first two numbers, raise to power of third
    return (num1 * num2) ** num3
  }
  
  console.log(transmogrify(5, 3, 2))
  
  //#4
  //Part 1: Write a function to return fibonacci sequence up to number
  //Sum of number is equal to sum of previous two numbers -> (n-1) + (n-2)
  //Part 2: Push even numbers into array
  //Part 3: Return summed value of array
  //Part 4: Find sum of even numbers less or equal four million in array
  const removeOdd = (arr) => {
    let newArray = []
    let newTotal = 0
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] % 2 === 0) {
        newArray.push(arr[i])
        newTotal += arr[i]
      }
    }
    if(newTotal >= 4000000) {
      return 4000000
    }
    console.log(newArray)
    console.log(newTotal)
    return newArray
    return newTotal
  }
  
  const euler = (num) => {
    let fibArray = [0, 1]
    for(let i = 2; i <= num; i++) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2]
    }
    removeOdd(fibArray)
  }
  
  euler(10)
  
  
  //#5 find the needle
  //for loop to search for index = 'needle'?
  const findNeedle = (arr) => {
    for(i = 0; i < arr.length; i++) {
      if(arr[i] = 'needle') {
        indexValue = arr[i].length - 1
        console.log('found the needle at position ' + indexValue)
        return 'found the needle at position' + indexValue
      }
    }
  }
  
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
  
  //#6
  //strip out negative and then sum arr
  const positiveSum = (arr) => {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        arr.splice(i, 1)
      }
      total += arr[i]
    }
    console.log(total)
  }
  
  positiveSum([1, -4, 7, 12])