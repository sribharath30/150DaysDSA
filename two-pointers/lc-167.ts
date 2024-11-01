function twoSum(nums: number[], target: number): number[] {
    let low = 0;
    let high = nums.length - 1;
    while( high >= low )
        {
        let sum = nums[low] + nums [high];
        if(sum == target)
        {
           return [low+1,high+1]
        }else if( sum > target)
        {
            high--;
        }else
        {
            low++
        }
    }
    return [0,0];
};

console.log(twoSum([-1,0],1))