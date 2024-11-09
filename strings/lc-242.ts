function isAnagram(s: string, t: string): boolean {
    const MAX_VALUE = 26;
    const charCountArray = new Array(MAX_VALUE).fill(0);
    const aCharValue = 'a'.charCodeAt(0);
    for (let char of s) {
        charCountArray[char.charCodeAt(0) - aCharValue]++;
    }
    for (let char of t) {
        charCountArray[char.charCodeAt(0) - aCharValue]--;
    }
    for (let count of charCountArray) {
        if (count != 0) {
            return false;
        }
    }
    return true;
};
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));