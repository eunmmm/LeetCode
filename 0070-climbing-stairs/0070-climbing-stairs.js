/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
    if (n <= 2) return n;
    
    let result = new Array(n+1);
    result[1] = 1;
    result[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        result[i] = result[i-1] + result[i-2];
    }
    
    return result[n];
};