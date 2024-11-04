function moveZeroes(nums: number[]): void {
    let writePointer = 0;
    for(let readPointer=0;readPointer<nums.length;readPointer++)
    {
        if(nums[readPointer] != 0)
        {
            swap(nums,readPointer,writePointer);
            writePointer++;
        }
    }
    console.log(nums);
};
function swap(nums: number[], sourceIndex: number, targetIndex: number): void {
    const temp = nums[sourceIndex];
    nums[sourceIndex] = nums[targetIndex];
    nums[targetIndex] = temp;
}
moveZeroes([0,1,0,3,12]);