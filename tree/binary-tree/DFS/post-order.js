const postOrderTraversal = (root, arr) => {
  if (!root) return arr;
  postOrderTraversal(root.left, arr);
  postOrderTraversal(root.right, arr);
  arr.push(root?.data);
  return arr;
};

export default postOrderTraversal;
