/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  let result = 0
  points.forEach((point, index) => {
    let hash = new Map()
    points.forEach((point2, index2) => {
      if (index !== index2) {
        const dis = distance(point, point2)
        if (hash.get(dis)) {
          hash.set(dis, hash.get(dis) + 1)
        } else {
          hash.set(dis, 1)
        }
      }
    })
    ;[...hash.values()].forEach(value => {
      result += (value * (value - 1))
    })
  })
  return result
};
function distance(pointA, pointB) {
  return (pointA[0] - pointB[0]) ** 2 + (pointA[1] - pointB[1]) ** 2
}
// @lc code=end

console.log(numberOfBoomerangs([[0, 0], [1, 0], [2, 0]]));