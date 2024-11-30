function sumOfArray(nums: number[], index: number = 0): number {
  if (index >= nums.length) {
    return 0;
  }
  return nums[index] + sumOfArray(nums, index + 1);
}

console.log(sumOfArray([1, 2, 3, 4, 5]));
