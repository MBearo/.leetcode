/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 环可以分成两部分,一种不包含第一项，另一种不包含最后一项。
// 我一开始的思路是把第一项复制一个虚的放到最后一项，不太对
var rob = function (nums) {
  const length = nums.length
  if (length === 0) return 0
  if (length === 1) return nums[0]
  const step = (start, end) => {
    const num = nums.slice(start, end)
    const dp = []
    dp[0] = 0
    dp[1] = num[0]
    for (let i = 2; i <= num.length; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + num[i - 1]);
    }
    return dp[dp.length - 1]
  }
  return Math.max(step(1, length), step(0, length - 1))
};
// @lc code=end
console.log(rob([1, 2, 3, 1]));
