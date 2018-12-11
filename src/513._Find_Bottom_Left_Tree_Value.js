// 513. Find Bottom Left Tree Value
// Medium
// Given a binary tree, find the leftmost value in the last row of the tree.
//
//     Example 1:
// Input:
//
//     2
//     / \
//   1   3
//
// Output:
//     1
// Example 2:
// Input:
//
//     1
//     / \
//       2   3
// /   / \
//     4   5   6
// /
// 7
//
// Output:
//     7
// Note: You may assume the tree (i.e., the given root node) is not NULL.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let findBottomLeftValue = function(root) {
    if(root == null)
        return 0;
    let temp = [],next = [];
    temp.push(root);
    while(temp.length>0){
        next = [];i
        for(let i of temp){
            if(i.left)
                next.push(i.left);
            if(i.right)
                next.push(i.right);
        }
        if(next.length===0)
            return temp[0].val;
        temp = [].concat(next);
    }
    return 0;
};

let result = findBottomLeftValue([2,1,3]);
console.log(result);