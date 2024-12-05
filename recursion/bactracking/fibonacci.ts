function fibonacci (n: number): number {
    if(n <= 1) return n;
    let previousVal = fibonacci(n-1);
    let secondPrevousVal = fibonacci(n-2);
    return previousVal + secondPrevousVal;
};
console.log(fibonacci(4));