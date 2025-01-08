function transpose(matrix: number[][]): number[][] {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result: number[][] = [];

    for (let i = 0; i < rows; i++) {
        const insideArray: number[] = [];
        for (let j = 0; j < cols; j++) {
            insideArray.push(matrix[j][i]);
        }
        result.push(insideArray);
    }

    return result;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(transpose(matrix));
