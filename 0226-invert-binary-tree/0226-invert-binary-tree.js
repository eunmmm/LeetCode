/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
    const recursionNode = function(node) {
        if (node === null) return null;

        const left = recursionNode(node.left);
        const right = recursionNode(node.right);

        node.left = right;
        node.right = left;

        return node;
    }
    return recursionNode(root);
};