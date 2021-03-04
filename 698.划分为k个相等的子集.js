/*
 * @lc app=leetcode.cn id=698 lang=javascript
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  const N = nums.length
  nums.sort((a, b) => b - a)
  const sum = nums.reduce((a, b) => a + b, 0)
  const target = sum / k
  if (sum % k > 0 || nums[N - 1] > target) return false
  const dp = Array(1 << N).fill(false)
  dp[0] = true
  const total = Array(1 << N).fill(0)

  for (let state = 0; state < (1 << N); state++) {
    if (!dp[state]) continue
    for (let i = 0; i < N; i++) {
      let future = state | (1 << i) //这里真看不懂，神仙操作
      if (state != future && !dp[future]) {
        if (nums[i] <= target - (total[state] % target)) {
          dp[future] = true
          total[future] = total[state] + nums[i]
        } else {
          break
        }
      }
    }
  }
  return dp[(1 << N) - 1]
}
// 极其暴力，时间会不够，虽然有优化的空间
var canPartitionKSubsets2 = function (nums, k) {
  if (nums.length < k) return false
  const arr = nums
  // 把arr分成k组，有几种组合？
  // k^(arr.length)
  const result = []
  // 回溯法（backtracking）
  function go(list, i) {
    if (list.length === arr.length) {
      result.push(list.slice())
      list = []
      return
    }
    for (let j = 0; j < k; j++) {
      list.push(j)
      go(list, i++)
      list.pop()
    }
  }
  go([], 0)
  const ans = []
  for (let i = 0; i < result.length; i++) {
    let temp = {}
    for (let x = 0; x < k; x++) {
      temp[x] = []
    }
    for (let j = 0; j < result[i].length; j++) {
      temp[result[i][j]].push(arr[j])
    }
    ans.push(temp)
    temp = {}
  }
  console.log(ans);
  //[{0:[4,3],1:[3,5],2:[4],4:[5]}]
  //数组内的对象，key是组，value就是这个组里所有的数

  // 然后下面把value数组的值计算和，方便下面使用
  for (let i = 0; i < ans.length; i++) {
    const element = ans[i];
    for (const key in ans[i]) {
      const element = ans[i][key];
      ans[i][key] = element.reduce((a, b) => a + b, 0)
    }
  }

  function x() {

    for (let i = 0; i < ans.length; i++) {
      let last = true
      for (const key in ans[i]) {
        const element = ans[i][key];
        if (element !== ans[i][0]) {
          last = false
          break
        } else {
          last = true
        }
      }

      if (last) {
        console.log(ans[i]);
        return true
      }
    }
    return false
  }
  return x()
};
// @lc code=end

canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 2)