import { swap } from "../utils/swap";
function quickSort(nums: number[], low: number, high: number): number[] {
  if (low < high) {
    let partitionIndex = getPartitionIndex(nums, low, high);
    quickSort(nums, low, partitionIndex - 1);
    quickSort(nums, partitionIndex + 1, high);
  }
  return nums;
}
function getPartitionIndex(nums: number[], low: number, high: number): number {
  let pivot = nums[low];
  let i = low + 1;
  let j = high;
  while (i <= j) {
    while (i <= high && nums[i] <= pivot) {
      i++;
    }
    while (j >= low && nums[j] > pivot) {
      j--;
    }
    if (i < j) {
      swap(nums, i, j);
    }
  }
  swap(nums, low, j);
  return j;
}

const nums = [38, 27, 43, 3, 9, 82, 10];
console.log(quickSort(nums, 0, nums.length - 1));
