/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = []
  nums = nums.sort((a, b) => a - b)
  const backtrack = (arr, visited) => {
    if (arr.length === nums.length) {
      result.push([...arr])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;//这一行是为了防止某个位置上的数出现多次
      if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue // 上一次已经用过了
      arr.push(nums[i])
      visited[i] = true
      backtrack(arr, visited)
      visited[i] = false
      arr.pop()
    }
  }
  backtrack([], [])
  return result
};
// @lc code=end

console.log(permuteUnique([1, 1, 3]))