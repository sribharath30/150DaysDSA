import { createBinaryTree } from "../utils/create-binary-tree";
import { TreeNode } from "../utils/create-binary-tree";
 
function maxDepth(
  root: TreeNode | null,
  maxD: number = 0,
  currD: number = 0
): number {
  if (root == null) {
    return currD;
  } else {
    let leftDepth = maxDepth(root?.left, maxD, currD + 1);
    let rightDepth = maxDepth(root?.right, maxD, currD + 1);
    return Math.max(leftDepth,rightDepth);
  }
}

const root = createBinaryTree([3,9,20,null,null,15,7]);
console.log(maxDepth(root));