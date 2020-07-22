/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let end=s.length-1
  for (; end >= 0; end--) {
    if(s[end]!==' '){
      break
    }
  }
  let start=end
  for (; start >= 0; start--) {
    if(s[start]===' '){
      break
    }
  }
  return end - start
};
// @lc code=end

