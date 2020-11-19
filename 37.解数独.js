/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const part = {}
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      part[`${i}.${j}`] = new Set()
    }
  }
  board.forEach((list, row) => {
    list.forEach((item, col) => {
      if (item !== '.') {
        part[`${Math.floor(row / 3)}.${Math.floor(col / 3)}`].add(item)
      }
    })
  })
  const isValid = (row, col, val) => {
    if (part[`${Math.floor(row / 3)}.${Math.floor(col / 3)}`].has(val)) {
      return false
    }

    for (let i = 0; i < 9; i++) {
      if (board[row][i] === val || board[i][col] === val) {
        return false
      }
    }
    return true
  }
  const helper = (row, col) => {
    if (col == 9) {              // 列越界，填完一行，填下一行
      row++;
      col = 0;
      if (row == 9) return true; // 都填完了，返回true
    }
    if (board[row][col] !== '.') {
      return helper(row, col + 1)
    }
    for (let digit = 1; digit < 10; digit++) {
      if (isValid(row, col, String(digit))) {
        board[row][col] = String(digit)
        part[`${Math.floor(row / 3)}.${Math.floor(col / 3)}`].add(String(digit))
        if (helper(row, col + 1)) {
          return true
        } else {
          board[row][col] = '.'
          part[`${Math.floor(row / 3)}.${Math.floor(col / 3)}`].delete(String(digit))
        }
      }
    }
    return false
  }
  helper(0, 0)
  return board
};
// @lc code=end
console.log(solveSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));

