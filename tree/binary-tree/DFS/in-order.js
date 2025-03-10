const inOrderTraversal = (root, arr) => {
  if (!root) return arr;
  inOrderTraversal(root.left, arr);
  arr.push(root?.data);
  inOrderTraversal(root.right, arr);
  return arr;
};

export default inOrderTraversal;
