/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let is_negative = false
  if (x < 0) {
    is_negative = true
  }
  let arr = x.toString().split('')
  let new_arr = []
  if (is_negative) {
    for (let i = arr.length - 1; i > 0; i--) {
      new_arr.push(arr[i])
    }
    new_arr.unshift('-')
  } else {
    for (let i = arr.length - 1; i >= 0; i--) {
      new_arr.push(arr[i])
    }
  }
  let new_num = parseInt(new_arr.join(''))
  if (new_num > -2147483648 && new_num < 2147483647) {
    return new_num
  } else {

    return 0
  }

};

