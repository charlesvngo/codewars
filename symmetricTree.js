// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
//      1
//    /   \
//   2     2
//  / \   / \
// 3   4 4   3

// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
//      1
//    /   \
//   2     2
//    \     \
//     3     3

// Input: root = [1,2,2,null,3,null,3]
// Output: false

// Constraints:

//     The number of nodes in the tree is in the range [1, 1000].
//     -100 <= Node.val <= 100

// Follow up: Could you solve it both recursively and iteratively?

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
 * @return {boolean}
 */
const isSymmetric = (root) => {
  if (!root) {
    // Sanity check
    return true;
  }

  // Check if tree s & t are mirroring each other
  const isMirror = (s, t) => {
    if (!s && !t) {
      return true; // Both nodes are null, ok
    }
    if (!s || !t || s.val !== t.val) {
      return false; // Found a mismatch
    }
    // Compare the left subtree of `s` with the right subtree of `t`
    // and the right subtree of `s` with the left subtree of `t`
    return isMirror(s.left, t.right) && isMirror(s.right, t.left);
  };

  return isMirror(root.left, root.right);
};
