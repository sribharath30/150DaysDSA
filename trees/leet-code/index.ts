import { createBinaryTree, TreeNode } from "../utils/create-binary-tree";

const root = createBinaryTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);

function printPath(
  root: TreeNode | null,
  target: number,
  currentPath: TreeNode[] = []
): TreeNode[] {
  if (root == null) {
    return [];
  }

  // Add the current node's value to the path
  currentPath.push(root);

  // If the current node is the target, return the path
  if (root.val === target) {
    return currentPath;
  }

  // Check left and right subtrees
  const leftPath = printPath(root.left, target, [...currentPath]);
  const rightPath = printPath(root.right, target, [...currentPath]);

  // Return the path if found in either subtree
  return leftPath.length > 0 ? leftPath : rightPath;
}
const firstElement = printPath(root, 5);
const seceondElement = printPath(root, 1);

for (let i = 0; i < firstElement.length; i++) {
  if (seceondElement.includes(firstElement[i])) {
    console.log("LCD is", firstElement[i]);
    break;
  }
}
