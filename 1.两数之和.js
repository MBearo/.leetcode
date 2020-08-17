/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (map.has(target - element)) {
      return [i, map.get(target - element)]
    } else {
      map.set(element, i)
    }
  }
}
var twoSum2 = function (nums, target) {
  let arr = []
  nums.forEach((value, index) => {
    for (let i = index + 1; i < nums.length; i++) {
      if (arr.length !== 0) {
        break
      }
      if (value + nums[i] === target) {
        arr.push(index, i)
        break
      }
    }
  })
  return arr
};

console.log(twoSum([2, 7, 11, 15], 9));