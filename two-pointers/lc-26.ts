function removeDuplicates(nums: number[]): number {
    let cursor = 0;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] != nums[cursor]) {
            cursor++;
            nums[cursor] = nums[index];
        }
    }
    return cursor + 1;
}
console.log(removeDuplicates([1,1,2]));