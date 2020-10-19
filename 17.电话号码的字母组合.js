/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
const numberMap = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}
var letterCombinations = function (digits) {
  if (digits === '') return []
  const arr = []
  const result = []
  for (let i = 0; i < digits.length; i++) {
    arr.push(numberMap[digits[i]])
  }
  bfs([], 0)
  function bfs(temp, depth) {
    if (temp.length === arr.length) {
      result.push(temp.join(''))
      return
    }
    for (let i = 0; i < arr[depth].length; i++) {
      // if (temp.includes(arr[depth][i])) {
      //   continue
      // }
      bfs([...temp, arr[depth][i]], depth + 1)
    }
  }
  return result
};
// @lc code=end