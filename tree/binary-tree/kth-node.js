import { trees } from "./index.js";
// Problem Statement: Nodes at Kth Distance from Root
// Objective:
// Given the root of a binary tree and an integer K, find all the nodes that are exactly K levels away from the root.

// Definitions:
// The root node is at level 0.
// The children of the root are at level 1.
// The grandchildren of the root are at level 2, and so on.
// Input:
// A binary tree represented by a root node.
// An integer K (distance from the root).
// Output:
// An array containing the values of nodes at K distance from the root, ordered from left to right.
// Constraints:
// The tree contains N nodes (0 ≤ N ≤ 10⁵).
// 0 ≤ K ≤ Height of Tree

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
//
// K = 2

// Output: [4, 5, 6]

const nodeAtKthDist = (root, k, arr) => {
  if (!root) return arr;
  if (k == 0) {
    arr.push(root.data);
    return arr;
  }
  nodeAtKthDist(root.left, k - 1, arr);
  nodeAtKthDist(root.right, k - 1, arr);
  return arr;
};
console.log(nodeAtKthDist(trees.root1, 2, []));
