/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const heap = []
  const operator = {
    '+': (b, a) => a + b,
    '-': (b, a) => a - b,
    '*': (b, a) => a * b,
    '/': (b, a) => a / b
  }
  tokens.forEach(token => {
    if (token in operator) {
      heap.push(parseInt(operator[token](heap.pop(), heap.pop())))
    } else {
      heap.push(Number(token))
    }
  })
  return heap.pop()
};
// @lc code=end