/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (const price of prices) {
        const profit = price - minPrice;
        
        maxProfit = Math.max(maxProfit, profit);
        minPrice = Math.min(minPrice, price);
    }

    return maxProfit;
};