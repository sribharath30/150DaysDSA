function majorityElement(nums: number[]): number {
    let countMap = new Map<number, number>();
    let maxCountValue = 0;
    let result = 0;

    for (let n of nums) {
        const mapCount = countMap.get(n) ?? 0;
        countMap.set(n, mapCount + 1);

        if (countMap.get(n)! > maxCountValue) {
            maxCountValue = countMap.get(n)!;
            result = n;
        }
    }

    return result;
}