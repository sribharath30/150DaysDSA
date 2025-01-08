function numIslands(grid: string[][]): number {
    let islandCount = 0;
    const numRows = grid.length;
    const numCols = grid[0].length;

    const dfs = (row: number, col: number) => {
        if (row < 0 || col < 0 || row >= numRows || col >= numCols || grid[row][col] !== '1') {
            return;
        }

        grid[row][col] = '0';

        dfs(row - 1, col); // Up
        dfs(row + 1, col); // Down
        dfs(row, col - 1); // Left
        dfs(row, col + 1); // Right
    };
    const bfs = (row: number, col: number) => {
        const directions = [
            [-1, 0], //up
            [1, 0], //down
            [0, -1], //left
            [0, 1], //right
        ];
        let pointer = [row, col];
        let queue: number[][] = [];
        queue.push(pointer);
        grid[row][col] = '0';
        while (queue.length !== 0) {
            const val = queue.shift()!;

            for (const [dx, dy] of directions) {
                const nx = val[0] + dx;
                const ny = val[1] + dy;

                if (
                    nx >= 0 &&
                    ny >= 0 &&
                    nx < grid.length &&
                    ny < grid[0].length &&
                    grid[nx][ny] == '1'
                ) {
                    grid[nx][ny] = '0';
                    queue.push([nx, ny]);
                }
            }
        }
    };
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (grid[i][j] === '1') {
                islandCount++;
                // dfs(i, j);
                bfs(i,j)
            }
        }
    }

    return islandCount;
}