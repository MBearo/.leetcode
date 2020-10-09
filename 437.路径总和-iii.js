/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  let count = 0
  dfs(root, [])
  function dfs(node, sumList) {
    sumList = [...sumList]
    if (node) {
      sumList = sumList.map(v => v += node.val)
      sumList.push(node.val)
      dfs(node.left, sumList)
      dfs(node.right, sumList)
      console.log(sumList)
      sumList.filter(v => v === sum).forEach(() => {
        count++
      })
    }
  }
  return count
};
// @lc code=end

