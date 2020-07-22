/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var string = ""
  if(!strs.length) return string
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        // return 就是直接结束了循环，string作为函数的返回值
        return string
      }
    }
    string+=strs[0][i]
  }
  return string
};

