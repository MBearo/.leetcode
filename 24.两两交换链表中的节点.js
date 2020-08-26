/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummy = new ListNode(0)
  dummy.next = head
  let i = 0
  let cur = head
  let pre = dummy
  while (cur) {
    if (i % 2 === 0 && cur.next) {
      const nxt = cur.next
      cur.next = nxt.next
      nxt.next = cur
      pre.next = nxt
    }
    pre = pre.next
    cur = pre.next
    i++
  }
  return dummy.next
};
// @lc code=end

