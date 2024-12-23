const obj = {
  test1: "cs",
  test2: {
    nested1: {
      value: 2,
    },
  },
};

const ans = {};
Object.assign(ans,obj);
console.log(ans);

// array [1,1,2,1,3,1,5,3]
output : 1

function majorityElement(nums: number[]): number {
  const map: Record<number, number> = {};
  let maxElement = 0;
  let maxValue = 0;
  for (let n of nums) {
    const val = map[n] ? map[n] + 1 : 1;
    if (val > maxValue) {
      maxElement = n;
      maxValue = val;
    }
    map[n] = val;
  }
  return maxElement;
}

console.log(majorityElement([1,1,2,1,3,1,5,3]))

// arr = [1,2,5,4] k = 5
// output = 3


function missingNumber(nums: number[],k : number): number[] {
    const map: any = {};
    const missingNumbers: number[] = []
    for(let n of nums){
        map[n] = n;
    }
    for(let i=1;i<=k;i++){
        if(map[i] == undefined){
            missingNumbers.push(i)
        }
    }
    return missingNumbers
  }
  console.log(missingNumber([1,2,3,5],5))