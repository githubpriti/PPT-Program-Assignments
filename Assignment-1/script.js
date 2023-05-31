// Answer 1:
function twoSum(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
}

let nums = [2, 8, 7, 15];
let target = 9;
let result = twoSum(nums, target);
console.log(result);

// Answer 2
function removeElement(num1, val) {
    let k = 0;
    for (let i = 0; i < num1.length; i++) {
        if (num1[i] != val) {
            num1[k] = num1[i];
            k++;
        }
    }
    return k;
}
let num1 = [3, 2, 2, 3];
let val = 3;
let newLength = removeElement(num1, val);
console.log(num1.slice(0, newLength)); 
console.log(newLength);

// Answer 3
function searchInsert(num2, target1) {
    let left = 0;
    let right = num2.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (num2[mid] === target1) {
            return mid;
        } else if (num2[mid] < target1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

let num2 = [1,3,5,6];
let target1 = 5;
let result1 = searchInsert(num2, target1);
console.log(result1); 

// Answer 4
function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] < 10) {
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}
let digits = [1,2,9];
let result2 = plusOne(digits);
console.log(result2); 

// Answer 5
function merge(nums3, m, nums4, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums3[i] > nums4[j]) {
            nums3[k--] = nums3[i--];
        } else {
            nums3[k--] = nums4[j--];
        }
    }
    while (j >= 0) {
        nums3[k--] = nums4[j--];
    }
}
let nums3 = [1,2,3,0,0,0];
let m = 3;
let nums4 = [2,5,6];
let n = 3;
merge(nums3, m, nums4, n);
console.log(nums3)

// Answer 6

function Duplicate(nums5) {
    let set = new Set(nums5);
    return set.size !== nums5.length;
}

let nums5 = [1,2,3,1];
console.log(Duplicate(nums5));

// Answer 7
function moveZero(number) {
    let zero = 0; 
    for (let i = 0; i < number.length; i++) {
        if (number[i] !== 0) {
            [number[i], number[zero]] = [number[zero], number[i]];
            zero++;
        }
    }
}
let number = [0,1,0,3,12];
moveZero(number);
console.log(number);

// Answer 8
function ErrorNums(number2) {
    let n = number2.length;
    let set = new Set(number2);
    let duplicate = number2.reduce((a, b) => a + b, 0) - Array.from(set).reduce((a, b) => a + b, 0);
    let missing = (n * (n + 1)) / 2 - Array.from(set).reduce((a, b) => a + b, 0);
    return [duplicate, missing];
}
let number2 = [1,2,2,4];
console.log(ErrorNums(number2));



