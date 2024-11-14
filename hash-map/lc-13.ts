function romanToInt(s: string): number {
    const romanToIntMap = new Map<string, number>([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]);
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        const character = s[i];
        const nextCharacter = s[i+1]
        const currentVal = romanToIntMap.get(character) ?? 0;
        const nextVal = romanToIntMap.get(nextCharacter) ?? 0;
       if (currentVal < nextVal) {
            sum += nextVal - currentVal;
            i++; 
        } else {
            sum += currentVal;
        }
    }
    return sum;
}
console.log(romanToInt("MCMXCIV"));