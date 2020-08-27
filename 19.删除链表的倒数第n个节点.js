/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0)
  dummy.next = head
  let i = 0
  let j = 0
  let p = dummy
  let q = dummy
  while (q) {
    q = q.next
    if (j - i === n + 1) {
      p = p.next
      i++
    }
    j++
  }
  if (!q) {
    p.next = p.next.next
  }
  return dummy.next
};
// @lc code=end

