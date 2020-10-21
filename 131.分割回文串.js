/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
//不能打乱顺序，aab也是子串，因为不是回文所以不符合规则
var partition = function (s) {
  const result = []
  const backtracking = (arr, string) => {
    if (string === '') {
      result.push(arr)
      return
    }
    for (let i = 0; i < string.length; i++) {
      const element = string.slice(0, i + 1);
      if (!isPalindrome(element)) continue //这里得剪一下枝，不然"seeslaveidemonstrateyetartsnomedievalsees"超时
      arr.push(element)
      backtracking([...arr], string.slice(i + 1))
      arr.pop()
    }
  }
  backtracking([], s)
  return result
};
function isPalindrome(string) {
  let i = 0
  let j = string.length - 1
  while (i < j) {
    if (string[i] !== string[j]) return false
    i++
    j--
  }
  return true
}
// @lc code=end

console.log(partition("seeslaveidemonstrateyetartsnomedievalsees"))