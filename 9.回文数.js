/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
// 判断倒转过来的字符串是否相等就行
var isPalindrome = function (x) {
  let s = "" + x
  let arr=[]
  for (const key in s) {
    if (s.hasOwnProperty(key)) {
     arr.push(s[key])      
    }
  }
  let newX =arr.reverse().reduce((a,c)=>''+a+c)
  if(parseInt(newX)===x){
    return true
  }else{
    return false
  }
};

