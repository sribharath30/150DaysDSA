const map = {};
function tribonacci(n: number, memo: Map<number, number> = new Map()): number {
  if (n == 0) {
    return 0;
  }
  if (n == 1 || n == 2) {
    return 1;
  }
  if (memo.has(n)) {
    return memo.get(n) as number;
  }
  const result =
    tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
  memo.set(n, result);
  return result;
}

console.log(tribonacci(25));
