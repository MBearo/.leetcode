/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = []
  const backtrack = (arr, idx) => {
    result.push([...arr])
    for (let i = idx; i < nums.length; i++) {
      arr.push(nums[i])
      backtrack(arr, i + 1) //i+1保证同一个值不出现多次
      arr.pop()
    }
  }
  backtrack([], 0)
  return result
};
// @lc code=end

console.log(subsets([1,2,3]));