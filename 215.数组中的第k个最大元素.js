/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return quick(nums, 0, nums.length - 1, k)
};
function quick(nums, left, right, k) {
  // [1] 1 这个case需要 =
  if (left <= right) {
    const value = partition(nums, left, right)
    if (nums.length - value === k) {
      return nums[value]
    } else if (nums.length - value > k) {
      return quick(nums, value + 1, right, k)
    } else {
      return quick(nums, left, value - 1, k)
    }
  }
}
// 指针都从左开始
function partition2(nums, left, right) {
  let pivot = nums[left];
  let i = left;
  for (let j = left + 1; j <= right; j++) {
    if (nums[j] < pivot) {
      // 小于 pivot 的元素都被交换到前面
      i++;
      swap(nums, i, j);
    }
  }
  // 在之前遍历的过程中，满足 [left + 1, i] < pivot，并且 (i, j] >= pivot
  swap(nums, i, left);
  // 交换以后 [left, i - 1] < pivot, nums[i] = pivot, [i + 1, right] >= pivot
  return i;
}
// 指针从左右两侧开始
function partition(nums, left, right) {
  const pivot = nums[left]
  let i = left + 1
  let j = right
  while (i <= j) {
    while (nums[i] < pivot) {
      i++
    }
    while (nums[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(nums, i, j)
      i++
      j--
    }
  }
  swap(nums, j, left)
  return j
}
function swap(array, a, b) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}
// @lc code=end

