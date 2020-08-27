function calculateCube(num) {
    return Math.pow(num, 3);
}
console.log(calculateCube(5));

function isAVowel(char) {
    char = char.toLowerCase();
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    }
    else {
        return false;
    }
}
console.log(isAVowel("a"));

function getTwoLengths(string1, string2) {
    let arr = [];
    arr.push(string1.length);
    arr.push(string2.length);
    return arr;
}

console.log(getTwoLengths("Hank", "Hippopopalous"));

function getMultipleLengths(arr) {
    let lengths = [];
    for(let i = 0; i < arr.length; i++) {
        lengths.push(arr[i].length);
    }
    return lengths;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

function maxOfThree(x, y, z) {
    if(x >= y && x >= z) {
        return x;
    } else if(y >= x && y >= z) {
        return y;
    } else {
        return z;
    }
}
console.log(maxOfThree(6, 9, 1));

function printLongestWord(arr) {
    let lengths = getMultipleLengths(arr);
    let max = 0;
    let maxI;
    for(let i = 0; i < lengths.length; i++) {
        if(lengths[i] > max) {
            max = lengths[i];
            maxI = i;
        }
    }
    return arr[maxI];
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

function transmogrify(x, y, z) {
    return Math.pow(x * y, z);
}
console.log(transmogrify(5, 3, 2));

function projectEuler(num) {
    let arr = [1, 2];
    let even = [2];
    while (num >= arr[arr.length-1] + arr[arr.length-2]){
        arr.push(arr[arr.length-1] + arr[arr.length-2]);
        if(arr[arr.length - 1] % 2 === 0 && arr[arr.length - 1] < 4000000) {
            even.push(arr[arr.length - 1] );
        }
    } 
    console.log(arr);
    return even.reduce((a, b) => a + b, 0);
}
console.log(projectEuler(10));

function findNeedle(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "needle") {
            console.log("found the needle at position", i.toString());
        }
    }
}
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']);

function sumPos(arr) {
    return arr.reduce(function(accum, current) {
        if(current > 0){
            return accum + current;
        } else {
            return accum;
        }
    }, 0);
}

function sumPosLoop(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum += arr[i];
        }
    }
    return sum;
}

console.log(sumPos([1, -4, 7, 12]));
console.log(sumPosLoop([1, -4, 7, 12]));