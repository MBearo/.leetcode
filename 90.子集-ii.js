/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const result = []
  nums = nums.sort((a, b) => a - b)
  const backtrack = (arr, visited, idx) => {
    result.push([...arr])
    for (let i = idx; i < nums.length; i++) {
      if (i > idx && nums[i] === nums[i - 1]) continue
      visited.push(i)
      arr.push(nums[i])
      backtrack(arr, visited, i + 1) //i+1保证同一个值不出现多次
      visited.pop()
      arr.pop()
    }
  }
  backtrack([], [], 0)
  return result
};
// @lc code=end

console.log(subsetsWithDup([1, 2, 2]));