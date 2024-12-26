import {  TreeNode } from "../utils/create-binary-tree";

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (!inorder.length || !postorder.length) {
    return null;
  }
  const lastIndex = postorder.length - 1;
  const root = postorder[lastIndex];
  const rootNode = new TreeNode(root);

  const rootIndex = inorder.indexOf(root);
  rootNode.left = buildTree(
    inorder.slice(0, rootIndex),
    postorder.slice(0, rootIndex)
  );
  rootNode.right = buildTree(
    inorder.slice(rootIndex + 1),
    postorder.slice(rootIndex, lastIndex)
  );
  return rootNode;
}

const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];
console.log(buildTree(inorder, postorder));
