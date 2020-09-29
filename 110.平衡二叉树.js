/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
// 没弄明白
var isBalanced = function (root) {
  if (root === null) {
    return true
  } else {
    return Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
  }
};
function height(node) {
  if (node === null) {
    return 0
  } else {
    return Math.max(height(node.left), height(node.right)) + 1
  }
}
// @lc code=end

