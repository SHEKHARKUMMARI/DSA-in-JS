// Problem Statement: Height of a Binary Tree
// Objective:
// Given the root of a binary tree, determine its height. The height of a binary tree is the number of edges on the longest path from the root node to a leaf node. If the tree is empty, its height is considered -1 (or 0, depending on the convention).

import { trees } from "./index.js";

// Input:
// A binary tree represented as a root node.
// Output:
// An integer representing the height of the binary tree.
// Constraints:
// The tree contains N nodes (0 ≤ N ≤ 10⁵).
// Node values are integers.
// Example 1:
// Input:

// markdown
// Copy
// Edit
//         1
//        / \
//       2   3
//      / \   \
//     4   5   6
// Output: 2
// Explanation: The longest path is 1 → 2 → 4 or 1 → 2 → 5 or 1 → 3 → 6, each with 2 edges.

// Example 2:
// Input:

// markdown
// Copy
// Edit
//       10
//      /
//     20
//    /
//   30
// Output: 2
// Explanation: The longest path is 10 → 20 → 30, which has 2 edges.

const longestHeight = (root) => {
  if (!root) return 0;
  return 1 + Math.max(longestHeight(root.left), longestHeight(root.right));
};
console.log(
  longestHeight(trees.root1),
  longestHeight(trees.root2),
  longestHeight(trees.root3),
  longestHeight(null)
);

export default longestHeight;
