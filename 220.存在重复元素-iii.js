/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  if (k < 0 || t < 0) return false
  const map = new Map()
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    const id = getID(nums[i], t)
    if (map.has(id)) {
      return true
    } else if (map.has(id + 1) || map.has(id - 1)) {
      if (map.get(id + 1) - nums[i] <= t) {
        return true
      }
      if (nums[i] - map.get(id - 1) <= t) {
        return true
      }
    }
    map.set(id, nums[i])
    if (i >= k) {
      map.delete(getID(nums[i - k], t))
      j++
    }
  }
  return false
};
function getID(value, t) {
  return Math.floor(value / (t + 1))
}
// @lc code=end

