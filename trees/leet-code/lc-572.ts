import { createBinaryTree, TreeNode } from "../utils/create-binary-tree";

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (subRoot === null) return true;
  if (root === null) return false;
  if (checkTreesAreEqual(root, subRoot)) {
    return true;
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function checkTreesAreEqual(t1: TreeNode | null, t2: TreeNode | null): boolean {
  if (t1 == null && t2 == null) return true;
  if (t1 == null || t2 == null) return false;
  if (t1.val !== t2.val) return false;

  return (
    checkTreesAreEqual(t1.left, t2.left) &&
    checkTreesAreEqual(t1.right, t2.right)
  );
}
const root = createBinaryTree([3, 4, 5, 1, 2]);
const subRoot = createBinaryTree([4, 1, 2]);

console.log(isSubtree(root, subRoot));
