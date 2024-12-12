function solveNQueens(n: number, col: number, board: boolean[][],result: string[][] = []): string[][] {
  if (col == n) {
    result.push(
        board.map(row => row.map(cell => (cell ? "Q" : ".")).join(""))
      );
  }
  for (let row = 0; row < n; row++) {
    if (isSafe(board, col, row, n)) {
      board[col][row] = true;
      solveNQueens(n, col + 1, board,result);
      board[col][row] = false;
    }
  }
  return result
}

function isSafe(
  board: boolean[][],
  col: number,
  row: number,
  n: number
): boolean {
  //check vertical
  for (let i = 0; i < col; i++) {
    if (board[i][row]) return false;
  }
  //check left diagonal
  for (let i = col - 1, j = row - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j]) return false;
  }
  //check right diagonal

  for (let i = col - 1, j = row + 1; i >= 0 && j < n; i--, j++) {
    if (board[i][j]) return false;
  }

  return true;
}

const n = 4;
const board = Array.from({ length: n }, () => Array(n).fill(false));
console.log(solveNQueens(n, 0, board));
