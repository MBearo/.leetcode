/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const record = new Set(nums1)
  const result = new Set()
  for (let i = 0; i < nums2.length; i++) {
    if (record.has(nums2[i])) {
      result.add(nums2[i])
    }
  }
  return [...result]
};
// @lc code=end

