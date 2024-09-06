/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let start = 0;
    const charIndex = {};

    for (let end = 0; end < s.length; end++) {
        if (s[end] in charIndex) {
            start = Math.max(charIndex[s[end]] + 1, start);
        }
        charIndex[s[end]] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};