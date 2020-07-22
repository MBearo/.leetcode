/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const string_to_number = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  let arr=[]
  for (const key in s) {
    if (s.hasOwnProperty(key)) {
      arr.push(s[key])    
    }
  }
  //arr=arr.reverse()
  let number=0
  arr.forEach((value,index)=>{
    if(arr.length>=index+1&&string_to_number[arr[index+1]]>string_to_number[value]){
      number-=string_to_number[value]
    }else{
      number+=string_to_number[value]
    }
  })
  return number
};

