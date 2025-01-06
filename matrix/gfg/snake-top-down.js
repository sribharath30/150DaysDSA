function snakePattern(matrix) {
    let column = 0;
    let direction = true;
    let result = [];
    for(let i =0 ;i<matrix.length;i++){
        if (direction === false) {
            for (let i = matrix.length - 1; i >= 0; i--) {
                result.push(matrix[column][i]);
            }
        } else if (direction === true) {
            for (let i = 0; i <= matrix.length - 1; i++) {
                result.push(matrix[column][i]);
            }
        }
        direction = !direction;
        column++;
    }
    return result;
}
const matrix = [
    //  00   01  02  03
    [10, 20, 30, 40],
    //  10   11  12  13
    [15, 25, 35, 45],
    //  20   21  22  23
    [27, 29, 37, 48],
    //  30   31  32  33
    [32, 33, 39, 50],
];

console.log(snakePattern(matrix));
