/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// dp数组就相当于之前做动态规划里的数组，只不过这个是自己新建的，之前就是已经有了的
// 然后是边界条件很烦，01，130 这种都应该返回0
var numDecodings = function (s) {
  if (s[0] === '0') return 0 // 比如 01 那么期望结果应该是 0 而不是 1
  if (s.length === 1) return 1
  const dp = []
  dp[-1] = dp[0] = 1
  for (let i = 1; i < s.length; i++) {
    if (s[i] === '0') {
      if (s[i - 1] === '1' || s[i - 1] === '2') {
        dp[i] = dp[i - 2]
      } else {
        return 0
      }
    } else {
      if (s[i - 1] == '1' || (s[i - 1] == '2' && Number(s[i]) <= 6)) {
        dp[i] = dp[i - 1] + dp[i - 2]
      } else {
        dp[i] = dp[i - 1]
      }
    }
  }
  return dp[s.length - 1]
};
// @lc code=end

console.log(numDecodings('130'));