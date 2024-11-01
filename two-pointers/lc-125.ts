function isPalindrome(s: string): boolean {
    let start = 0;
    let end = s.length - 1;
    while (start <= end) {
        const leftElement = s.charAt(start).toLowerCase();
        const rightElement = s.charAt(end).toLowerCase();
        const isLeftAlphabet = /[A-Za-z0-9]/.test(leftElement);
        const isRightAlphabet = /[A-Za-z0-9]/.test(rightElement);
        if (!isLeftAlphabet) {
            start++;
            continue;
        }
        if (!isRightAlphabet) {
            end--;
            continue;
        }
        if (leftElement !== rightElement) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};

console.log(isPalindrome("0P"))