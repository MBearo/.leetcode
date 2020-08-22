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
  const hash = new Map()
  strs.forEach(str => {
    // sort 默认就是从小到大
    const sortedStr = str.split('').sort().join('')
    if (hash.get(sortedStr)) {
      hash.set(sortedStr, [...hash.get(sortedStr), str])
    } else {
      hash.set(sortedStr, [str])
    }
  })
  // values直接用就行
  return [...hash.values()]
};
// @lc code=end

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));