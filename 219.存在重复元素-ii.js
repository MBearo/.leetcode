/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const set = new Set()
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (set.has(element)) {
      return true
    } else {
      set.add(element)
    }
    if (i >= k) {
      set.delete(nums[j])
      j++
    }
  }
  return false
};
// @lc code=end
console.log(containsNearbyDuplicate([1, 2, 3, 1]))
