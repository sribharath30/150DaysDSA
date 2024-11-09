export function swap(nums: number[], sourceIndex: number, targetIndex: number): void {
    const temp = nums[sourceIndex];
    nums[sourceIndex] = nums[targetIndex];
    nums[targetIndex] = temp;
}