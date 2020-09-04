/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
// 迭代
var preorderTraversal = function (root) {
  const result = []
  const stack = []
  stack.push(root)
  while (stack.length > 0) {
    const node = stack.pop()
    if (node) {
      result.push(node.val)
      // 先序遍历 中 左 右，因为栈需要先进后出，所以右边要先进
      if (node.right) {
        stack.push(node.right)
      }
      if (node.left) {
        stack.push(node.left)
      }
    }
  }
  return result
};
// 递归
var preorderTraversal2 = function (root) {
  const result = []
  const preorderTraverseNode = node => {
    if (node) {
      result.push(node.val)
      preorderTraverseNode(node.left)
      preorderTraverseNode(node.right)
    }
  }
  preorderTraverseNode(root)
  return result
};
// @lc code=end

