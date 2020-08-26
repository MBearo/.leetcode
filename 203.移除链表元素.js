/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let dummy = new ListNode(0)
  dummy.next = head
  let cur = head
  let pre = dummy
  while (cur) {
    if (cur.val === val) {
      pre.next = cur.next
    } else {
      pre = cur
    }
    cur = cur.next
  }
  return dummy.next
};
// @lc code=end

