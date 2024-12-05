function printPaths(
  nums: number[][],
  right: number = 0,
  down: number = 0,
  result: number[] = [],
  finalResult: number[][] = []
): number[][] {
  if (down == nums.length - 1 && right == nums[nums.length - 1].length - 1) {
    result.push(nums[down][right]);
    finalResult.push([...result]);
    result.pop();
    return finalResult;
  }
  if (right < nums[down].length - 1) {
    result.push(nums[down][right]);
    printPaths(nums, right + 1, down, result, finalResult);
    result.pop();
  }
  if (down < nums.length - 1) {
    result.push(nums[down][right]);
    printPaths(nums, right, down + 1, result, finalResult);
    result.pop();
  }
  return finalResult;
}

console.log(
  printPaths([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
