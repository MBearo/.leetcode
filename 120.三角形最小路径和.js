/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
// 这个太妙了
// https://leetcode-cn.com/problems/triangle/solution/zi-di-xiang-shang-dong-tai-gui-hua-lei-si-yu-cong-/
var minimumTotal = function (triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] = triangle[i][j] + Math.min(triangle[i + 1][j + 1], triangle[i + 1][j])
    }
  }
  return triangle[0][0]
}
// 单纯的递归超时
var minimumTotal2 = function (triangle) {
  let result = -Infinity
  const step = (sum, row, col) => {
    if (row === triangle.length) {
      if (sum <= result || result === -Infinity) {
        result = sum
      }
      return
    }
    for (let i = 0; i < triangle[row].length; i++) {
      if (i === col || i - col === 1) {
        step(sum + triangle[row][i], row + 1, i)
      }
    }
  }
  step(0, 0, 0)
  return result
};
// @lc code=end

console.log(minimumTotal([
  [2],
  [3,4],
  [6,5,7],
  [4,1,8,3]
]));