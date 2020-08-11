/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s === t || s === '') return true
  let hashMapS = new Map()
  let hashMapT = new Map()
  for (let index = 0; index < s.length; index++) {
    if (hashMapS.has(s[index]) || hashMapT.has(t[index])) {
      if (hashMapS.get(s[index]) !== hashMapT.get(t[index])) {
        return false
      }
    }
    hashMapS.set(s[index], index)
    hashMapT.set(t[index], index)
  }
  return true
};

// @lc code=end

