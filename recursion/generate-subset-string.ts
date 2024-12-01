function generateSubSetString(p: string, up: string,result: string[] = []): string[] {
    if(up.length === 0){
        result.push(p);
        return result;
    }
    const char = up.charAt(0);
    generateSubSetString(p + char, up.substring(1),result);
    generateSubSetString(p,up.substring(1),result);
    return result;
}

console.log(generateSubSetString('','abc'))