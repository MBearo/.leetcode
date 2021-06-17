/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let a=0
    let b=0
    for (let i = 0; i < s.length; i++) {
        a += s[i].charCodeAt();
    }
    for (let i = 0; i < t.length; i++) {
        b += t[i].charCodeAt();
    }
    return String.fromCharCode(b-a)
};
// @lc code=end

