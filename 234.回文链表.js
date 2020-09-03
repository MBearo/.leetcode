/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
// time n space 1
// 和下面的方法区别在翻转的时候不是交换，而是修改指向
var isPalindrome = function (head) {
  
}
// time n space 1
// 快慢指针找中点，边找边翻转前面的 写了一天，边界判断不清晰
var isPalindrome3 = function (head) {
  if (head === null || head.next === null) {
    return true
  }
  let slow = head
  let fast = head
  let dummy = new ListNode(0)
  dummy.next = head
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next
    if (fast.next !== null) {
      const next = slow.next
      slow.next = next.next
      next.next = dummy.next
      dummy.next = next
    } else {
      slow = slow.next
    }
  }
  if (fast !== null) {
    slow = slow.next
  }
  let cur = dummy.next
  while (slow) {
    if (slow.val !== cur.val) {
      return false
    } else {
      cur = cur.next
      slow = slow.next
    }
  }
  return true
}
// 塞到数组里，然后对撞指针
var isPalindrome2 = function (head) {
  const arr = []
  let cur = head
  while (cur) {
    arr.push(cur.val)
    cur = cur.next
  }
  let i = 0
  let j = arr.length - 1
  while (i < j) {
    if (arr[i] !== arr[j]) {
      return false
    }
    i++
    j--
  }
  return true
};
// @lc code=end

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}
var list = create(1)

function create(val) {
  if (val <= 2) {
    const node = new ListNode(val)
    node.next = create(val + 1)
    return node
  }
  return null
}
list.next.next = new ListNode(1)

console.log(isPalindrome(list));
