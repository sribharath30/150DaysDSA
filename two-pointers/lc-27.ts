function removeElement(nums: number[], val: number): number {
    let cursor = 0;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] != val) {
            nums[cursor] = nums[index];
            cursor++;
        }
    }
    return cursor;
}
console.log(removeElement([0,1,2,2,3,0,4,2],2));