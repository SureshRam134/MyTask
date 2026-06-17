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

console.log(wordsCount("I love JavaScript"), 987);



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
        if(num[i+1] -num[i] !==1) return num[i] + 1
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

