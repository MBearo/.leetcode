/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  return quick(nums, 0, nums.length - 1)
};
function quick(array, left, right) {
  if (left < right) {
    let obj = partition(array, left, right)
    quick(array, left, obj.lt)
    quick(array, obj.gt, right)
  }
}
function partition(array, left, right) {
  let pivot = array[left]
  let lt = left
  let gt = right + 1
  let i = left + 1
  while (i < gt) {
    if (array[i] === pivot) {
      i++
    } else if (array[i] > pivot) {
      swap(array, i, gt - 1)
      gt--
    } else {
      swap(array, i, lt + 1)
      i++
      lt++
    }
  }
  swap(array, left, lt)
  lt--
  return { lt, gt }
}
function swap(array, a, b) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}
// @lc code=end

