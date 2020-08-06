/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0
  let j = height.length - 1
  let area = 0
  while (i < j) {
    const left = height[i]
    const right = height[j]
    const newArea = (left < right ? left : right) * (j - i)
    left < right ? i++ : j--
    if (newArea > area) {
      area = newArea
    }
  }
  return area
};
// @lc code=end

