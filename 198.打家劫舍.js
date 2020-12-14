/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const length = nums.length
  if (length === 0) return 0
  const dp = []
  dp[0] = 0
  dp[1] = nums[0]
  for (let i = 2; i <=nums.length; i++) {
    dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i-1]);
  }
  return dp[length]
}
// 这么写不好优化,可以用memo优化，但是我这写了个函数式，可以改成索引
// 一顿分析，应该和爬楼梯类似
var rob2 = function (nums) {
  const step = (num) => {
    const length = num.length
    if (length === 0) {
      return 0
    } else if (length === 1) {
      return num[0]
    } else if (length === 2) {
      return Math.max(num[0], num[1])
    } else {
      return Math.max(step(num.slice(0, length - 1)), step(num.slice(0, length - 2)) + num[length - 1])
    }
  }
  return step(nums)
};
// @lc code=end
console.log(rob([114, 117, 207, 117, 235, 82, 90, 67, 143, 146, 53, 108, 200, 91, 80, 223, 58, 170, 110, 236, 81, 90, 222, 160, 165, 195, 187, 199, 114, 235, 197, 187, 69, 129, 64, 214, 228, 78, 188, 67, 205, 94, 205, 169, 241, 202, 144, 240]));
