import {  TreeNode } from "../../../utils/create-binary-tree";

function treeConsecutiveSequence(
    root: TreeNode | null
  ): number {
    if (!root) {
      return 0;
    }
    let maxLen = 0;
    const dfs = (
      root: TreeNode | null,
      parent: TreeNode | null,
      length: number
    ): void => {
      if(root == null){
          return;
      }
      length = (parent && root.val == parent.val + 1) ? length + 1 : 1;
      maxLen = Math.max(length,maxLen);
      dfs(root.left,root,length);
      dfs(root.right,root,length);
    };
    dfs(root, null, 0);
    return maxLen;
  }

/*
Brute force approach
function treeConsecutiveSequence(
  root: TreeNode | null,
  array: number[] = []
): number[] {
  if (root == null) {
    return array;
  }
  treeConsecutiveSequence(root.left);
  treeConsecutiveSequence(root.right);
  array.push(root.val);
  return array;
}

// const root = createBinaryTree([1,null,3,2,4,null,null,null,5]);
const root = createBinaryTree([2, null, 3, 2, null, 1]);
const values = treeConsecutiveSequence(root);

let maxSequence = 1;
let currSequence = 1;
for (let i = 1; i < values.length; i++) {
  if (values[i] == values[i - 1] + 1) {
    currSequence = currSequence + 1;
    if (currSequence > maxSequence) {
      maxSequence = currSequence;
    }
  } else {
    currSequence = 1;
  }
}

console.log(maxSequence);
*/

