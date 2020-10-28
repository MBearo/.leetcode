/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = []
  const backtrack = (arr, target, idx) => {
    if (target === 0) {
      result.push([...arr])
      return
    }
    for (let i = idx; i < candidates.length; i++) {
      const element = candidates[i];
      if (target < element) {
        continue
      }
      arr.push(element)
      backtrack(arr, target - element, i)
      arr.pop()
    }
  }
  backtrack([], target, 0)
  return result
};
// @lc code=end

console.log(combinationSum([2,3,5], 8))