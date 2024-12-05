function generateParenthesis(
  n: number,
  current: string = "",
  openLength: number = 0,
  closedLength: number = 0,
  result: string[] = []
): string[] {
  if (current.length === 2 * n) {
    result.push(current);
    return result;
  }
  if (openLength < n) {
    generateParenthesis(
      n,
      current + "(",
      openLength + 1,
      closedLength,
      result
    );
  }
  if (closedLength < n && closedLength < openLength) {
    generateParenthesis(
      n,
      current + ")",
      openLength,
      closedLength + 1,
      result
    );
  }
  return result;
}
console.log(generateParenthesis(1));
