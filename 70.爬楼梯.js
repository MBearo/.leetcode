/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const memo = new Map()
  const step = (n) => {
    if (memo.has(n)) {
      return memo.get(n)
    }
    if (n === 1) {
      return 1
    }
    if (n === 2) {
      return 2
    }
    const value = step(n - 1) + step(n - 2)
    memo.set(n, value)
    return value
  }
  return step(n)
};
// @lc code=end

console.log(climbStairs(40));