/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 题上说 前 几个元素修改为xxxx，可以不用改所有的
var removeDuplicates = function (nums) {
  // for (let i = 0; i < nums.length; ) {
  //   if (nums[i] === nums[i + 1]) {
  //     nums.splice(i, 1)
  //   } else {
  //     i++
  //   }
  // }
  //return nums.length

  // 快慢指针
  let slowP = 0
  let fastP = 0
  while (fastP < nums.length) {
    if (nums[fastP] === nums[slowP]) {
      fastP++
    } else {
      slowP++
      if (fastP !== slowP) {
        nums[slowP] = nums[fastP]
      }
      fastP++
    }
  }
  return slowP + 1
};

