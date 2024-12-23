import { createBinaryTree, TreeNode } from "../utils/create-binary-tree";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if(p == null && q == null ) return true;
  if(p == null || q == null) return false;
  if(p?.val !== q?.val) return false;

  return isSameTree(p?.right, q?.right) && isSameTree(p?.left,q?.left);
}

const root1 = createBinaryTree([2,2,2,null,2,null,null,2]);
const root2 = createBinaryTree([2,2,2,2,null,2,null]);

console.log(isSameTree(root1, root2));

/**
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const pStr = inOrderString(p);
  console.log(pStr);
  const qStr = inOrderString(q);
  console.log(qStr);

  return pStr == qStr;
}

function inOrderString(root: TreeNode | null, str: string = ""): string | null {
  if (root == null) {
    return null;
  }
  return inOrderString(root.left) + root.val.toString() + inOrderString(root.right);
}
 */
