/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const array = nums.sort((a, b) => a - b)
  const result = []
  for (let i = 0; i < array.length - 2; i++) {
    const element = array[i];
    let m = i + 1
    let n = array.length - 1
    while (m < n) {
      const sum = element + array[m] + array[n]
      if (sum < 0) {
        m++
      } else if (sum > 0) {
        n--
      } else {
        result.push([element, array[m], array[n]])
        m++
        n--
      }
    }
  }
  return result
};
// @lc code=end

console.log(threeSum([-1, 0, 1, 2, -1, -4]));