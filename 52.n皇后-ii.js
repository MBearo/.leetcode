/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let result = 0
  let grid = Array(n).fill().map(() => Array(n).fill('.'))
  const isVaild = (row, col) => {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 'Q' && (i === row || j === col || i + j === row + col || i - j === row - col)) {
          return false
        }
      }
    }
    return true
  }
  const helper = (row) => {
    if (row === n) {
      result++
      return
    }
    for (let i = 0; i < n; i++) {
      if (isVaild(row, i)) {
        grid[row][i] = 'Q'
        helper(row + 1)
        grid[row][i] = '.'
      }
    }
  }
  helper(0)
  return result
};
// @lc code=end
console.log(totalNQueens(4));
