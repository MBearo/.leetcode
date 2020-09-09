/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/bfs-de-shi-yong-chang-jing-zong-jie-ceng-xu-bian-l/
/**
 *      1
 *     / \
 *    2   3
 *   /\    \
 *  4  5    6
 *     /   / \
 *    7   8   9
 */
/**
 * 
 * [1]
 * [2,3]
 * [3,4,5]
 * ...
 */
// 出现上文的情况，就是在 queue 里同时出现的并不一定是同一层的节点
// 2 出队时，他的子节点 4，5 也入队了
// 所以搞一个 for，帮助区分同一层
var levelOrder = function (root) {
  if (!root) return []
  let queue = []
  let result = []
  queue.push(root)
  while (queue.length !== 0) {
    const arr = []
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      arr.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    result.push(arr)
  }
  return result
};
// @lc code=end

// 最简单的层序遍历 BFS
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
function order(root) {
  let queue = []
  let result = []
  queue.push(root)
  while (queue.length !== 0) {
    const node = queue.shift()
    result.push(node.val)
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
  return result
}
//console.log(order(test));
