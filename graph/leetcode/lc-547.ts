function findCircleNum(isConnected: number[][]): number {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);
    let provinceCount = 0;

    const dfs = (city: number) => {
        visited[city] = true;

        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (isConnected[city][neighbor] === 1 && !visited[neighbor]) {
                dfs(neighbor);
            }
        }
    };

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            provinceCount++;
            dfs(i);
        }
    }

    return provinceCount;
}

const matrix = [
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 1, 1],
];
console.log(findCircleNum(matrix));
