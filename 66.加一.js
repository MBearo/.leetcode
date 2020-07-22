/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length-1; i >=0; i--) {
      digits[i]++
      //如果末位不是0那就说明已经结束了
      if(digits[i]!==10){
        return digits
      }else{
        digits[i]=0
      }
    }
    return [1].concat(Array(digits.length).fill(0))
};
// @lc code=end

