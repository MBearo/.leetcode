/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const arr = path.split('/').filter(v => v)
  const stack = []
  for (let element of arr) {
    if (element === '..') {
      stack.pop()
    } else if (element !== '.') {
      stack.push(element)
    }
  }
  return '/'+stack.join('/')
};
// @lc code=end

console.log(simplifyPath("/home/"));