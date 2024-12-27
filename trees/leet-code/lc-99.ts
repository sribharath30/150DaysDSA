import { TreeNode } from "../utils/create-binary-tree";

function recoverTree(root: TreeNode | null): void {
  let first: TreeNode | null = null as TreeNode | null;
  let mid: TreeNode | null = null as TreeNode | null;
  let last: TreeNode | null = null as TreeNode | null;
  let prev: TreeNode | null = null as TreeNode | null;

  function inOrderTraversalUpdate(root: TreeNode | null): void {
    if (!root) return;

    inOrderTraversalUpdate(root.left);

    if (prev !== null && prev.val > root.val) {
      if (first === null) {
        first = prev;
        mid = root;
      } else {
        last = root;
      }
    }

    prev = root;

    inOrderTraversalUpdate(root.right);
  }

  inOrderTraversalUpdate(root);

  // Swap the values of the misplaced nodes
  if (first && last) {
    const temp = first.val;
    first.val = last.val;
    last.val = temp;
  } else if (first && mid) {
    const temp = first.val;
    first.val = mid.val;
    mid.val = temp;
  }
}

/*
Brute force approach
function recoverTree(root: TreeNode | null): void {
    if (!root) {
        return;
    }
    const array = inorderTraversal(root);
    let firstElement: number | null = null;
    let secondElement: number | null = null;
    let prev = array[0];
    for (let i = 0; i < array.length; i++) {
        if (firstElement == null && prev > array[i]) {
            firstElement = prev;
        }
        if (firstElement != null && prev > array[i]) {
            secondElement = array[i];
        }
        prev = array[i]
    }
    console.log(firstElement,secondElement)
    searchAndUpdate(root,firstElement as number,secondElement as number)
}

function inorderTraversal(
    root: TreeNode | null,
    array: number[] = []
): number[] {
    if (root == null) {
        return array;
    }
    inorderTraversal(root.left, array);
    array.push(root.val);
    inorderTraversal(root.right, array);
    return array;
}

function searchAndUpdate(root: TreeNode | null, v1: number, v2: number) {
    if (root == null) {
        return;
    }
    searchAndUpdate(root.left, v1, v2);
    if (root.val == v1) {
        root.val = v2;
    } else if (root.val == v2) {
        root.val = v1;
    }
    searchAndUpdate(root.right, v1, v2);
}
*/
