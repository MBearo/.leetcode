/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let hasObstacleI = false
  let hasObstacleJ = false
  if (obstacleGrid[0][0] === 1) return 0
  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[i].length; j++) {
      if (i === 0 || j === 0) {
        if (obstacleGrid[i][j] === 1 && i === 0) {
          hasObstacleI = true
          obstacleGrid[i][j] = 0
        } else if (obstacleGrid[i][j] === 1 && j === 0) {
          hasObstacleJ = true
          obstacleGrid[i][j] = 0
        } else if ((hasObstacleI && i === 0) || (hasObstacleJ && j === 0)) {
          obstacleGrid[i][j] = 0
        } else {
          obstacleGrid[i][j] = 1
        }
      } else if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0
      } else {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
      }
    }
  }
  console.log(obstacleGrid);
  return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1]
};
// @lc code=end

console.log(uniquePathsWithObstacles([[1], [0]]));