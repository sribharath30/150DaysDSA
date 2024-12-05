function printNumbers(num: number){
    if(num == 0 ){
        return;
    }
    printNumbers(num - 1);
    console.log(num);
}
printNumbers(10);
