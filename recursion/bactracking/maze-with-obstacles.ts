function printPathsWithObstacles(
  nums: boolean[][],
  result: number[][],
  row: number = 0,
  column: number = 0,
  path: string = "",
  step: number = 0
) {
  if (row == nums.length - 1 && column == nums[0].length - 1) {
    console.log(path);
    result[row][column] = step;
    console.log(result);
    result[row][column] = 0;
    return;
  }

  if (
    row < 0 ||
    column < 0 ||
    row >= nums.length ||
    column >= nums[0].length ||
    !nums[row][column]
  ) {
    return;
  }

  result[row][column] = step;
  nums[row][column] = false;

  printPathsWithObstacles(nums, result, row + 1, column, path + "D", step + 1);

  printPathsWithObstacles(nums, result, row, column + 1, path + "R", step + 1);

  printPathsWithObstacles(nums, result, row - 1, column, path + "U", step + 1);

  printPathsWithObstacles(nums, result, row, column - 1, path + "L", step + 1);

  nums[row][column] = true;
  result[row][column] = 0;
}

printPathsWithObstacles(
  [
    [true, true, true],
    [true, true, true],
    [true, true, true],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]
);
