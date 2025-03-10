import inOrderTraversal from "./DFS/in-order.js";
import postOrderTraversal from "./DFS/post-order.js";
import preOrderTraversal from "./DFS/pre-order.js";
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(10);
const l1 = new Node(20);
const r1 = new Node(30);
root.left = l1;
root.right = r1;
l1.left = new Node(40);
const l1_r = new Node(50);
l1.right = l1_r;
const l1_r_l = new Node(70);
const l1_r_r = new Node(80);
l1_r.left = l1_r_l;
l1_r.right = l1_r_r;

// r1.left = new Node(60);
// l1.right = new Node(70);
r1.right = new Node(60);

// console.log(
//   root,
//   preOrderTraversal(root, []),
//   postOrderTraversal(root, []),
//   inOrderTraversal(root, [])
// );

const root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);
root1.right.left = new Node(6);
root1.right.right = new Node(7);

// 1
// / \
// 2   3
// / \  / \
// 4   5 6  7

const root2 = new Node(10);
root2.left = new Node(20);
root2.left.left = new Node(30);
root2.left.left.left = new Node(40);
root2.left.left.left.left = new Node(50);

// 10
// /
// 20
// /
// 30
// /
// 40
// /
// 50

const root3 = new Node(5);
root3.right = new Node(15);
root3.right.right = new Node(25);
root3.right.right.right = new Node(35);
root3.right.right.right.right = new Node(45);

// 5
//  \
//   15
//     \
//     25
//       \
//       35
//         \
//         45

export default Node;
export const trees = { root1, root2, root3 };
