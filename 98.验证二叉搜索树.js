/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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

// 根节点为空，也算BST
// 左子节点的最小值，必须大于该左子节点的父节点的父节点的值
// 下图的 6 就不符合定义，所以不是一个二叉搜索树
/**
 * 
 *     10
 *    /  \
 *   5   15
 *      /  \
 *     6   20
 */
// 中序递归
var isValidBST2 = function (root) {
  let pre = null
  function isBST(node) {
    if (node === null) return true
    if (!isBST(node.left)) {
      return false
    }
    // 中序遍历，那么前一个节点一定小于后一个节点
    if (pre && node.val <= pre.val) {
      return false
    }
    pre = node
    if (!isBST(node.right)) {
      return false
    }
    return true
  }
  return isBST(root)
};
// 根据二叉树定义递归
var isValidBST = function (root) {
  function isBST(node, min, max) {
    if (node === null) return true
    if (node.val <= min || node.val >= max) {
      return false
    }
    return isBST(node.left, min, node.val) && isBST(node.right, node.val, max)
  }
  return isBST(root, -Infinity, Infinity)
}
// @lc code=end

const node = {
  val: 10,
  left: {
    val: 5,
    left: null,
    right: null
  },
  right: {
    val: 15,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 20,
      left: null,
      right: null
    }
  }
}