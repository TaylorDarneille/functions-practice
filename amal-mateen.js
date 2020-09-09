// Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

function isAVowel(char){
    const vowelList = ["a","e","i","o","u"];
    for(letter of vowelList){
      if (letter === char.toLowerCase()){
        return true;
      }
    }
    return false;
  }
  
  // console.log(isAVowel("1"))
  
//Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
  
  function getTwoLengths(str1,str2){
    return [str1.length,str2.length];
  }
  
  // console.log(getTwoLengths("Hank", "Hippopopalous"));
  
  // Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
  
function getMultipleLengths(wordList){
    var toRet = [];
    for(word of wordList){
        toRet.push(word.length);
    }
    return toRet;
    }
    // console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
  
  //Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
  
  function maxOfThree(n1,n2,n3){
    const nums = [n1,n2,n3];
    var max = nums[0];
    for(var i = 1; i < nums.length; i++){
      if (max < nums[i]){
        max = nums[i];
      }
    }
    return max;
  }
  
  // console.log(maxOfThree(6, 9, 1));
  
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
  
  function printLongestWord(wordList){
    var maxL = wordList[0].length;
    var maxS = wordList[0]
    for(var i = 1; i < wordList.length; i++){
      if (maxL < wordList[i].length){
        maxL = wordList[i].length;
        maxS = wordList[i];
      }
    }
    return maxS;
  }
  
  // console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
  
// Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

  function transmogrify(num1,num2,pow){
      return Math.pow((num1 * num2),pow)
  }

//   console.log(transmogrify(5, 3, 2));


// fibonacci sequence 
  
  function fibonacci(num){
    var seqStart = [1,2];
    if (num === 0){
      return seqStart[0]
    }else if(num === 1){
      return seqStart[1]
    }else{
      var i = 2;
      while(num >= seqStart[i-2] + seqStart[i-1]){
        seqStart.push(seqStart[i-2] + seqStart[i-1]);
        i++;
      }
    }
    return getSumOfListEvenLEFourMil(seqStart);
  }

  // get even from list 
  function getEvens(numList){
      var toRet = [];
      for(num of numList){
          if (num % 2 == 0){
              toRet.push(num);
          }
      }
      return toRet;
  }
  // get sum of array 
  function getSumOfList(numList){
    var toRet = 0;
    for(num of numList){
        toRet += num;
    }
    return toRet;
  }
  // find sum of even and less than 4mil 
  function getSumOfListEvenLEFourMil(numList){
    var nnumList = getEvens(numList);
    var toRet = 0;
    for(num of nnumList){
        if (num < 4000000){
            toRet += (num);
        }
    }
    return toRet;
  }
  

// Answer 
//console.log(fibonacci(21));
// // p2
// console.log(getEvens(fibonacci(5)))
// // p3
// console.log(getSumOfList((fibonacci(5))))
// // p4
// console.log(getSumOfListEvenLEFourMil((fibonacci(5))))

// A Needle in the Haystack

function findNeedle(wordList){
    for(var i = 0; i < wordList.length; i++){
        if (wordList[i] === "needle"){
            return "found the needle at postition " + i;
        }
    }
    return "Not in list";
}

// console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))

// Sum Positive 

function sumPos(numList){
    var toRet = 0;
    for(num of numList){
        if(num > 0){
            toRet += num;
        }
    }
    return toRet;
}

// console.log(sumPos([1, -4, 7, 12]))

