/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  const arr = []
  find(root, sum, [])
  function find(node, sum, path) {
    if (!node) return false
    if (node.left === null && node.right === null) {
      if (node.val === sum) {
        path.push(node.val)
        arr.push(path)
      }
    } else {
      path.push(node.val)
    }
    if (find(node.left, sum - node.val, [...path])) {
      return true
    }
    if (find(node.right, sum - node.val, [...path])) {
      return true
    }
    return false
  }
  return arr
};
// @lc code=end

const root = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7,
        left: null,
        right: null
      },
      right: {
        val: 2,
        left: null,
        right: null
      }
    },
    right: null
  },
  right: {
    val: 8,
    left: {
      val: 13,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: {
        val: 5,
        left: null,
        right: null
      },
      right: {
        val: 1,
        left: null,
        right: null
      }
    }
  }
}
console.log(pathSum(root, 22));