/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
//看了 https://leetcode-cn.com/circle/article/YGr54o/ 里的对应的这个题解，优雅的一批，理解一下
var reverseBetween = function (head, m, n) {
  const dummy = new ListNode(0)
  dummy.next = head
  let pre = dummy
  let cur = head
  while (m > 1) {
    pre = pre.next
    m--
    n--
  }
  cur = pre.next
  /**
   * 比如 m=3 n=5
   * 
   * 0 1 2 3 4 5 6 7 
   * ^   ^ ^
   * 虚  p c
   * 拟  r u
   * 节  e r
   * 点
   */
  while (n > 1) {
    const nxt = cur.next
    /**
     * 
     * 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
     *           ^    ^    ^
     *           p    c    n
     *           r    u    x
     *           e    r    t
     */
    cur.next = nxt.next
    /**
     *                 _________
     *                |         |
     *                |         ⅴ
     * 0 -> 1 -> 2 -> 3    4 -> 5 -> 6 -> 7
     *           ^    ^    ^
     *           p    c    n
     *           r    u    x
     *           e    r    t
     */
    nxt.next = pre.next
    /**
     *                 _________
     *                |         |
     *                |         ⅴ
     * 0 -> 1 -> 2    3 <- 4 -> 5 -> 6 -> 7
     *           ^    ^    ^
     *           p    c    n
     *           r    u    x
     *           e    r    t
     */
    pre.next = nxt
    /**
     * 
     * 0 -> 1 -> 2 -> 4 -> 3 -> 5 -> 6 -> 7
     *           ^    ^    ^
     *           p    n    c
     *           r    x    u
     *           e    t    r    
     */
    n--
    //console.log(JSON.stringify(dummy.next));
  }
  return dummy.next
}
// 这种写法对边界判断不优雅，比如 m=1 的情况
var reverseBetween2 = function (head, m, n) {
  if (m === n) return head
  let i = 1
  let cur = head
  let prev = null
  let tail = null
  let con = null
  while (cur) {
    const next = cur.next
    if (i === m) {
      tail = prev
      con = cur
    }
    if (i >= m && i <= n) {
      cur.next = prev
      console.log(cur, next);
    }
    if (i === n) {
      con.next = next
      if (m !== 1) {
        tail.next = cur
      } else {
        return cur
      }
      break
    }
    prev = cur
    cur = next
    i++
  }
  return head
};
// @lc code=end

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var list = create(1)

function create(val) {
  if (val <= 6) {
    const node = new ListNode(val)
    node.next = create(val + 1)
    return node
  }
  return null
}
//console.log(JSON.stringify(list));
console.log(JSON.stringify(reverseBetween(list, 3, 5)));