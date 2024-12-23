import { createBinaryTree } from "../utils/create-binary-tree";

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
// const isSymmetric = (root: TreeNode | null): boolean => {
//   return isMirror(root, root);
// };

// const isMirror = (t1: TreeNode | null, t2: TreeNode | null): boolean => {
//   if (t1 === null && t2 === null) return true;
//   if (t1 === null || t2 === null) return false;

//   return (t1.val === t2.val) && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
// }

function isSymmetric(root: TreeNode | null): boolean {
  return checkIsSymmetric(root, root);
}
function checkIsSymmetric(
  left: TreeNode | null,
  right: TreeNode | null
): boolean {
  if (left == null && right == null) return true;
  if (left == null || right == null) return false;
  if (left.val !== right.val) return false;
  return (
    checkIsSymmetric(left.right, right.left) &&
    checkIsSymmetric(left.left, right.right)
  );
}

const root = createBinaryTree([1, 2, 2, 3, 4, 4, 3]);

console.log(isSymmetric(root));
