// function euclidGcd(a:number,b:number): number {
//     while(b!=0){
//         let divisor = a % b;
//         a = b;
//         b = divisor
//     }
//     return a;
// };

function euclidGcd(a: number, b: number): number {
  if (b == 0) return a;
  return euclidGcd(b, a % b);
}

console.log(euclidGcd(105, 350));
