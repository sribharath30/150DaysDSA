function generateSubset(
  nums: number[],
  p: number[] = [],
  right: number = 0,
  result: number[][] = []
): number[][] {
  if (right >= nums.length) {
    result.push(p);
    return result;
  }
  const val = nums[right];
  const newArr: number[] = [...p, val];
  generateSubset(nums, newArr, right + 1, result);
  generateSubset(nums, p, right + 1, result);
  return result;
}
console.log(generateSubset([0]));
