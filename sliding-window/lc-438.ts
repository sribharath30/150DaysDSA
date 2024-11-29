function findAnagrams(s: string, p: string): number[] {
    const result: number[] = [];
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);
    const aCharCode = 'a'.charCodeAt(0);

    for (let char of p) {
        pCount[char.charCodeAt(0) - aCharCode]++;
    }

    let left = 0;
    for (let right = 0; right < s.length; right++) {
        sCount[s.charCodeAt(right) - aCharCode]++;

        if (right - left + 1 > p.length) {
            sCount[s.charCodeAt(left) - aCharCode]--;
            left++;
        }

        if (arraysEqual(pCount, sCount)) {
            result.push(left);
        }
    }

    return result;
}

function arraysEqual(arr1: number[], arr2: number[]): boolean {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
findAnagrams("cbaebabacd", "abc");

