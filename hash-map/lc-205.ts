function isIsomorphic(s: string, t: string): boolean {
    const mapST: Record<string, string> = {};
    const mapTS: Record<string, string> = {};
    for (let i = 0; i < s.length; i++) {
        const schar = s[i];
        const tchar = t[i];

        if ((mapST[schar] && mapST[schar] !== tchar) ||
            (mapTS[tchar] && mapTS[tchar] !== schar)) {
            return false;
        }
        mapST[schar] = tchar;
        mapTS[tchar] = schar;
    }
    return true;
};
console.log(isIsomorphic("foo", "bar"));