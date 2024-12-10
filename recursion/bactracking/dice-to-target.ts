function diceCombinations(p:string,target: number, diceCount: number): void{
    if(target == 0 && diceCount == 0){
        return;
    }
    for (let i = 1; i <= 6 && i <= target; i++) {
        diceCombinations(p + i,target -i, diceCount - 1);
    }
}

diceCombinations('',7,2)

function numRollsToTarget(
  n: number,
  k: number,
  target: number,
  outputCount: number = 0
): number {
  if (target === 0 && n === 0) {
    return 1;
  }
  if (n === 0 || target < 0) {
    return 0;
  }
  for (let i = 1; i <= k && i <= target; i++) {
    outputCount += numRollsToTarget(n - 1, k, target - i);
  }
  return outputCount;
}

console.log(numRollsToTarget(2, 6, 7));
