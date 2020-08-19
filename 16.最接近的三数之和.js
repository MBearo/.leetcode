/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let lastResult = null
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    let m = i + 1
    let n = nums.length - 1
    while (m < n) {
      const res = element + nums[m] + nums[n]
      if (lastResult === null) {
        lastResult = res
      }
      if (Math.abs(target - res) < Math.abs(target - lastResult)) {
        lastResult = res
      }
      if (res < target) {
        m++
      } else if (res > target) {
        n--
      } else {
        break
      }
      //result=
    }
  }
  return lastResult
};
// @lc code=end
console.log(threeSumClosest([-1, 2, 1, -4], 1));
