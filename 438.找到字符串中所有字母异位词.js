/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function (s, p) {
  const need = {}
  const window = {}

  p.split('').forEach(k => need[k] = need[k] === undefined ? 1 : ++need[k])

  let i = 0
  let j = -1
  let valid = 0
  const res = []
  while (i < s.length) {
    j++
    const right = s[j]
    const left = s[i]

    if (!window[right]) window[right] = 0

    window[right]++
    // 这里=是为了防止 window 里有多个符合条件的值
    // s=bab p=abc
    // 这样加起来 valid 就是3，可以通过
    // < 是为了 need 里有重复值，可以通过
    // s=baa p=aa
    if (window[right] <= need[right]) {
      valid++
    }

    if (j - i + 1 > p.length) {
      if (window[left] <= need[left]) {
        valid--
      }
      window[left]--
      i++
    }

    if (j - i + 1 === p.length && valid == p.length) {
      res.push(i)
    }
  }
  return res
};

// Map 太麻烦了
var findAnagrams2 = function (s, p) {
  const need = new Map(p.split('').reduce((a, c) => [...a, [c, 1]], []))
  const window = new Map()

  let i = 0
  let j = -1
  let valid = 0
  const res = []
  while (i < s.length) {
    j++
    const right = s[j]
    const left = s[i]
    window.has(right) ? window.set(right, window.get(right)) : window.set(right, 0)
    if (need.has(right)) {
      window.set(right, window.get(right) + 1)
      if (window.get(right) === need.get(right)) {
        valid++
      }
    }
    if (j - i + 1 > p.length) {
      if (need.has(left)) {
        window.set(right, window.get(left) - 1)
        valid--
      }
      i++
    }

    if (j - i + 1 === p.length && valid == p.length) {
      res.push(i)
    }
  }
  return res
};
// @lc code=end
console.log(findAnagrams("baa", "aa"));
