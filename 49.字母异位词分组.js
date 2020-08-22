/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map()
  strs.forEach(str => {
    const sortedStr = str.split('').sort((a, b) => a.codePointAt() - b.codePointAt()).join('')
    if (map.get(sortedStr)) {
      map.set(sortedStr, [...map.get(sortedStr), str])
    } else {
      map.set(sortedStr, [str])
    }
  })
  return [...map.values(values => values)]
};
// @lc code=end

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));