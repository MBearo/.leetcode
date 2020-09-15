/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const isConform = function (a, b) {
    let isResult = false
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i] && !isResult) {
        isResult = true
      } else if (a[i] !== b[i] && isResult) {
        return false
      }
    }
    return isResult
  }
  const queue = []
  let level = 0
  const set = new Set(wordList)
  if (!set.has(endWord)) return level
  queue.push(beginWord)
  while (queue.length) {
    level++
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      if (node === endWord) {
        return level
      }
      for (const item of set) {
        if (isConform(node, item)) {
          queue.push(item)
          set.delete(item)
        }
      }
    }
  }
  // 卡在这里好久。。。。
  // 能走到这里说明没有等于 endWord 的值，按题意返回 0
  return 0
};
// @lc code=end

console.log(ladderLength("hot", "dog", ["hot", "dog"]))