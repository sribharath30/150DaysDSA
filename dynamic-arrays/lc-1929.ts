function getConcatenation(nums: number[]): number[] {
    const newArray = new Array(nums.length * 2);
    for (let i = 0; i < nums.length; i++) {
        newArray[i] = nums[i];
        newArray[i + nums.length] = nums[i];
    }
    return newArray
}
console.log(getConcatenation([1,2,1]));