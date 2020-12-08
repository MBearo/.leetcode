/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 抄的，这个代码太妙了，回味一下
var integerBreak = function (n) {
  const map = {}
  map[1] = 1
  map[2] = 1
  for (let i = 3; i <= n; i++) {
    map[i] = 0
    for (let j = 1; j < i - j; j++) {
      map[i] = Math.max(map[i], j * (i - j), j * map[i - j])
    }
  }
  return map[n]
};
// @lc code=end

console.log(integerBreak(10));