/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
//老师版
//求最小值，默认就给最大值
//发现老师写的代码都是偏线性的，没有逻辑嵌套，妙啊
var minSubArrayLen = function (s, nums) {
  let i = 0
  let j = -1
  let result = nums.length + 1
  let sum = 0
  while (i < nums.length) {
    if (j + 1 < nums.length && sum < s) {
      sum += nums[++j]
    } else {
      sum -= nums[i++]
    }
    if (sum >= s) {
      result = Math.min(j - i + 1, result)
    }
  }
  if (result === nums.length + 1) {
    result = 0
  }
  return result
};
//第二版
var minSubArrayLen3 = function (s, nums) {
  let i = 0
  let j = 1
  let result = 0
  let sum = nums[0]
  while (i < j && j <= nums.length) {
    let length = j - i
    if (sum >= s) {
      if (length < result || result === 0) {
        result = length
      }
      sum -= nums[i]
      i++
    } else {
      sum += nums[j]
      j++
    }
  }
  return result
};
//第一版
var minSubArrayLen2 = function (s, nums) {
  let i = 0
  let j = 1
  let result = 0
  while (j <= nums.length) {
    const sum = nums.slice(i, j).reduce((a, c) => a + c)
    let length = j - i
    if (sum >= s) {
      if (length < result || result === 0) {
        result = length
      }
      i++
    } else {
      j++
    }
  }
  return result
};
// @lc code=end
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));

