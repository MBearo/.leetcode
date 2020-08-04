/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let j = numbers.length - 1
  let i = 0
  // while(true) 也可以
  while (i < j) {
    if (numbers[i] + numbers[j] === target) {
      return [i + 1, j + 1]
    } else if (numbers[i] + numbers[j] > target) {
      j--
    } else {
      i++
    }
  }
};
// @lc code=end

