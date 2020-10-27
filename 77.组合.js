/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = []
  const backtrack = (arr, nums) => {
    if (arr.length === k) {
      result.push([...arr])
      return
    }
    for (let i = nums; i <= n; i++) {
      arr.push(i)
      backtrack(arr, i + 1) // 这个 i+1 太妙了，让下面直接从后一个开始
      arr.pop()
    }
  }
  backtrack([], 1)
  return result
};
// @lc code=end
console.log(combine(4, 2))
