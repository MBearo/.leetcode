/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (head === null) return head
  if (head.next === null) return head
  let cur = head
  let length = 1
  while (cur.next) {
    cur = cur.next
    length++
  }
  cur.next = head
  let index = length - k % length
  let j = 0
  let result = null
  while (cur) {
    if (j === index) {
      result = cur.next
      cur.next = null
      break
    }
    cur = cur.next
    j++
  }
  return result
};
// @lc code=end

