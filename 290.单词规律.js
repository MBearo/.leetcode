/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  const hashMap = new Map()
  const resultArray = str.split(' ')
  for (const key in pattern) {
    if (hashMap.has(pattern[key])) {
      if (!hashMap.get(pattern[key]) === resultArray[key]) {
        return false
      }
    } else {
      hashMap.set(pattern[key], resultArray[key])
    }
  }
  return true
};
// @lc code=end

console.log(wordPattern("abba", "dog cat cat fish"))