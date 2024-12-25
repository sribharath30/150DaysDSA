import { TreeNode } from "../utils/create-binary-tree";

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (inorder.length == 0 || preorder.length == 0) {
    return null;
  }
  const root = new TreeNode(preorder[0]);
  const mid = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder.slice(1, mid), inorder.slice(0, mid - 1));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
}
