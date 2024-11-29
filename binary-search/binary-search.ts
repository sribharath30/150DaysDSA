function binarySearch(nums: number[],target: number):number {
    let start = 0;
    let end = nums.length - 1;

    while(start <= end ){
        let mid = Math.floor(start + (end - start) / 2); 
        if(nums[mid] == target ) return mid;
        if(nums[mid] < target){
            start = mid + 1;
        } else{
            end = mid - 1;
        }
    }
    return -1;
}


console.log(binarySearch([1,2,3,4,5,6],6));