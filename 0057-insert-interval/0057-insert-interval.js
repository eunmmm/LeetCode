/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function(intervals, newInterval) {
    let result = [];
  
    let [newStart, newEnd] = newInterval;
  
    for (let i = 0; i < intervals.length; i++) {
        let [start, end] = intervals[i];
        
        if (end < newStart) {
            result.push([start, end]);
        } else if (start > newEnd) {
            result.push([newStart, newEnd]);
            return result.concat(intervals.slice(i));
        } else {
            newStart = Math.min(start, newStart);
            newEnd = Math.max(end, newEnd);
        }
    }
    
    result.push([newStart, newEnd]);
    
    return result;
};