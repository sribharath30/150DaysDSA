function isValid(s: string): boolean {
    let charMap: Record<string, string> = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    let stack: string[] = [];
    for (let char of s) {
        if (char == '(' || char == '{' || char == '[') {
            stack.push(char)
        } else {
            if (stack.length == 0) {
                return false
            }
            let returnCharacter = stack[stack.length - 1] as string;
            let mappedValue = charMap[returnCharacter]
            if (mappedValue !== char) {
                return false
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}

console.log(isValid('(]'))