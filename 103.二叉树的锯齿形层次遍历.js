/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return []
  const queue = []
  const result = []
  queue.push(root)
  let isOdd = false
  while (queue.length) {
    const length = queue.length
    const arr = []
    for (let i = 0; i < length; i++) {
      // 也可以在这里判断，如果是偶数层就 pop
      const node = queue.shift()
      arr.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    if (isOdd) {
      arr.reverse()
    }
    isOdd = !isOdd
    result.push(arr)
  }
  return result
};
// @lc code=end

var test = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4
    },
    right: {
      val: 5,
      left: {
        val: 7
      }
    }
  },
  right: {
    val: 3,
    right: {
      val: 6,
      left: {
        val: 8
      },
      right: {
        val: 9
      }
    }
  }
}
// console.log(zigzagLevelOrder(test));