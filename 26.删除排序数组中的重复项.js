/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 提上说 前 几个元素修改为xxxx，可以不用改所有的
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; ) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1)
    } else {
      i++
    }
  }
  return nums.length
};

