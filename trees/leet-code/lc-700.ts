import { createBinaryTree } from "../utils/create-binary-tree";
import { TreeNode } from "../utils/create-binary-tree";

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root == null) {
    return null;
  }
  if (val < root.val) {
    return searchBST(root.left, val);
  } else if (val > root.val) {
    return searchBST(root.right, val);
  } else {
    return root;
  }
}

const root = createBinaryTree([4, 2, 7, 1, 3]);
console.log(searchBST(root, 2));
