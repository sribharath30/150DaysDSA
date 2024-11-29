function sumOfNumber(num: number, sum:number = 0){
    if(num < 1){
        return sum;
    }
    sum+= num;
    num = num -1;
    return sumOfNumber(num,sum);
}
console.log(sumOfNumber(3));