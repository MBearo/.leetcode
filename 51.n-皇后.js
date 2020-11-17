/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
// 做完这道题发现还是菜的一批
var solveNQueens = function (n) {
  let grid = Array(n).fill().map(() => Array(n).fill('.'))
  let count = 0
  const result = []
  const isValid = (row, col) => {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 'Q' && (i + j === row + col || i - j === row - col || i === row || j === col)) {
          return false
        }
      }
    }
    return true
  }
  const helper = (row) => {
    if (row === n) {
      result.push(JSON.parse(JSON.stringify(grid.map(v=>v.join('')))))
      return
    }
    for (let i = 0; i < n; i++) {
      if (isValid(row, i)) {
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

console.log(solveNQueens(4));