// Answer 1
function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let currentSum = nums[i] + nums[left] + nums[right];
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }
            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return closestSum;
}
let nums = [-1, 2, 1, -4];
let target = 1;
console.log(threeSumClosest(nums, target));

// Answer 4
function searchInsert(nums2, target) {
    let left = 0;
    let right = nums2.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums2[mid] === target) {
            return mid;
        } else if (nums2[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

// Test case
let nums2 = [1,3,5,6];
let target2 = 5;
console.log(searchInsert(nums2, target2));

// Answer 5
function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}

// Test case
let digits = [1,2,3];
console.log(plusOne(digits));

// Answer 6
function singleNumber(nums3) {
    let result = 0;
    for (let i = 0; i < nums3.length; i++) {
        result ^= nums3[i];
    }
    return result;
}

// Test case
let nums3 = [2,2,1];
console.log(singleNumber(nums3));

// Answer 7
function findMissingRanges(nums4, lower, upper) {
    let result = [];
    let prev = lower - 1;
    for (let i = 0; i <= nums4.length; i++) {
        let curr = (i < nums4.length) ? nums4[i] : upper + 1;
        if (prev + 1 <= curr - 1) {
            result.push(formatRange(prev + 1, curr - 1));
        }
        prev = curr;
    }
    return result;
}

function formatRange(lower, upper) {
    if (lower === upper) {
        return [lower, upper];
    } else {
        return [lower, upper];
    }
}

// Test case
let nums4 = [0,1,3,50,75];
let lower = 0;
let upper = 99;
console.log(findMissingRanges(nums4, lower, upper));

// Answer 8
function canAttendMeetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < intervals[i-1][1]) {
            return false;
        }
    }
    return true;
}

// Test case
let intervals = [[0,30],[5,10],[15,20]];
console.log(canAttendMeetings(intervals));
