/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
// https://leetcode-cn.com/problems/restore-ip-addresses/solution/shou-hua-tu-jie-huan-yuan-dfs-hui-su-de-xi-jie-by-/
var restoreIpAddresses = function (s) {
  const result = []
  const bfs = (temp, index) => {
    if (temp.length === 4 && index === s.length) {
      result.push(temp.join('.'))
      return
    }
    if (temp.length === 4 && index < s.length) return

    for (let i = 0; i < 3; i++) {
      if (index + i > s.length - 1) return
      const element = s.slice(index, index + i + 1);
      if (element.length > 1 && element.slice(0, 1) === '0') return
      if (parseInt(element) > 255) return
      temp.push(element)
      bfs(temp, index + i + 1)
      temp.pop()
    }
  }
  bfs([], 0)
  return result
};
// @lc code=end

console.log(restoreIpAddresses('25525511135'));