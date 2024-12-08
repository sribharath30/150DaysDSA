const map: Record<string, string> = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};
function letterCombinations(
  digits: string,
  p: string = "",
  result: string[] = []
): string[] {
  if (digits.length === 0) {
    if(p.length){

        result.push(p);
    }
  } else {
    const char = digits.charAt(0);
    const mappedString = map[char];
    for (let i = 0; i < mappedString.length; i++) {
      letterCombinations(
        digits.substring(1),
        p + mappedString.charAt(i),
        result
      );
    }
  }
  return result;
}

console.log(letterCombinations("23"));
