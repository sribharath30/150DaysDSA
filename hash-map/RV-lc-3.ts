function lengthOfLongestSubstring(s: string): number {
    let start = 0;
    let end = 0;
    let map: Record<string, number> = {};
    let maxsum = 0;

    while (end < s.length) {
        const char = s[end];

        // If character is already in the map and within the current window, update start
        if (map[char] !== undefined && map[char] >= start) {
            start = map[char] + 1;
        }

        // Update the character's index in the map to the current position
        map[char] = end;

        // Calculate the current window length and update maxsum if it's larger
        maxsum = Math.max(maxsum, end - start + 1);

        end++;
    }

    return maxsum;
}

console.log(lengthOfLongestSubstring("abcabcbb"));