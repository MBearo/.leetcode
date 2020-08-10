/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let i = 0
  let j = -1
  const window = {}
  const need = {}
  let valid = 0
  let result = ''
  let resultLength = s.length

  t.split('').forEach(k => need[k] = need[k] === undefined ? 1 : need[k] + 1)
  while (j < s.length - 1) {
    j++
    let right = s[j]
    window[right] = window[right] ? window[right] + 1 : 1
    if (window[right] <= need[right]) {
      valid++
    }
    while (valid === t.length) {
      if (j - i + 1 <= resultLength) {
        result = s.slice(i, j + 1)
        resultLength = result.length
      }

      let left = s[i]
      if (window[left] <= need[left]) {
        valid--
      }
      window[left]--
      i++
    }
  }
  return result
};
// @lc code=end

console.log(minWindow('ADOBECODEBANC', 'ABC'))