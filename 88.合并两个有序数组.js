/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m + n - 1
  let x = m - 1
  let y = n - 1
  while (y >= 0) {
    if (x < 0) {
      nums1[i--] = nums2[y--]
    } else {
      nums1[i--] = nums1[x] > nums2[y] ? nums1[x--] : nums2[y--]
    }
  }
};
// @lc code=end

