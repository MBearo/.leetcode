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
// 快慢指针找中点，翻转后半部分，依次拼接
var reorderList = function (head) {
  if (head === null || head.next === null || head.next.next === null) return head
  let slow = head
  let fast = head
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  let p = slow.next

  slow.next = null
  console.log(p);
  // 把p翻转一下
  let rp = reverseList(p)
  let cur = head
  while (rp) {
    const nxt = cur.next
    const rxt = rp.next
    cur.next = rp
    rp.next = nxt
    rp = rxt
    cur = nxt
  }
  return head
};
function reverseList(head) {
  let cur = head
  let pre = null
  while (cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}
// @lc code=end
function ListNode(val, next) {
  this.val = val;
  this.next = next;
}
var list = create(1)

function create(val) {
  if (val <= 4) {
    const node = new ListNode(val)
    node.next = create(val + 1)
    return node
  }
  return null
}
//console.log(list);
console.log(JSON.stringify(reorderList(list)))