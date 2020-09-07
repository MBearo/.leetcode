/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
// 前序遍历有个对应的迭代
// var preorderTraversal = function(root) {
//   let res = [];
//   if(!root){
//       return res;
//   }
//   let stack = [];
//   let curr = root
//   while(curr != null || stack.length > 0){
//       if(curr){
//           res.push(curr.val);
//           stack.push(curr);
//           curr = curr.left;
//       }else{
//           let node = stack.pop();
//           curr = node.right;
//       }
//   }
//   return res;
// };
var inorderTraversal = function (root) {
  const result = []
  const stack = []
  let cur = root
  while (cur !== null || stack.length > 0) {
    if (cur) {
      stack.push(cur)
      cur = cur.left
    } else {
      const node = stack.pop()
      result.push(node.val)
      cur = node.right
    }
  }
  return result
}
var inorderTraversal2 = function (root) {
  const result = []
  const preorderTraverseNode = node => {
    if (node) {
      preorderTraverseNode(node.left)
      result.push(node.val)
      preorderTraverseNode(node.right)
    }
  }
  preorderTraverseNode(root)
  return result
};
// @lc code=end

