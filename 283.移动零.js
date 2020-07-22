/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 双指针
var moveZeroes = function (nums) {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    // if (nums[i] ) {
    //   if( i !== k){
    //     const k2=k++
    //     [nums[i], nums[k2]] = [nums[k2], nums[i]];
    //   }else{
    //     k++
    //   }
    // }
    if (nums[k] !== 0) {
      k++
    }
    if (k < i) {
      [nums[i], nums[k]] = [nums[k], nums[i]];
    }
  }
  return nums
};
// @lc code=end