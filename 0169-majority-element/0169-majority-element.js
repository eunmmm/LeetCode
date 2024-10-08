/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    let result = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            result = nums[i];
            count = 1;
        } else if (nums[i] === result) {
            count++;
        } else {
            count--;
        }
    }

    return result;
};