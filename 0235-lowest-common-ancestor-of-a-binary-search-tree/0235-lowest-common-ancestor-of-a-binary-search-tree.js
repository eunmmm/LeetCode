/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
    let currentValue = root.val;
    
    if (p.val < currentValue && q.val < currentValue) {
        return lowestCommonAncestor(root.left, p, q);
    }
    
    if (p.val > currentValue && q.val > currentValue) {
        return lowestCommonAncestor(root.right, p, q);
    }
    
    return root;
};