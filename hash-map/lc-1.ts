function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        const mapValue = map.get(difference);
        if(mapValue == undefined){
            map.set(nums[i],i);
        }else{
            return [mapValue,i];
        }
    }
    return[-1,-1];
}

console.log(twoSum([2,7,11,15],9));