/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    function help(preorder, inorder) {
        if (preorder.length === 1) {
            return new TreeNode(preorder[0])
        }
        if (preorder.length === 0) {
            return null
        }
        const head = preorder.slice(0, 1)[0]
        const index = inorder.indexOf(head)
        const leftPreorder = preorder.slice(1, index + 1)
        const leftInorder = inorder.slice(0, index)
        const rightPreorder = preorder.slice(index + 1)
        const rightInorder = inorder.slice(index + 1)
        const root = new TreeNode(head, help(leftPreorder, leftInorder), help(rightPreorder, rightInorder))
        return root
    }
    return help(preorder, inorder)
};
// @lc code=end

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
console.log(buildTree([1, 2], [2, 1]));
