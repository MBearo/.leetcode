/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  if (root === null) return true
  return check(root.left, root.right)
};
function check(left, right) {
  if (left === null && right === null) {
    return true
  }
  if (left === null || right === null) {
    return false
  }
  if (left.val !== right.val) {
    return false
  }
  return check(left.left, right.right) && check(left.right, right.left)
}
// @lc code=end

