/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0
  let j = -1
  let set = new Set()
  let result = 0
  while (i < s.length) {
    if (set.has(s[j])) {
      set.delete(s[i++])
    } else {
      result = Math.max(result, set.size)
      set.add(s[j++])
    }
  }
  return result
};
// @lc code=end

console.log(lengthOfLongestSubstring('pwwkew'))