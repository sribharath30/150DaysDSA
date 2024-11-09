export function isAnagram(s1: string, s2: string): boolean {
    const MAX_CHAR = 26; // Assuming only lowercase letters a-z
    const freq: number[] = new Array(MAX_CHAR).fill(0);
    
    // Count frequency of each character in string s1
    for (const ch of s1) {
        freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
  
    // Count frequency of each character in string s2
    for (const ch of s2) {
        freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
  
    // Check if all frequencies are zero
    for (const count of freq) {
        if (count !== 0) {
            return false;
        }
    }
    
    return true;
}

// Example usage:
// console.log(isAnagram("listen", "silent")); // Output: true
// console.log(isAnagram("hello", "world"));   // Output: false
