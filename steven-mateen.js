//#1
const calculateCube = (num) => {
    let cube = num*num*num;
    return cube;
};
console.log(calculateCube(5));

//#2
const vowels = ['a', 'e', 'i', 'o', 'u']
const isAVowel = (letter) => {
  for (let i = 0; i < vowels.length; i++) {
    if (letter.toUpperCase === vowels[i].toUpperCase) {
     return true;
  } else {
  	return false
  }
  }
};
console.log(isAVowel('a'));

//#3 
        const arr = [];
		const getTwoLengths = (a, b) => {
			let lengthOne = a.length;
			let lengthTwo = b.length;
			arr.push(lengthOne, lengthTwo);
			return arr;
		};
        console.log(getTwoLengths('Hank', 'Hippopopalous'));
        
//#4
const lengthArray = [];
		getMultipleLengths = (param) => {
			for (let i = 0; i < param.length; i++) {
				let lengths = param[i].length;
				lengthArray.push(lengths);
			}
			return lengthArray;		
		};
        console.log(getMultipleLengths(['hello', 'what', 'is', 'up', 'dude']));

//#1
const maxOfThree = (numberOne, numberTwo, numberThree) => {
    let maximum = Math.max(numberOne, numberTwo, numberThree);
    return maximum;
};
console.log(maxOfThree(6, 9, 1));

//#2 
        let longest = 0;
        let newLongest;
		const printLongestWord = (arrayOfStrings) => {
			for (let i = 0; i < arrayOfStrings.length; i++) {
				if (arrayOfStrings[i].length > longest) {
					longest = arrayOfStrings[i];
				}
				if (arrayOfStrings[i].length > longest.length) {
					newLongest = arrayOfStrings[i];
				}
			}
				 return newLongest;
		};
		console.log(printLongestWord(['BoJack', 'Princess', 'Diane', 'a', 'Max', 'Peanutbutter', 'big', 'blob']));


//#3
const transmogrify = (a, b, c) => {
    let tran = Math.pow((a*b), c);
    return tran; 
};
console.log(transmogrify(5, 3, 2));

//#4 (could not figure out the fibonacci part) 
fibArray = [];
const fibonacci = (number) => {
};
for (index of ) {
    if (index % 2 === 0) {
        fibArray.push(index);
    }
}
console.log(4); 


//#5
const findNeedle = (needleArray) => {
    for (let i = 0; i < needleArray.length; i++) {
        if (needleArray[i] === 'needle') {
            let needle = 'found the needle at position ' + i;
            let stringNeedle = needle.toString();
            return stringNeedle;
        }
    }
};
console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));

//#6
const given = [1, -4, 7, 12];
		let add = 0;
		const sumPositive = (someArray) => {
			for (let i = 0; i < someArray.length; i++) {
				if (someArray[i] >= 0) {
					add += someArray[i]; 
				}
			}
			return add;
		};
        console.log(sumPositive(given)); 
        

