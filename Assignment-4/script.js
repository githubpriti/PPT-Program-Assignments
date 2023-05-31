// Answer 1
function commonElements(arr1, arr2, arr3) {
    let result = [];
    let i = 0, j = 0, k = 0;
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
            result.push(arr1[i]);
            i++;
            j++;
            k++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr3[k]) {
            j++;
        } else {
            k++;
        }
    }
    return result;
}
console.log(commonElements([1, 2, 3, 4, 5], [1, 2, 5, 7, 9], [1, 3, 4, 5, 8]));

// Answer 2
function distinctElements(nums1, nums2) {
    let result = [[], []];
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    for (let num of set1) {
        if (!set2.has(num)) {
            result[0].push(num);
        }
    }
    for (let num of set2) {
        if (!set1.has(num)) {
            result[1].push(num);
        }
    }
    return result;
}
console.log(distinctElements([1, 2, 3], [2, 4, 6]));

// Answer 3
function transpose(matrix) {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let row = [];
        for (let j = 0; j < matrix.length; j++) {
            row.push(matrix[j][i]);
        }
        result.push(row);
    }
    return result;
}
let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(transpose(matrix));

// Answer 4
function arrayPairSum(nums3) {
    nums3.sort((a, b) => a - b);
    let result = 0;
    for (let i = 0; i < nums3.length; i += 2) {
        result += nums3[i];
    }
    return result;
}

// Test case
let nums3 = [1,4,3,2];
console.log(arrayPairSum(nums3));


// Answer 6
function sortedSquares(nums4) {
    let result = nums4.map(x => x * x);
    result.sort((a, b) => a - b);
    return result;
}

// Test case
let nums4 = [-4,-1,0,3,10];
console.log(sortedSquares(nums4)); 

// Answer 8
function shuffle(nums5, n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(nums5[i]);
        result.push(nums5[i + n]);
    }
    return result;
}

// Test case
let nums5 = [2,5,1,3,4,7], n = 3;
console.log(shuffle(nums5, n)); 



