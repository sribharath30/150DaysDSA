import { createBinaryTree, TreeNode } from "../../../utils/create-binary-tree";

// function treeConsecutiveSequence(
//     root: TreeNode | null
//   ): number {
//     if (!root) {
//       return 0;
//     }
//     let maxLen = 0;
//     const dfs = (
//       root: TreeNode | null,
//       parent: TreeNode | null,
//       length: number
//     ): void => {
//       if(root == null){
//           return;
//       }
//       length = (parent && root.val == parent.val + 1) ? length + 1 : 1;
//       maxLen = Math.max(length,maxLen);
//       dfs(root.left,root,length);
//       dfs(root.right,root,length);
//     };
//     dfs(root, null, 0);
//     return maxLen;
//   }

const root = createBinaryTree([2, 1, 3]);

let inOrderArray: number[] = [];
let postOrderArray: number[] = [];
const dfs = (root: TreeNode | null): void => {
  if (!root) return;
  inOrderArray.push(root.val);
  dfs(root.left);
  dfs(root.right);
  postOrderArray.push(root.val);
};
dfs(root);
console.log(inOrderArray, postOrderArray);
