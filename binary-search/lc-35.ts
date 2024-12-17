function searchInsert(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1;

    while(start <= end){
        let mid = Math.floor( start + (end - start)/2);
        if(nums[mid] == target){
            return mid + 1;
        }else if( nums[mid] < target){
            start = mid + 1;
        }else{
            start = mid - 1; 
        }
    }
    return end;
};


console.log(searchInsert([1,3,5,6],6))