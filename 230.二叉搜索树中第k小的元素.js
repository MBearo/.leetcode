/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let n = 0
  let result = 0
  search(root)
  function search(node) {
    if (!node) return null
    if (node.left) {
      search(node.left)
    }
    n++
    if (n === k) {
      result = node.val
      // 这一行牛逼了
      // https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/solution/er-cha-sou-suo-shu-zhong-di-kxiao-de-yuan-su-by-le/230184
    } else if (n > k) {
      return;//剪枝
    }
    if (node.right) {
      search(node.right)
    }
  }
  return result
};

// @lc code=end

