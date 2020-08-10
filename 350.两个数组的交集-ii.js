/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const hashMap = {}
  const result = []
  nums1.forEach(v => {
    hashMap[v] ? hashMap[v] = hashMap[v] + 1 : hashMap[v] = 1
  })
  nums2.forEach(v => {
    if (hashMap[v]) {
      hashMap[v]--
      result.push(v)
    }
  })
  return result
};
// @lc code=end

