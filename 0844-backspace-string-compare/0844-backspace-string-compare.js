/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function(s, t) {
     function processString(str) {
        let result = '';
        let skipCount = 0;
        
        for (let i = str.length - 1; i >= 0; i--) {
            if (str[i] === '#') {
                skipCount++;
            } else if (skipCount > 0) {
                skipCount--;
            } else {
                result = str[i] + result;
            }
        }
        
        return result;
    }
    
    return processString(s) === processString(t);
};