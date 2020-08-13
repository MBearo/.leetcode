/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 这个解法，太蠢了
var frequencySort = function (s) {
  const map = {}
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (map[element]) {
      map[element]++
    } else {
      map[element] = 1
    }
  }
  const map2 = {}
  for (const key in map) {
    const value = map[key]
    if (map2[value]) {
      map2[value].push(key)
    } else {
      map2[value] = [key]
    }
  }
  let arr = []
  for (const key in map2) {
    arr.push(key)
  }
  arr = arr.sort((a, b) => b - a)
  return arr.reduce((a, c) => a + map2[c].map(v => v.repeat(c)).join(''), '')
};
// @lc code=end
console.log(frequencySort('cccaaaa'))
