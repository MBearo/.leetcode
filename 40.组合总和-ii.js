/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = []
  candidates = candidates.sort((a, b) => a - b)
  const backtrack = (arr, target, idx) => {
    if (target === 0) {
      result.push([...arr])
      return
    }
    for (let i = idx; i < candidates.length; i++) {
      const element = candidates[i];
      if (target < element) continue
      if (i > idx && candidates[i] === candidates[i - 1]) continue
      arr.push(element)
      backtrack(arr, target - element, i + 1) //i+1保证同一个值不出现多次
      arr.pop()
    }
  }
  backtrack([], target, 0)
  return result
};
// @lc code=end

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));