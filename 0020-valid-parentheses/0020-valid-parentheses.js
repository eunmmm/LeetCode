/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        switch (true) {
            case (s[i] === '{') :
                stack.push('}');
                break;
            case (s[i] === '[') :
                stack.push(']');
                break;
            case (s[i] === '(') :
                stack.push(')');
                break;
            case (stack.pop() !== s[i]) :
                return false;
        }
    }
    
    return !stack.length;
};