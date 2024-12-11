function permute(
  nums: number[],
  result: number[][] = [],
  track: number[] = []
): number[][] {
  if (track.length == nums.length) {
    result.push([...track]);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (!track.includes(nums[i])) {
        track.push(nums[i]);
        permute(nums, result, track);
        track.pop();
      }
    }
  }
  return result;
}

console.log(permute([1, 2, 3]));
