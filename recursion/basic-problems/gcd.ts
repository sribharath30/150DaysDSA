function gcd(
  num1: number,
  num2: number,
  index: number,
  result: number = 0
): number {
  if (index > Math.min(num1, num2)) {
    return result;
  }
  if (num1 % index == 0 && num2 % index == 0) {
    result = index;
  }
  return gcd(num1, num2, index + 1, result);
}
console.log(gcd(20, 40, 1, -1));
