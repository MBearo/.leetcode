/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// 相当于全算出来
// 往前走，一直取之前和的最小值
var minPathSum = function (grid) {
  let result = 0
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (row === 0 && col === 0) continue
      else if (row === 0 && col > 0) grid[row][col] += grid[row][col - 1]
      else if (col === 0 && row > 0) grid[row][col] += grid[row - 1][col]
      else grid[row][col] += Math.min(grid[row - 1][col], grid[row][col - 1])
    }
  }
  return grid[grid.length - 1][grid[0].length - 1]
};
// @lc code=end
console.log(minPathSum([
  [1, 4, 8, 6, 2, 2, 1, 7],
  [4, 7, 3, 1, 4, 5, 5, 1],
  [8, 8, 2, 1, 1, 8, 0, 1],
  [8, 9, 2, 9, 8, 0, 8, 9],
  [5, 7, 5, 7, 1, 8, 5, 5],
  [7, 0, 9, 4, 5, 6, 5, 6],
  [4, 9, 9, 7, 9, 1, 9, 0]
]));
