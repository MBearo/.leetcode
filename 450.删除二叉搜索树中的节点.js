/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
/**
 * 
 * 时间复杂度计算，N 为节点数，H 为数的高度
 * 如果时间复杂度是 log(N)
 * 因为是二分搜索树，所以 (2^H)-1>=N
 * 当 N>1 那么 H>=log(N+1)
 * 所以 log(N)<log(H)
 */
var deleteNode = function (root, key) {
  if (!root) return null
  if (root.val > key) root.left = deleteNode(root.left, key)
  else if (root.val < key) root.right = deleteNode(root.right, key)
  else {
    if (!root.left && !root.right) return null
    else if (!root.left && root.right) return root.right
    else if (root.left && !root.right) return root.left
    // 同时有左节点和右节点
    else {
      // 前驱节点
      let predecessor = root.left
      while (predecessor.right) {
        predecessor = predecessor.right
      }
      root.val = predecessor.val
      root.left = deleteNode(root.left, predecessor.val)
    }
  }
  return root
};
// @lc code=end

