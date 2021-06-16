/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let res = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i]
    let resInterval = res[res.length - 1];
    if (interval[0] <= resInterval[1]) {
      resInterval[1] = Math.max(resInterval[1], interval[1]);
    } else if (interval[0] > resInterval[1]) {
      res.push(interval)
    }
  }
  return res
};
// @lc code=end

