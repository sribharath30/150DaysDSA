import { createBinaryTree, TreeNode } from "../utils/create-binary-tree";

function hasPathSum(
  root: TreeNode | null,
  targetSum: number,
  currSum: number = 0
): boolean {
  if (root == null) {
    return false;
  }
  currSum += root.val;

  if (root.left == null && root.right == null) {
    return currSum === targetSum;
  }

  const leftSum = hasPathSum(root.left, targetSum, currSum);
  const rightSum = hasPathSum(root.right, targetSum, currSum);

  return leftSum || rightSum;
}
const root = createBinaryTree([
  5,
  4,
  8,
  11,
  null,
  13,
  4,
  7,
  2,
  null,
  null,
  null,
  1,
]);
