function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const rows = image.length;
    const cols = image[0].length;
    const originalColor = image[sr][sc];

    if (originalColor === color) return image;

    const dfs = (row: number, col: number) => {
        if (row < 0 || col < 0 || row >= rows || col >= cols || image[row][col] !== originalColor) {
            return;
        }

        image[row][col] = color;

        dfs(row - 1, col); // Up
        dfs(row + 1, col); // Down
        dfs(row, col - 1); // Left
        dfs(row, col + 1); // Right
    };
    dfs(sr, sc);
    return image;
}
const image = [[0,0,0],[0,0,0]],
    sr = 1,
    sc = 0,
    color = 2;
console.log(floodFill(image, sr, sc, color));
