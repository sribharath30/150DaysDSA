function findMaxAverage(nums: number[], k: number): number {
    let maxSum = 0;
    let left = 0;
    let right = k;
    for (let n = 0; n < k; n++) {
        maxSum += nums[n];
    }
    let currSum = maxSum;
    while (right < nums.length) {
        currSum = (currSum - nums[left] + nums[right]);
        maxSum = Math.max(currSum, maxSum);
        left++;
        right++;
    }
    return maxSum / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
// console.log(findMaxAverage([5], 1));
// console.log(findMaxAverage([0,4,0,3,2],1));