/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  const result = []
  for (let i = 0; i <= num; i++) {
    result.push(count(i))
  }
  function count(num) {
    if (num === 0) {
      return 0
    } else if (num % 2 === 1) {
      return result[num - 1] + 1
    } else {
      return result[num / 2]
    }
  }
  return result
}
var countBits2 = function (num) {
  const result = []
  for (let i = 0; i <= num; i++) {
    result.push(count(i))
  }
  // 官方这里的这个算法很妙，但是没看懂
  // const countOnes = (x) => {
  //   let ones = 0;
  //   while (x > 0) {
  //     x &= (x - 1);
  //     ones++;
  //   }
  //   return ones;
  // }

  // 抄的评论里的，比较好理解
  //如果 ii 是偶数，那么它的二进制 1 的位数与 i / 2i/2 的二进制 1 的位数相等；因为偶数的二进制末尾是 0，右移一位等于 i / 2i/2，而二进制中 1 的个数没有变化。
  //如果 ii 是奇数，那么它的二进制 1 的位数 = i - 1 的二进制位数 + 1i−1的二进制位数+1；因为奇数的二进制末尾是 1，如果把末尾的 1 去掉就等于 i - 1。又 i - 1 是偶数，所以奇数 ii 的二进制 1 的个数等于 i/2i/2 中二进制 1 的位数 +1.
  function count(num) {
    if (num === 0) {
      return 0
    } else if (num % 2 === 1) {
      return count(num - 1) + 1
    } else {
      return count(num / 2)
    }
  }
  return result
};
// @lc code=end

