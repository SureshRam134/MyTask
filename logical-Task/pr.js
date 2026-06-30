// today - 11/06/26

// 1. Reverse a String (without inbuilt methods)
// Input: "javascript"
// Output: "tpircsavaj"

const reverse = (str) => {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}
console.log(reverse("javascript"));

// 2. Check Palindrome
// Input: "madam"
// Output: true
const palindrome = (str) => {
    let reverse = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse === str ? true : false
}
console.log(palindrome("madam"));

// 3. Find Largest Number in Array
// Input: [12, 45, 7, 89, 23]
// Output: 89

const largestNumber = (num) => {
    let large = num[0]
    for (let n of num) {
        if (n > large) {
            large = n
        }
    }
    return large
}
console.log(largestNumber([12, 45, 7, 89, 23]));

// 4. Fibonacci Series (first n numbers) 
// Input: 5 
// Output: 0 1 1 2 3

const Fibonacci = (n) => {
    let a = 0, b = 1
    let result = [a, b]

    for (i = 2; i < n; i++) {
        let c = a + b
        result.push(c)
        a = b
        b = c

    }
    return result
}
console.log(Fibonacci(5));


// 5. Count Even Numbers in Array
// Input: [1, 2, 3, 4, 5, 6]
// Output: 3

const evenCount = (arr) => {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) count++
    }
    return count
}
console.log(evenCount([1, 2, 3, 4, 5, 6]));


// today - 12/06/26
// 1. Find Smallest Number in Array
// Input: [45, 12, 78, 3, 25]
// Output: 3

const smallestNumber = (arr) => {
    let smallNumer = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallNumer) smallNumer = arr[i]
    }
    return smallNumer
}

console.log(smallestNumber([45, 12, 78, 3, 25]));



// 2. Check Armstrong Number
// Input: 153
// Output: Armstrong Number / Not Armstrong
const isArmstrong = (num) => {
    let original = num;
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += digit * digit * digit;
        num = Math.floor(num / 10);
    }

    return sum === original;
}

console.log(isArmstrong(153), 90); // true
console.log(isArmstrong(120)); // false


// 3. Reverse Each Word in a Sentence
// Input: "hello world"
// Output: "olleh dlrow"

const reverseWords = (str) => {
    let reverseSrt = ''
    const sp = str.split(" ")
    console.log(sp);

    for (let i = str.length - 1; i >= 0; i--) {
        reverseSrt += str[i]
    }
    return reverseSrt
}
console.log(reverseWords("hello world"));



// 4. Count Number of Words in String
// Input: "I love JavaScript"
// Output: 3

const wordsCount = (str) => {
    let count = 0
    let inWords = false
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '' && inWords === false) {
            count++
            inWords = true
        }
        if (str[i] === ' ') inWords = false
    }
    return count
}

console.log(wordsCount("I love JavaScript"), "suresh");



// 5. Find Sum of Array Elements (without reduce)
// Input: [10, 20, 30, 40]
// Output: 100

const num = [10, 20, 30, 40]
const val = num.reduce((acc, item) => (acc + item), 0)
console.log(val);

const sum = (num) => {
    let result = 0
    for (let n of num) {
        result += n
    }
    return result
}
console.log(sum([10, 20, 30, 40]));


const pranthises = (str) => {
    let count = 0
    for (p of str) {
        if (p === "(") count++
        else count--
    }

    return count === 0 ? "vaild" : "invaild"
}

console.log(pranthises("(()"));


// 13/06/26
// 1. Reverse a Number
// Input: 12345
// Output: 54321
const ReverseNum = (num) => {
    let str = num + ''
    let resukt = ''
    for (let i = str.length - 1; i >= 0; i--) {
        resukt += str[i]
    }

    return Number(resukt)
}
console.log(ReverseNum(12325));

const ReverseNumber = (num) => {
    let reverse = 0;

    while (num > 0) {
        let digit = num % 10;
        console.log(digit);

        reverse = reverse * 10 + digit;
        console.log(reverse);

        num = Math.floor(num / 10);
    }

    return reverse;
}

console.log(ReverseNumber(12325));


// 2. Input: 121
// Output: Palindrome

// Input: 123
// Output: Not Palindrome

const isPalindrome = (num) => {
    let original = String(num);
    let reverse = "";

    for (let i = original.length - 1; i >= 0; i--) {
        reverse += original[i];
    }

    if (original === reverse) {
        return "Palindrome";
    }

    return "Not Palindrome";
};

console.log(isPalindrome(121));


// 3. Input: [1, 2, 3, 2, 4, 1, 5]
// Output: [2, 1]
const duplicate = (num) => {
    let result = []
    for (let i = 0; i < num.length; i++) {
        let count = 0;
        for (j = 0; j < num.length; j++) {
            if (num[i] === num[j]) {
                count++
            }
        }
        if (count > 1) {
            let exit = false
            for (let k = 0; k < result.length; k++) {
                if (result[k] === num[i]) {
                    exit = true
                    break
                }
            }
            if (!exit) {
                result[i] = num[i]
            }
        }
    }
    return result
}

console.log(duplicate([1, 2, 3, 2, 4, 1, 5]), 897); 



// 4. Input: [1, 2, 3, 5]
// Output: 4

const missingNum = (num) => {

    for(let i = 0; i < num.length; i++){
        if(num[i+1] - num[i] !==1) return num[i] + 1
    }

}
console.log(missingNum( [56, 58,59,60]));



// 5. Input: "I love JavaScript programming"
// Output: "programming"

const longestWord = (str) => {
    let word = str.split(" ")
    let longest=  ''
    for(let i = 0; i < word.length; i++) {
        if(word[i].length > longest.length) longest = word[i]
    }
    return longest
}

console.log(longestWord("I love JavaScript programming"));


// 1. Find the Second Largest Number in an Array
// [10, 5, 20, 8, 15]
// Output: 15

const SecondLargest = (arr) => {
    let largest = arr[0]
    let secondLargest = arr[0]
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
        }
        else if(arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest 

}
console.log(SecondLargest([22, 20 , 15, 30, 23]));


// 2. Count the Occurrence of Each Character in a String
// Input: "programming"
// Output:
// {
//   p: 1,
//   r: 2,
//   o: 1,
//   g: 2,
//   a: 1,
//   m: 2,
//   i: 1,
//   n: 1
// }

const Occurrence = (str) => {
    result= {}
    for(let i =0; i < str.length; i++) {
        let char = str[i]        
        if(result[char]) result[char] ++
        else result[char] = 1
    }
    return result
}

console.log(Occurrence("sureshram"));

// 3. Find the First Non-Repeating Character in a String
// Input: "aabbcdeff"
// Output:c

  
const non_Repeating = (str)  =>{
    let result =  {}
    for(let i = 0 ; i < str.length ; i++) {
        let char = str[i]
        if(result[char]) result[char]++ 
        else result[char] = 1
    }
    for(let i = 0; i < str.length; i++) {
        if(result[str[i]] === 1) return str[i]
    }
}

console.log(non_Repeating("aabbcdeff"));


// todat - 19/06/26
//1.  Find the Element That Appears Only Once
// Input:
// [1, 2, 3, 2, 1, 4, 4]

// Output:
// 3
const findNoRepeat = (arr) => {
    let result = {}
    for(let i = 0 ; i < arr.length; i++) {
        let num = arr[i] 
        if(result[num]) result[num] ++
        else result[num] = 1
    }
    for(let k in result) {
        if(result[k] === 1) return Number(k)
    }
}
console.log(findNoRepeat([1, 2, 3, 2, 1, 4, 4]));




// 2. Check Whether Two Strings are Anagrams
// Input:
// "listen"
// "silent"

// Output:
// true

const Anagrams = (str1, str2) => {
    if(str1.length !== str2.length) return false
    let result = {}
    for(let i = 0 ; i< str1.length ; i++) {
        let char = str1[i]
        if(result[char]) result[char] ++
        else result[char] = 1
    }

    for(let i = 0 ; i< str2.length ; i++) {
        let char = str2[i]
        if(!result[char]) return false
        result[char] --
    }
    return true
}
console.log(Anagrams("listen", "silent"));


// 3. Move All Zeros to the End
// Input:
// [1, 0, 2, 0, 3, 4, 0]

// Output:
// [1, 2, 3, 4, 0, 0, 0]

const moveZeroLast = (arr) => {
    result = []
    count = 0
    for(let i = 0 ; i < arr.length; i++) {
        if(arr[i] !== 0 ) result.push(arr[i])
        else count++
    }
    for(let i = 0 ; i < count ; i++) {
         result.push(0)
    } 
    return result
}

console.log(moveZeroLast([1, 0, 2, 0, 3, 4, 0]));


// today
// 1. Find the Intersection of Two Arrays
// Input:
// [1, 2, 3, 4]
// [3, 4, 5, 6]

// Output:
// [3, 4]

const findCommonValue = (arr1, arr2) => {
   let  result = []
   for(let i = 0 ; i < arr1.length ; i++) {
    for(let j = 0; j < arr2.length ; j++) {
        if(arr1[i] === arr2[j]) result[result.length] = arr1[i]
    }
   }
   return result
}

console.log(findCommonValue([1, 2, 3, 4], [3, 4, 5, 6]));

// 2. Find the Maximum Consecutive Occurrence of a Character
// Input:
// "aaabbccccdde"

// Output:
// 4
const maxCount = (str) => {
    let count = 1
    let max = 1
    for(let i = 0 ; i< str.length ; i++) {
        if(str[i] === str[i+1]){
            count++
        }else {
            if(count > max) {
                max = count
            }
            count = 1
        }
    }
    return max
}

console.log(maxCount('aaabbccccdde'));4

// Rotate Array Left by One Position
// Input:
// [1, 2, 3, 4, 5]

// Output:
// [2, 3, 4, 5, 1]

const rotateLeft = (arr) => {
    let first = arr[0]
        for(let i = 0; i < arr.length-1 ; i++){
        arr[i] = arr[i+1]
        console.log(arr);
        
    }
    arr[arr.length - 1 ] = first
    return arr
}

console.log(rotateLeft([1, 2, 3, 4, 5]));






