import { swap } from "../utils/swap";

// Main function for QuickSort
function quickSort(array: number[], low: number, high: number): number[] {
  // Base case: when low is not less than high, return the array
  if (low < high) {
    // Get the partition index after partitioning the array
    const partitionIndex = partition(array, low, high);
    
    // Recursively apply QuickSort on the left and right subarrays
    quickSort(array, low, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, high);
  }
  
  // Return the sorted array
  return array;
}

// Helper function to perform the partitioning
function partition(array: number[], low: number, high: number): number {
  // Choose the first element as the pivot
  const pivot = array[low];
  let leftPointer = low + 1;
  let rightPointer = high;

  // Partition the array
  while (leftPointer <= rightPointer) {
    // Move leftPointer right until we find an element greater than the pivot
    while (leftPointer <= high && array[leftPointer] <= pivot) {
      leftPointer++;
    }
    
    // Move rightPointer left until we find an element smaller than the pivot
    while (rightPointer >= low && array[rightPointer] > pivot) {
      rightPointer--;
    }
    
    // Swap elements if leftPointer is still less than rightPointer
    if (leftPointer < rightPointer) {
      swap(array, leftPointer, rightPointer);
    }
  }
  
  // Place the pivot element in the correct position
  swap(array, low, rightPointer);

  // Return the partition index where the pivot is now located
  return rightPointer;
}

// Example usage:
const nums = [38, 27, 43, 3, 9, 82, 10];
console.log(quickSort(nums, 0, nums.length - 1));
