/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let arr=[]
  nums.forEach((value,index)=>{
    for (let i = index+1; i < nums.length; i++) {
      if(arr.length!==0){
        break
      }
      if(value+nums[i]===target){
        arr.push(index,i)
        break
      }
    }
  })
  return arr
};

