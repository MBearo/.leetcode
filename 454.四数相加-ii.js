/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  const map = new Map()
  A.forEach(a => {
    B.forEach(b => {
      const result = a + b
      if (map.get(result)) {
        map.set(result, map.get(result) + 1)
      } else {
        map.set(result, 1)
      }
    })
  })
  let num = 0
  C.forEach(c => {
    D.forEach(d => {
      const result = c + d
      if (map.get(0 - result)) {
        num += map.get(0 - result)
      }
    })
  })
  return num
};
// @lc code=end
console.log(fourSumCount([ 1, 2],[-2,-1],[-1, 2],[ 0, 2]));
