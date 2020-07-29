/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let pivot = 1
  let i = 0
  let lt = 0
  let gt = nums.length
  while (i < gt) {
    if (nums[i] === pivot) {
      i++
    } else if (nums[i] > pivot) {
      [nums[i], nums[gt - 1]] = [nums[gt - 1], nums[i]]
      gt--
    } else {
      [nums[i], nums[lt]] = [nums[lt], nums[i]]
      lt++
      i++
    }
  }
  return nums
};
// @lc code=end

