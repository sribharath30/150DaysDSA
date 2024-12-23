function missingNumber(nums: number[]): number {
    const map: any = {};
    const missingNumbers: number[] = []
    for (let n of nums) {
        map[n] = n;
    }
    for (let i = 0; i <= nums.length; i++) {
        if (map[i] == undefined) {
            return i;
        }
    }
    return -1
}