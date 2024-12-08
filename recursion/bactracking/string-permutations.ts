function permute(str: string, prefix: string = "",result: string[] = []): string[] {
    if (str.length === 0) {
        result.push(prefix);
        return result;
    } else {
        for (let i = 0; i < str.length; i++) {
            const remaining = str.slice(0, i) + str.slice(i + 1);
            permute(remaining, prefix + str[i],result);
        }
    }
    return result;
}

console.log(permute("abc"));
