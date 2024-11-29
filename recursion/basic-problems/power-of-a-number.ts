function findPower(base: number,power: number): number {
    if(power == 1) return base;
    return base * findPower(base,power-1)
};
console.log(findPower(5,3));