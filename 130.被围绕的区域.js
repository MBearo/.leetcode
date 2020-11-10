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
  const rows = board.length;
  const cols = board[0].length
  // 两溜
  for (let i = 0; i < board.length; i++) {
    dfs(i, 0)
    dfs(i, board[i].length - 1)
  }
  // 两行
  for (let i = 0; i < board[0].length; i++) {
    //console.log(board[0][i]);
    // console.log(board[board.length - 1][i]);
    dfs(0, i)
    dfs(board.length - 1, i)
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'A') {
        board[i][j] = 'O'
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }
    }
  }

  function dfs(x, y) {
    if (x < 0 || y < 0 || x >= cols || y >= rows || board[y][x] === 'X' || board[y][x] === 'A') {
      return
    }
    board[y][x] = 'A'
    dfs(x + 1, y)
    dfs(x - 1, y)
    dfs(x, y + 1)
    dfs(x, y - 1)
  }
  return board
};
// @lc code=end

console.log(solve([
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X']
]));