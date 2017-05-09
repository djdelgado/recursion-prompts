// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
    if (n < 0){
        return null;
    } else if (n === 0){
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};
//console.log(factorial(1));

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
    if (array.length === 0){
        return 0;
    }
    return array[0] + sum(array.slice(1));
};
//console.log(sum([1, 2, 3, 4, 5, 6]))

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
     if (Array.isArray(array[i])) { 
         sum += arraySum(array[i]);
     } else {
         sum += array[i];
     }   
   }
 return sum;
};
//console.log(arraySum([1,[2,3],[[4]],5]));

// 4. Check if a number is even.
var isEven = function(n) {
    if(n === 0){
        return true;
    } else if(n === 1){
        return false;
    } else if(n < 0) {
        return isEven(-n);
    } else{    
        return isEven(n - 2);
    }
};
//console.log(isEven(10));

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if (n === 0){
        return 0;
    } else if (n < 0){
        n += 1;
    } else {
        n -= 1;
    }
    return n + sumBelow(n);
};
//console.log(sumBelow(10));

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
    var array = [];
    if(x === y - 1){
        return array;
    } else if(y === x - 1){
        return array;
    } else if(y === x){
        return [];
    } else if (x > y){
        x -= 1;
        array.push(x);
    }else{
        x += 1;
        array.push(x);    
    }
    return array.concat(range(x, y));
};
//console.log(range(2, 9));

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if(exp < 0){
        return exponent(base, exp + 1)/base;
    }else if(exp === 0){
        return 1;
    } else {
        return base * exponent(base, exp - 1);
    }
};
//console.log(exponent(4, -2));

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if(n === 1){
        return true;
    }else if(n < 1){
        return false;
    }
    return powerOfTwo(n / 2);
};
//console.log(powerOfTwo(16));

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
    if (string.length===1) return string;
    return reverse(string.slice(1)) + string[0];
};
//console.log(reverse("monkey"));

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    string = string.replace(/\s/g, "").toLowerCase()
    var strLen = string.length;
    if (strLen === 0 || strLen === 1) {
        return true;
    }
    if (string[0] === string[strLen - 1]) {
        return palindrome(string.slice(1, strLen - 1));
    }
    return false;
};
//console.log(palindrome('racecar'))

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    if(x === 0 && y === 0){
        return NaN;
    }
    if(x < 0 && y < 0){
        x = -x;
        y = -y;
        return -modulo(x, y)
    }
    if(y < 0){
        y = -y;
        return -modulo(x, y);
    } 
    if(x < 0 && -x > y){
        x = -x
        return modulo(x,y)
    }
    if(x < y){
        return x
    }
    if(y === 1){
        return 0
    }
    x -= y;
    return modulo(x, y);
};
//console.log(modulo(-500,-499));

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
    if(x === 0 || y === 0){
        return 0;
    } else if(y > 0){
        return x + multiply(x, --y);
    } else {
        return -x + multiply(x, ++y);
    }
};
//console.log(multiply(-5, -4)); //20

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
    if(x < y){
        return 0
    }
    if(x ===0 && y === 0){
        return NaN;
    }
    if(y < 0){
        return -divide(x + y, y)
    }
    return 1 + divide(x - y, y);
};
//console.log(divide(17,5))

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    if(x < 0 || y < 0){
        return null;
    }
    if (y) {
        return gcd(y, x % y);
    } else {
        return x;
    }
};
console.log(gcd(4,36))

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if(str1.length === 0 && str2.length === 0){
        return true;
    }
    if(str1[0] !== str2[0])  {
        return false
    }
    return compareStr(str1.slice(1), str2.slice(1));
};
//console.log(compareStr('', ''));

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
    var i = Array.from(arguments)[1] || 0;
    var arr = [];
    if(i === str.length){
        return arr;
    }
    arr.push(str.charAt(i));
    return arr.concat(createArray(str, ++i));
};
//console.log(createArray('david'));

// 17. Reverse the order of an array
var reverseArr = function (array) {
    var arr = [];
    if(array.length === 0){
        return arr;
    }
    arr.push(array.pop());
    return arr.concat(reverseArr(array));
};
//console.log(reverseArr([1,2,3,4]));

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    var arr = [];
    if(length === 0){
        return arr;
    }
    arr.push(value);
    return arr.concat(buildList(value, length-1))
    
};
//console.log(buildList(0,5));

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    var i = Array.from(arguments)[2] || 0;
    var count = 0;
    if(i === array.length){
        return count;
    }
    if(array[i] === value){
        count++;
    }
    return count + countOccurrence(array, value, ++i);
};
//console.log(countOccurrence([2,7,4,4,1,4], 4));

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
    var i = Array.from(arguments)[2] || 0;
    var newArr = [];
    if(i === array.length){
        return newArr;
    }
    newArr.push(callback(array[i]));
    return newArr.concat(rMap(array, callback, ++i));
    
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
    var array = Array.from(arguments)[2] || [];
    if(obj.hasOwnProperty(key)){
        array.push(key);
    }
    for(var k in obj){   
        if(typeof obj[k] === 'object'){
            countKeysInObj(obj[k], key, array)
        }
    }
    return array.length;
};
//console.log(countKeysInObj({'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'}, 'e'));

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
    var sum = 0;
    for(var key in obj){
        if(obj[key] === value){
            sum += 1;
        }
        if(typeof obj[key] === 'object'){
            sum += countValuesInObj(obj[key], value);
        }
    }
    return sum;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
    for(var mykey in obj){
        if(obj[key]){
            obj[newKey] = obj[key];
            delete obj[key];
        }
        if(typeof obj[mykey] === 'object'){
            replaceKeysInObj(obj[mykey], key, newKey);
        }
    }
    return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
    var i = Array.from(arguments)[1] || 0
    var fibArr = Array.from(arguments)[2] || [0,1]
    if(fibArr.length === n+1){
        return fibArr;
    }
    if(n < 1){
        return null;
    }
    fibArr.push(fibArr[i] + fibArr[i+1]);
    return fibonacci(n, ++i, fibArr);
    
};
//console.log(fibonacci(5));


// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    var i = Array.from(arguments)[1] || 0
    var fibArr = Array.from(arguments)[2] || [0,1]
    if(n === 0){
        return 0;
    } 
    if(n < 0){
        return null;
    }
    if(fibArr.length-1 === n){
        return fibArr[n];
    }
    fibArr.push(fibArr[i] + fibArr[i+1]);
    return nthFibo(n, ++i, fibArr);
};
//console.log(nthFibo(7));

// 26. Given an array of words, return a new array containing each word capitalized.
var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
    var i = Array.from(arguments)[1] || 0;
    var newArr = [];
    if(i === input.length){
        return newArr;
    }
    newArr.push(input[i].toUpperCase());
    return newArr.concat(capitalizeWords(input, ++i));
    
};
//console.log(capitalizeWords(words))

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
    var i = Array.from(arguments)[1] || 0;
    var newArr = [];
    if(i === array.length){
        return newArr;
    }
    newArr.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    return newArr.concat(capitalizeFirst(array, ++i));
};
//console.log(capitalizeFirst(['car', 'poop', 'banana']));

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
    var sum = 0;
    for(var key in obj){
        if(obj[key]%2 === 0){
            sum += obj[key];
        }
        if(typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        }
    }
    return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
    var i = Array.from(arguments)[2] || 0;
    var result = Array.from(arguments)[1] || [];
    if(i === arrays.length){
      return result;
    }
    if(Array.isArray(arrays[i])){
      flatten(arrays[i], result);
    } else {
      result.push(arrays[i]);
    }
    return flatten(arrays, result, ++i);
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
    var i = Array.from(arguments)[2] || 0;
    obj = Array.from(arguments)[1] || {};
    if(i === str.length){
        return obj;
    }
    if(!obj[str[i]]){
        obj[str[i]] = 1;
    } else {
        obj[str[i]]++;
    }
    return Object.assign(obj, letterTally(str, obj, ++i));
};
//console.log(letterTally('potato'));

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
    var i = Array.from(arguments)[1] || 0;
    var arr = Array.from(arguments)[2] || [];
    if(i === list.length){
        return arr;
    }
    if(list[i] !== list[i+1]){
        arr.push(list[i]);
    }
    return compress(list, ++i, arr);
};
//console.log(compress([1, 2, 2, 3, 4, 4, 5, 5, 5, 2, 5 ,4]));

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
    var i = Array.from(arguments)[2] || 0;
    if(i === array.length){
        return array;
    }
    if(Array.isArray(array[i])){
        array[i].push(aug);
    }
    return augmentElements(array, aug, ++i);
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    var i = Array.from(arguments)[1] || 0;
    var newArr = Array.from(arguments)[2] || [];
    if(i === array.length){
        return newArr;
    }
    if(array[i] !== 0){
        newArr.push(array[i]);
    }else if(array[i] !== array[i+1]){
        newArr.push(array[i]);
    }
    return minimizeZeroes(array, ++i, newArr);
};
//console.log(minimizeZeroes([2,0,0,0,1,4]));

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    var i = Array.from(arguments)[1] || 0;
    if(i === array.length){
        return array;
    } 
    if(i%2 === 0){
        array[i] = Math.abs(array[i])
    } else {
        array[i] = -Math.abs(array[i]);
    }
    return alternateSign(array, ++i)
};
//console.log(alternateSign([-2,-7,8,3,-1,4]));

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    var ones = ['','one','two','three','four','five','six','seven','eight','nine'];
    var i = Array.from(arguments)[1] || 0;
    var strArr = str.split(' ');
    var newArray = []
    if(i === strArr.length){
        return newArray;
    }
    if(Number(strArr[i])){
        newArray.push(ones[Number(strArr[i])]);
    } else {
        newArray.push(strArr[i]);
    }
    return newArray.concat(numToText(str, ++i)).join(" ");
};
//console.log(numToText("I have 5 dogs and 6 ponies"));

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};
