import { createBinaryTree } from "../utils/create-binary-tree";
import { TreeNode } from "../utils/create-binary-tree";

function isBalanced(root: TreeNode | null): boolean {
  return postOrder(root) !== -1;
}

function postOrder(root: TreeNode | null): number {
  if (root == null) {
    return 0;
  }
  const leftHeight = postOrder(root.left);
  const rightHeight = postOrder(root.right);
  if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }
  return 1 + Math.max(leftHeight, rightHeight);
};
// const tree = createBinaryTree([3, 9, 20, null, null, 15, 7]);
const tree = createBinaryTree([1,2,2,3,3,null,null,4,4]); //[1,2,2,3,3,null,null,4,4]
// function getDifference(left:TreeNode | null, right: TreeNode | null){

// }
console.log(isBalanced(tree));
