/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    let result = null;
  
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            result = i;
        }
    }
  
    return result === null ? -1 : result;
};