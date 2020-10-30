/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = []
  const backtrack = (arr, target, idx) => {
    if (target === 0) {
      result.push([...arr])
      return
    }
    for (let i = idx; i < candidates.length; i++) {
      const element = candidates[i];
      if (target < element) {
        continue
      }
      arr.push(element)
      backtrack(arr, target - element, i)
      arr.pop()
    }
  }
  backtrack([], target, 0)
  return result
};
// @lc code=end
/**
 * 第一版写出来的包含重复的组合；
 * 看了下其他人的解法，在“循环”的条件里，往后移动一个下标就可以了。
 * 我的理解是，如果原来的candidates有N个数，第一次循环时，以第一个数开头递归寻找组合；
 * 第二次循环，以第二个数开头，但是在每次递归中，都是循环所有的candidates，所以导致了重复；
 * 往后移动，就意味着，每次一大的循环的candidates都递减；因为之前已经找过了。
 */
console.log(combinationSum([2,3,5], 8))