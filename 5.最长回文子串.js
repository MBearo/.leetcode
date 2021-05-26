/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 分两种情况，奇数和偶数
  // ji shu
  let result = ''
  for (let i = 0; i < s.length; i++) {
    let m = i
    let n = i
    while (m >= 0 && n < s.length && s[m] === s[n]) {
      m--
      n++
    }
    // 这里注意，如果跳出while的循环，符合结果的 m-- 和 n++ 被多执行了一次
    if (n - m - 1 > result.length) {
      result = s.slice(m + 1, n)
    }
  }
  // ou shu
  for (let i = 0; i < s.length; i++) {
    let m = i
    let n = i + 1
    while (m >= 0 && n < s.length && s[m] === s[n]) {
      m--
      n++
    }
    if (n - m - 1 > result.length) {
      result = s.slice(m + 1, n)
    }
  }
  return result
};
// @lc code=end
console.log(longestPalindrome("babad"));
