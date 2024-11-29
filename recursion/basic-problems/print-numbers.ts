function printNumbersBackTrack(no: number){
    if(no > 5){
        return;
    }
    console.log(no);
    printNumbersBackTrack(++no);
}
printNumbersBackTrack(1);