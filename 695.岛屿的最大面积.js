/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// 一次过，惊了
var maxAreaOfIsland = function (grid) {
  const rows = grid[0].length
  const cols = grid.length
  let count = 0
  let result = 0
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1 || grid[i][j] === 0) {
      return false
    }
    if (grid[i][j] === 1) {
      count++
    }
    grid[i][j] = 0
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j] !== 0) {
        dfs(i, j)
        if (count > result) {
          result = count
        }
        count = 0
      }
    }
  }
  return result
};
// @lc code=end

console.log(maxAreaOfIsland([
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
));