/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
// 暴力一下
var rob = function (root) {
  if (root === null) {
    return 0
  }
  let val = root.val
  if (root.left) {
    val += rob(root.left.left) + rob(root.left.right)
  }
  if (root.right) {
    val += rob(root.right.left) + rob(root.right.right)
  }
  const val2 = rob(root.left) + rob(root.right)
  return Math.max(val, val2)
};
// @lc code=end

