/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
    let charCount = {};
    let length = 0;
    let hasOdd = false;

    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let count of Object.values(charCount)) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1;
            hasOdd = true;
        }
    }

    if (hasOdd) length++;

    return length;
};