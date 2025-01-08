function maxAreaOfIsland(grid: number[][]): number {
    let maxCount = 0;
    let rows = grid.length;
    let cols = grid[0].length;

    const dfs = (row: number, col: number): number => {
        if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] == 0) {
            return 0;
        }
        grid[row][col] = 0;

        let count = 1;
        count += dfs(row - 1, col);
        count += dfs(row + 1, col);
        count += dfs(row, col + 1);
        count += dfs(row, col - 1);

        return count;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 1) {
                maxCount = Math.max(dfs(i, j),maxCount);
            }
        }
    }
    return maxCount;
}

const matrix = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

console.log(maxAreaOfIsland(matrix));
