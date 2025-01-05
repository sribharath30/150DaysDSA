function numIslands(grid: string[][]): number {
    let visitedSet:Set<string> = new Set();
    let columnLength = grid.length;
    let isLandCount = 0;
    const dfs = (row: number, column: number, visitedSet: Set<string>) => {
        const stringLiteral = `${row},${column}`;
        visitedSet.add(stringLiteral);
        //go right upper condition column < grid[row].length - 1
        if (
            column + 1 < grid[row].length &&
            grid[row][column + 1] === '1' &&
            !visitedSet.has(`${row},${column + 1}`)
        ) {
            dfs(row, column + 1, visitedSet);
        }
        //go left upper condition column > 0

        if (
            column - 1 >= 0 &&
            grid[row][column - 1] === '1' &&
            !visitedSet.has(`${row},${column - 1}`)
        ) {
            dfs(row, column - 1, visitedSet);
        }

        //go down upper condition column < grid.length - 1
        if (
            row + 1 < grid.length &&
            grid[row + 1][column] === '1' &&
            !visitedSet.has(`${row + 1},${column}`)
        ) {
            dfs(row + 1, column, visitedSet);
        }
        //go up upper condition row > 0

        if (
            row - 1 >= 0 &&
            grid[row - 1][column] === '1' &&
            !visitedSet.has(`${row - 1},${column}`)
        ) {
            dfs(row - 1, column, visitedSet);
        }
    };
    for (let i = 0; i < columnLength; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1' && !visitedSet.has(`${i},${j}`)) {
                isLandCount++;
                dfs(i, j, visitedSet);
            }
        }
    }

    return isLandCount;
}