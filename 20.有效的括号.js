/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    '(': true,
    '{': true,
    '[': true,
    ')': false,
    '}': false,
    ']': false
  }
  const map2 = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  let stack = []
  if(s.length===1) return false
  for (const iterator of s) {
    if (map[iterator]) {
      stack.push(iterator)
    } else {
      if (map2[iterator] !== stack.pop()) {
        return false
      }
    }
  }
  if (stack.length>0) return false
  return true
};

