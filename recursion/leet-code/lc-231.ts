// function checkPowerOfTwo(n: number){
//     if(n==0){
//         return false;
//     }
//     while(n!= 1){
//         if(n %2 != 0){
//             return false;
//         }
//         n = Math.floor(n/2);
//     }
//     return true;
// }

function checkPowerOfTwo(n: number): boolean{
    if(n == 0) return false;
    if(n == 1) return true;
    if(n %2 != 0) return false;
    return checkPowerOfTwo(Math.floor(n/2));
}
console.log(checkPowerOfTwo(8));