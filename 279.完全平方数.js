/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const queue = []
  const set = new Set()
  queue.push(n)
  let level = 0
  while (queue.length) {
    const length = queue.length
    level++
    for (let j = 0; j < length; j++) {
      const node = queue.shift()
      for (let i = 1; i ** 2 <= node; i++) {
        let newVal = node - (i ** 2)
        if (newVal === 0) {
          return level
        } else {
          // 这里必须要加，否则会超时
          if (!set.has(newVal)) {
            queue.push(newVal)
            set.add(newVal)
          }
        }
      }
    }
  }
  return -1
};

// @lc code=end

console.log(numSquares(7168))