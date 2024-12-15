import { createBinaryTree } from "../utils/create-binary-tree";
import { TreeNode } from "../utils/create-binary-tree";

function minDepth(
  root: TreeNode | null,
  minD: number = 10000,
  currD: number = 0
): number {
  if (root == null) {
    return 0;
  }
  currD += 1;
  // If it's a leaf node, return the current depth
  if (root.left == null && root.right == null) {
    return currD;
  }
  let leftDepth = root.left ? minDepth(root.left, minD, currD) : minD;
  let rightDepth = root.right ? minDepth(root.right, minD, currD) : minD;

  // Return the minimum of the depths
  return Math.min(leftDepth, rightDepth);
}

const root = createBinaryTree([2, null, 3, null, 4, null, 5, null, 6]);
console.log(minDepth(root));
