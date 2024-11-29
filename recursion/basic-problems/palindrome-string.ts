function stringPalindrome(str: string, start: number, end: number): boolean {
    if(start >= end ){
        return true
    }
   const boolean =  str[start] != str[end]
   if(boolean){
    return false;
   }
   return stringPalindrome(str,++start,--end)
}

console.log(stringPalindrome('madam',0,4));