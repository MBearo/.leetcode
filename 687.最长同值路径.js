/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
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
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  console.log(JSON.stringify(root));
  let ans = 0
  const go = (node) => {
    if (!node) return 0
    const leftLength = go(node.left)
    const rightLength = go(node.right)
    if (node.left && node.right && node.left.val === node.val && node.right.val === node.val) {
      ans = Math.max(ans, 2 + leftLength + rightLength)
    }
    let rootLength = 0
    if (node.left && node.left.val === node.val) {
      rootLength = 1 + leftLength
    }
    if (node.right && node.right.val === node.val) {
      rootLength = Math.max(rootLength, 1 + rightLength)
    }
    ans = Math.max(rootLength, ans)
    return rootLength //每次返回的都是以根节点开始的路径
  }
  go(root)
  return ans
};
// @lc code=end
var root = {"val":1,"left":{"val":4,"left":{"val":4,"left":null,"right":null},"right":{"val":4,"left":null,"right":null}},"right":{"val":5,"left":{"val":5,"left":null,"right":null},"right":null}}
console.log(longestUnivaluePath(root));
