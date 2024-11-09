function countGoodSubstrings(s: string): number {
    let count = 0;
    const k = 3;
    let start = 0;
    let end = k - 1;
    if (s.length < 3) return count
    while (start >= 0 && end < s.length) {
        if (s.charAt(start) != s.charAt(start + 1)
            && s.charAt(start + 1) != s.charAt(end) && s.charAt(end) != s.charAt(start)) {
            count++;
        }
        start++;
        end++;
    }
    return count;
}
console.log(countGoodSubstrings('xyzzaz'));