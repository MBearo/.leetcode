/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    s=s.split('')
    const vowels = new Set(['a', 'e', 'i', 'o','u'])
    const isVowel = (char) => {
        return vowels.has(char.toLowerCase())
    }
    let i = 0
    let j = s.length - 1
    while (i < j) {
        if (!isVowel(s[i])) {
            i++
            continue
        }
        if (!isVowel(s[j])) {
            j--
            continue
        }
        swap(s, i, j)
        i++
        j--
        // if(!(s[i]&&s[j])){
        //     break
        // }
    }
    return s.join('')
};
function swap(array, a, b) {
    /* const temp = array[a];
    array[a] = array[b];
    array[b] = temp; */
    [array[a], array[b]] = [array[b], array[a]];
  }
// @lc code=end