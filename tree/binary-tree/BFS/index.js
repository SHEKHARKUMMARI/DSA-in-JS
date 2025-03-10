import { trees } from "../index.js";

const bfsTraversal = (root, level, levelMap) => {
  if (!root) return levelMap;
  if (levelMap[level]) {
    levelMap[level].push(root.data);
  } else {
    levelMap[level] = [root.data];
  }
  bfsTraversal(root.left, level + 1, levelMap);
  bfsTraversal(root.right, level + 1, levelMap);
  return levelMap;
};

const levelOrderTraversal = (root) => {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const ele = queue.shift();
    result.push(ele.data);
    if (ele.left) queue.push(ele.left);
    if (ele.right) queue.push(ele.right);
  }
  return result;
};

// const dfsMap = bfsTraversal(trees.root1, 1, {});
// for (let i in dfsMap) {
//   console.log(...dfsMap[i]);
// }

console.log(levelOrderTraversal(trees.root1));

export const bfs = { bfsTraversal, levelOrder: levelOrderTraversal };
