/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let copy = null
  let current = head
  while (current) {
    const node = new ListNode(current.val, copy)
    copy = node
    current = current.next
  }
  let cur = head
  let cur2 = copy
  while (true) {
    console.log(cur, cur2);
    if (cur && cur2) {
      if (cur.val === cur2.val) {
        cur.next = null
        break
      } else if (cur.val === cur2.next.val) {
        cur.next.next = null
        break
      }
      const nxt = cur2.next
      cur2.next = cur.next
      cur.next = cur2
      cur = cur.next.next
      cur2 = nxt
    } else {
      break
    }
  }
  return head
};
// @lc code=end
function ListNode(val, next) {
  this.val = val;
  this.next = next;
}
var list = create(1)

function create(val) {
  if (val <= 5) {
    const node = new ListNode(val)
    node.next = create(val + 1)
    return node
  }
  return null
}
//console.log(list);
//console.log(JSON.stringify(reorderList(list)))