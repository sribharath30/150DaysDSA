function mergeSort(nums: number[], low: number, high: number): number[] {
  if (low >= high) {
    return nums;
  }
  let mid = Math.floor((low + high) / 2);

  mergeSort(nums, low, mid);
  mergeSort(nums, mid + 1, high);
  return mergeArrays(nums, low, mid, high);
}
function mergeArrays(
  nums: number[],
  low: number,
  mid: number,
  high: number
): number[] {
  let temp: number[] = [];
  let left = low;
  let right = mid + 1;
  while (left <= mid && right <= high) {
    if (nums[left] < nums[right]) {
      temp.push(nums[left]);
      left++;
    } else {
      temp.push(nums[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp.push(nums[left]);
    left++;
  }
  while (right <= high) {
    temp.push(nums[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    nums[i] = temp[i - low];
  }
  return nums;
}
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr, 0, arr.length - 1));
