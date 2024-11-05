function maxSubArray(nums: number[]): number {
    let maxSum = nums[0];
    let currSum = 0;
    for (const n of nums) {
        currSum = Math.max(currSum, 0);
        currSum += n;
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
}
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
// console.log(maxSubArray([1]))
console.log(maxSubArray([5,4,-1,7,8]))