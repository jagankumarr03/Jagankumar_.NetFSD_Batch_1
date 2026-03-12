console.log("===== DATA CLEANING & ANALYTICS =====");

let numbers = [10, 20, 30, 10, 40, 20, 50, 60, 60];


let uniqueNumbers = [...new Set(numbers)];
console.log("Unique Numbers:", uniqueNumbers);


let sortedDesc = [...uniqueNumbers].sort((a, b) => b - a);
let secondLargest = sortedDesc[1];
console.log("Second Largest:", secondLargest);


let frequency = numbers.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
console.log("Frequency:", frequency);


let firstNonRepeating = numbers.find(num => frequency[num] === 1);
console.log("First Non-Repeating:", firstNonRepeating);


let rotateBy = 2;
let rotated = numbers.slice(rotateBy).concat(numbers.slice(0, rotateBy));
console.log("Rotated Array:", rotated);


let nestedArray = [1, 2, [3, 4, [5]]];

function flattenArray(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
}

let flattened = flattenArray(nestedArray);
console.log("Flattened Array:", flattened);


let missingArray = [1, 2, 3, 5, 6];

let missingNumber = missingArray
  .sort((a, b) => a - b)
  .find((num, index) => num !== index + 1);

console.log("Missing Number:", missingNumber);

console.log("===== END =====");