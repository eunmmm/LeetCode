/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    const trimmedStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    return trimmedStr === trimmedStr.split("").reverse().join("");
};