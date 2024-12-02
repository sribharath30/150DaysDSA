function binarySearch(
  nums: number[],
  target: number,
  start: number,
  end: number
): number {
  if (start > end) {
    return -1;
  }
  const mid = Math.floor(start + (end - start) / 2);
  if (nums[mid] == target) {
    return mid + 1;
  } else if (nums[mid] > target) {
    return binarySearch(nums, target, start, mid - 1);
  } else {
    return binarySearch(nums, target, mid + 1, end);
  }
}


console.log(binarySearch([1,2,3,4,5],4,0,5))
