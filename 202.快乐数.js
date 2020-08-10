/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// 迭代
var isHappy2 = function (n) {
  const cache = new Set()
  while (n !== 1) {
    n = sum(n)
    if (cache.has(n)) {
      return false
    }
    cache.add(n)
  }
  return true
};
// 一把过，懵了
var isHappy = function (n) {
  const cache = new Set()
  return x(n, cache)
};
function x(number, cache) {
  const s = sum(number)
  if (s === 1) {
    return true
  } else if (cache.has(s)) {
    return false
  } else {
    cache.add(s)
    return x(s, cache)
  }
}
function sum(number) {
  let arr = []
  for (const i of number.toString()) {
    arr.push(Number(i))
  }
  return arr.reduce((a, c) => a + c ** 2, 0)
}
// @lc code=end

console.log(isHappy(19))