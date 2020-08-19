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
// 这三个去重是抄的
// 我悟了，忘记是已经排序后的数据了
var threeSum = function (nums) {
  if (nums.length < 3) return [];
  // sort是会改变原数组的，所以这么写，脱裤子放屁
  const array = nums.sort((a, b) => a - b)
  const result = []
  for (let i = 0; i < array.length - 2; i++) {
    const element = array[i];
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重
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
        while (m < n && nums[m] === nums[m + 1]) m++; // 去重
        while (m < n && nums[n] === nums[n - 1]) n--; // 去重
        m++
        n--
      }
    }
  }
  return result
};
// @lc code=end

console.log(threeSum([-1, 0, 1, 2, -1, -4]));