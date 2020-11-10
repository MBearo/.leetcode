/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 反其道而行之，找被包围的，那就反着找从边界开始的 O，并且和他相邻的所有 O
var solve = function (board) {
  if (board.length === 0) return board
  const rows = board.length;
  const cols = board[0].length
  // 两溜
  for (let i = 0; i < rows; i++) {
    dfs(i, 0)
    dfs(i, cols - 1)
  }
  // 两行
  for (let i = 0; i < cols; i++) {
    //console.log(board[0][i]);
    // console.log(board[board.length - 1][i]);
    dfs(0, i)
    dfs(rows - 1, i)
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'A') {
        board[i][j] = 'O'
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }
    }
  }

  function dfs(x, y) {
    if (x < 0 || y < 0 || x > rows - 1 || y > cols - 1 || board[x][y] !== 'O') {
      return
    }
    // console.log(y, x,rows,cols);
    board[x][y] = 'A'
    dfs(x + 1, y)
    dfs(x - 1, y)
    dfs(x, y + 1)
    dfs(x, y - 1)
  }
  return board
};
// @lc code=end

console.log(solve([
  ["X", "O", "X", "O", "X", "O"],
  ["O", "X", "O", "X", "O", "X"],
  ["X", "O", "X", "O", "X", "O"],
  ["O", "X", "O", "X", "O", "X"]
]));
// [
//   ["X","O","X","O","X","O"],
//   ["O","X","X","X","X","X"],
//   ["X","X","X","X","X","O"],
//   ["O","X","O","X","O","X"]
// ]