/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (set.has(element)) {
      return true
    } else {
      set.add(element)
    }
  }
  return false
};
// @lc code=end

