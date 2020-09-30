/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  const arr = []
  sum(root, '')
  function sum(node, path) {
    if (node) {
      path += node.val
      if (node.left === null && node.right === null) {
        arr.push(Number(path))
      }
      sum(node.left, path)
      sum(node.right, path)
    }
  }
  return arr.reduce((acc, cur) => acc + cur, 0)
};
// @lc code=end

const root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}
console.log(sumNumbers(root));