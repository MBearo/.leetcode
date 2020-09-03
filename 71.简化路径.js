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
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === '..') {
      stack.pop()
    } else if (element !== '.') {
      stack.push(element)
    }
  }
  return stack.length === 0 ? '/' : stack.reduce((a, c) => a + '/' + c, '')
};
// @lc code=end

console.log(simplifyPath("/home/"));