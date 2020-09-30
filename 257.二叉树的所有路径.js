/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let arr = []
  check(root, [])
  function check(node, path) {
    if (node) {
      if (node.left === null && node.right === null) {
        path.push(node.val)
        arr.push(path.join('->'))
      } else {
        path.push(node.val)
        // 因为引用，所以拷贝一份，或者直接用字符串
        // 这里的思路挺好的，不用公用的，用自己的
        check(node.left, [...path])
        check(node.right, [...path])
      }
    }
  }
  return arr
};

// @lc code=end
const root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}
// console.log(binaryTreePaths(root))