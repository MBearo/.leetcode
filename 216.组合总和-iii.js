/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = []
  const array = [...Array(9).keys()].map(v => v + 1)
  const backtrack = (arr, target, idx) => {
    if (target === 0 && arr.length === k) {
      result.push([...arr])
      return
    }
    for (let i = idx; i < array.length; i++) {
      arr.push(array[i])
      backtrack(arr, target - array[i], i + 1) //i+1保证同一个值不出现多次
      arr.pop()
    }
  }
  backtrack([], n, 0)
  return result
};
// @lc code=end

console.log(combinationSum3(3, 7));