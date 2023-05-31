// Answer 1
function PairSum(allNumbers) {
    allNumbers.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < allNumbers.length; i += 2) {
        sum += allNumbers[i];
    }
    return sum;
}
let allNumbers = [1,4,3,2];
let result = PairSum(allNumbers);
console.log(result); 

// Answer 2
function distributeCandies(candyType) {
    let maxCandies = candyType.length / 2;
    let uniqueCandies = new Set(candyType).size;
    return Math.min(maxCandies, uniqueCandies);
}
let candyType =  [1,1,2,2,3,3];
let output = distributeCandies(candyType);
console.log(output);

// Answer 3
function findLHS(nums) {
    let map = new Map();
    let max = 0;
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    for (let [key, value] of map) {
        if (map.has(key + 1)) {
            max = Math.max(max, value + map.get(key + 1));
        }
    }
    return max;
}

let nums = [1,3,2,2,5,2,3,7];
let answer = findLHS(nums);
console.log(answer);

// Answer 4
function PlaceFlowers(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            flowerbed[i] = 1;
            count++;
        }
    }
    return count >= n;
}
console.log(PlaceFlowers([1,0,0,0,1], 1)); 
console.log(PlaceFlowers([1,0,0,0,1], 2)); 

// Answer 5
function maximumProduct(nums2) {
    nums2.sort((a, b) => a - b);
    let n = nums2.length;
    return Math.max(nums2[0] * nums2[1] * nums2[n - 1], nums2[n - 1] * nums2[n - 2] * nums2[n - 3]);
}

console.log(maximumProduct([1,2,3])); 
console.log(maximumProduct([1,2,3,4])); 

// Answer 6

function search(nums3, target) {
    let left = 0;
    let right = nums3.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums3[mid] === target) {
            return mid;
        } else if (nums3[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
console.log(search([-1,0,3,5,9,12], 9)); 
console.log(search([-1,0,3,5,9,12], 2)); 

// Answer 7
function isMonotonic(nums4) {
    let increasing = true;
    let decreasing = true;
    for (let i = 0; i < nums4.length - 1; i++) {
        if (nums4[i] > nums4[i + 1]) {
            increasing = false;
        }
        if (nums4[i] < nums4[i + 1]) {
            decreasing = false;
        }
    }
    return increasing || decreasing;
}
console.log(isMonotonic([6,5,4,4])); 
console.log(isMonotonic([1,3,2])); 

// Answer 8
function smallestRangeI(nums5, k) {
    let max = Math.max(...nums5);
    let min = Math.min(...nums5);
    return Math.max(0, max - min - 2 * k);
}
console.log(smallestRangeI([1], 0)); 
console.log(smallestRangeI([0,10], 2));