function containsDuplicate(nums: number[]): boolean {
    const map: Record<number, number> = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] != undefined) {
            return true
        }
        map[nums[i]] = nums[i]
    }
    return false;
};
console.log(containsDuplicate([0,4,5,0,3,6]));