/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const hashMap = {}
  let valid = 0
  s.split('').forEach(v => {
    hashMap[v] ? hashMap[v] = hashMap[v] + 1 : hashMap[v] = 1
  })
  t.split('').forEach(v => {
    if (hashMap[v]) {
      hashMap[v]--
    }
  })
};
// @lc code=end

