const preOrderTraversal = (root, arr) => {
  if (!root) return arr;
  arr.push(root?.data);
  preOrderTraversal(root.left, arr);
  preOrderTraversal(root.right, arr);
  return arr;
};

export default preOrderTraversal;
