function printName(name: string,count: number): void {
    if(count == 0){
        return;
    }
    console.log(name);
    count = count -1;
    printName(name,count);
}
printName('bharath',10)