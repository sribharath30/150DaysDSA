function reverseString(str: string,ans = '', end: number): string{
    if(end < 0){
        return ans;
    }
    ans =  ans + str[end]; 
    return reverseString(str,ans,end-1)
};

console.log(reverseString('hello','',4));