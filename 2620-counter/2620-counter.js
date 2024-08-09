/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = function(n) {
    let value = n;

    return function() {
        return n++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */