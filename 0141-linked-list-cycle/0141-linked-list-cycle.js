/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    let specialValue = 'visited';
    let current = head;
    
    while (current !== null) {
        if (current.val === specialValue) {
            return true;
        }
        
        current.val = specialValue; 
        current = current.next;
    }
    
    return false;
};