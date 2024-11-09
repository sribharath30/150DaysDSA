// function maximumSubarraySum(nums: number[], k: number): number {
//     let sum = 0;
//     let maxsum = 0;
//     for (let i = 0; i < k; i++) {
//         sum += nums[i];
//         if (sum % k != 0) {
//             maxsum = sum;
//         }
//     }
//     let start = 0;
//     let end = k;
//     while (end < nums.length) {
//         sum = sum - nums[start] + nums[end];
//         if (sum % k != 0) {
//             maxsum = Math.max(sum,maxsum);
//         }
//         start++;
//         end++;
//     }
//     return maxsum;
// }

// console.log(maximumSubarraySum([1,5,4,2,9,9,9],3));