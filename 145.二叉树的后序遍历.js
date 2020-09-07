/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */

// 前序遍历顺序为：根 -> 左 -> 右

// 后序遍历顺序为：左 -> 右 -> 根

// 如果1： 我们将前序遍历中节点插入结果链表尾部的逻辑，修改为将节点插入结果链表的头部

// 那么结果链表就变为了：右 -> 左 -> 根

// 如果2： 我们将遍历的顺序由从左到右修改为从右到左，配合如果1

// 那么结果链表就变为了：左 -> 右 -> 根

// 这刚好是后序遍历的顺序

var postorderTraversal = function (root) {
  const result = []
  const stack = []
  let cur = root
  while (cur !== null || stack.length > 0) {
    if (cur) {
      result.unshift(node.val)
      stack.push(cur)
      cur = cur.right
    } else {
      const node = stack.pop()
      cur = node.left
    }
  }
  return result
}
var postorderTraversal2 = function (root) {
  const result = []
  const postorderTraversal = node => {
    if (node) {
      postorderTraversal(node.left)
      postorderTraversal(node.right)
      result.push(node.val)
    }
  }
  postorderTraversal(root)
  return result
};
// @lc code=end

