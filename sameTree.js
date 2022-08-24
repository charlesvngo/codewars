// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:
//   1      1
//  / \    / \
// 2   3  2   3

// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:
//   1      1
//  /        \
// 2          2

// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:
//   1      1
//  / \    / \
// 2   1  1   2

// Input: p = [1,2,1], q = [1,1,2]
// Output: false

// Constraints:

//     The number of nodes in both trees is in the range [0, 100].
//     -104 <= Node.val <= 104

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  const queue = [p, q];
  while (queue.length > 0) {
    const first = queue.shift();
    const second = queue.shift();

    if (!first && !second) continue;
    if (!first || !second || first.val !== second.val) return false;

    queue.push(first.left);
    queue.push(second.left);
    queue.push(first.right);
    queue.push(second.right);
  }

  return true;
};
