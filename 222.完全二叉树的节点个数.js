/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
// 有更高级的解法
var countNodes = function (root) {
  if(!root) return 0
  let num = 0
  check(root)

  function check(node) {
    if (node) {
      num++
      check(node.left)
      check(node.right)
    }
  }
  return num
};

// @lc code=end

