import { swap } from "../../utils/swap";

function reverseArray(nums: number[], start: number, end: number) {
  if (start >= end) {
    return nums;
  }
  swap(nums, start, end);
  start = start + 1;
  end = end - 1;
  return reverseArray(nums, start, end);
}
console.log(reverseArray([1, 2, 3, 4, 5,6], 0, 5));
