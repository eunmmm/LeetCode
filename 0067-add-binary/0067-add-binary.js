/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const digitA = i >= 0 ? parseInt(a[i]) : 0;
        const digitB = j >= 0 ? parseInt(b[j]) : 0;
        const sum = digitA + digitB + carry;
        
        result = (sum % 2) + result; 
        carry = Math.floor(sum / 2);
        
        i--;
        j--;
    }

    return result; 
};