/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    let direction = 0
    const length = matrix.length * matrix[0].length
    let result = []
    let x = 0
    let y = 0
    for (let i = 0; i < length; i++) {
        result.push(matrix[y][x])
        matrix[y][x] = null
        const x1 = x + directions[direction][0]
        const y1 = y + directions[direction][1]
        console.log(y1, x1, direction);
        if (y1 < 0 || x1 < 0 || y1 >= matrix.length || x1 >= matrix[0].length || (!matrix[y1][x1])) {
            direction = (direction + 1) % 4
        }
        x += directions[direction][0]
        y += directions[direction][1]
    }
    return result
};
// @lc code=end
console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
