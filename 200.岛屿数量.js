/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
function helper(grid, i, j, rows, cols) {
  if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === "0") {
    return false
  }
  grid[i][j] = "0"; // 这个有点妙

  helper(grid, i + 1, j, rows, cols);
  helper(grid, i, j + 1, rows, cols);
  helper(grid, i - 1, j, rows, cols);
  helper(grid, i, j - 1, rows, cols);

}
var numIslands = function (grid) {
  let res = 0;
  const rows = grid.length;
  if (rows === 0) return 0;
  const cols = grid[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        helper(grid, i, j, rows, cols);
        res++;
      }
    }
  }
  return res;
}
// 一次过，哭了，但是不够简洁
var numIslands2 = function (grid) {
  const direction = [[0, -1], [1, 0], [0, 1], [-1, 0]]
  const xLength = grid[0].length
  const yLength = grid.length
  // 性能会差
  const visitedGrid = Array(yLength).fill().map(() => Array(xLength).fill(false))
  let count = 0
  function find(x, y, visited, index) {
    if (visited[y][x]) {
      return false
    }
    if (grid[y][x] === '1') {
      visited[y][x] = true
      if (index == 0) {
        count++
      }
    } else {
      return false
    }
    let result = false
    for (const [m, n] of direction) {
      const newX = x + m
      const newY = y + n
      if (newX >= 0 && newX < xLength && newY >= 0 && newY < yLength) {
        if (find(newX, newY, visited, index + 1)) {
          result = true
        } else {
          continue
        }
      }
    }
    // visited[y][x] = false
    return result
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const flag = find(j, i, [...visitedGrid], 0)
    }
  }
  return count
};
// @lc code=end

console.log(numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
]));