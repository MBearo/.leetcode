/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = []
  const backtrack = (arr) => {
    if (arr.length === nums.length) {
      result.push(arr)
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (arr.includes(nums[i])) continue
      backtrack([...arr, nums[i]])
    }
  }
  backtrack([])
  return result
};
// @lc code=end

console.log(permute([1,2,3]))