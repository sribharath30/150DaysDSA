function checkArraySorted(nums: number[], i: number = 0, j: number = 1): boolean {
    if(j > nums.length - 1){
        return true
    };
    if(nums[i] > nums[j]){
        return false;
    }
    return checkArraySorted(nums,i+1,j+1);
}

console.log(checkArraySorted([1,2,3,6,4,5]))