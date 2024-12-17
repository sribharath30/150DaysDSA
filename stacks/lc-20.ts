function isValid(s: string): boolean {
    let stack: string[] = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let char of s) {
        if (char == '(' || char == '{' || char == '[') {
            stack.push(char);
        } else {
            const popped_value = stack.pop();
            if (map[char] != popped_value) {
                return false;
            }
        }
    }
    return stack.length === 0
};