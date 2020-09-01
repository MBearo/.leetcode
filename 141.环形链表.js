/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null || head.next === null) {
    return false
  }
  let slow = head
  let fast = head.next
  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false
    }
    slow = slow.next
    fast = fast.next.next
  }
  return true
}
var hasCycle2 = function (head) {
  if (head === null || head.next === null || head.next.next === null) {
    return false
  }
  let slow = head
  let fast = head

  while (slow) {
    slow = slow.next
    if (fast.next === null || fast.next.next === null) {
      return false
    }
    fast = fast.next.next
    if (slow === fast) {
      return true
    }
  }
  return false
};
// @lc code=end

