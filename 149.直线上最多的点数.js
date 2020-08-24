/*
 * @lc app=leetcode.cn id=149 lang=javascript
 *
 * [149] 直线上最多的点数
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  if (points.length === 1) return 1
  let result = 0
  for (let i = 0; i < points.length; i++) {
    const hash = new Map()
    let samePoints = 0
    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        const pointA = points[i];
        const pointB = points[j];
        //const tiltRate = (pointA[1] - pointB[1]) / (pointA[0] - pointB[0])
        if (pointA[1] === pointB[1] && pointA[0] === pointB[0]) {
          samePoints++
        } else {
          const x = pointA[0] - pointB[0]
          const y = pointA[1] - pointB[1]
          const gcdNumber = gcd(x, y)
          const tiltRate = y / gcdNumber + '$' + x / gcdNumber
          if (hash.get(tiltRate)) {
            hash.set(tiltRate, hash.get(tiltRate) + 1)
          } else {
            hash.set(tiltRate, 1)
          }
        }
      }
    }
    // console.log(i, hash);
    const maxValue = (hash.size ? Math.max(...hash.values()) : 0) + 1 + samePoints
    // console.log(maxValue);
    if (result < maxValue) {
      result = maxValue
    }
  }
  return result
};
function gcd(a, b) {
  if (b === 0) {
    return a
  }
  if (a % b === 0) {
    return b
  }
  return gcd(b, a % b)
}
// @lc code=end

console.log(maxPoints([[0, 0], [0, 0]]));