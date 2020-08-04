/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0
  let j = s.length - 1
  while (i < j) {
    while (s[i] && !isValid(s[i])) {
      i++
    }
    while (s[j] && !isValid(s[j])) {
      j--
    }
    if (!(s[i] && s[j])) {
      return true
    }
    console.log(s[i], s[j]);
    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false
    }
    i++
    j--
  }
  return true
};
var isPalindrome2 = function (s) {
  s = s.toLowerCase()
  let i = 0
  let j = s.length - 1
  while (i < j) {
    // 用 continue 不错，以后要多尝试
    if (!isValid(s[i])) {
      i++
      continue
    }
    if (!isValid(s[j])) {
      j--
      continue
    }
    if (!(s[i] && s[j])) {
      return true
    }
    console.log(s[i], s[j]);
    if (s[i] === s[j]) {
      i++
      j--
    } else {
      break
    }
  }
  // 这里有意思
  return j <= i;
};
function isValid(string) {
  return isDigit(string.toLowerCase()) || isChar(string.toLowerCase())
}
function isDigit(string) {
  // 0 - 9
  return (string.charCodeAt() >= 48 && string.charCodeAt() <= 57)
}
function isChar(string) {
  // a - z
  return (string.charCodeAt() >= 97 && string.charCodeAt() <= 122)
}
// @lc code=end

