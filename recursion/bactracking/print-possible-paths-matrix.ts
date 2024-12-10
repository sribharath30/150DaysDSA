function printPaths(
  nums: number[][],
  left: number = 0,
  right: number = 0,
  path: number[] = []
): number[][] {
  if (left == nums.length - 1 && right == nums[left].length - 1) {
    path.push(nums[left][right]);
    return [path];
  }

  let result: number[][] = [];

  if (left < nums.length - 1) {
    result = result.concat(
      printPaths(nums, left + 1, right, [...path, nums[left][right]])
    );
  }

  if (right < nums[left].length - 1) {
    result = result.concat(
      printPaths(nums, left, right + 1, [...path, nums[left][right]])
    );
  }

  return result;
}

console.log(
  printPaths([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
//[ [ 1, 4, 5, 6 ], [ 1, 2, 5, 6 ], [ 1, 2, 3, 6 ] ]

function printPath(
  nums: number[][],
  left: number = 0,
  right: number = 0,
  path: string = ""
): string[] {
  if (left == nums.length - 1 && right == nums[left].length - 1) {
    return [path];
  }
  let result: string[] = [];
  if (left < nums.length - 1) {
    result = result.concat(printPath(nums, left + 1, right, path + "D"));
  }
  if (right < nums[left].length) {
    result = result.concat(printPath(nums, left, right + 1, path + "R"));
  }
  return result;
}

console.log(
  printPath([
    [1, 2, 3],
    [4, 5, 6],
  ])
);

//[ 'DRR', 'RDR', 'RRD' ]

function printPathWithDiagonal(
  nums: number[][],
  left: number = 0,
  right: number = 0,
  path: string = ""
): string[] {
  if (left == nums.length - 1 && right == nums[left].length - 1) {
    return [path];
  }
  let result: string[] = [];
  if (left < nums.length - 1 && right < nums[left].length) {
    result = result.concat(
      printPathWithDiagonal(nums, left + 1, right + 1, path + "D")
    );
  }
  if (left < nums.length - 1) {
    result = result.concat(
      printPathWithDiagonal(nums, left + 1, right, path + "H")
    );
  }
  if (right < nums[left].length) {
    result = result.concat(
      printPathWithDiagonal(nums, left, right + 1, path + "V")
    );
  }
  return result;
}

console.log(
  printPathWithDiagonal([
    [1, 2, 3],
    [4, 5, 6]
  ])
);
