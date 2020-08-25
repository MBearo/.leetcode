/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
  let cur = head
  let pre = null
  while (cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
};
// @lc code=end

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var list = create(0)

function create(val) {
  if (val <= 5) {
    const node = new ListNode(val)
    node.next = create(val + 1)
    return node
  }
  return null
}
//console.log(JSON.stringify(list));
console.log(reverseList(list));