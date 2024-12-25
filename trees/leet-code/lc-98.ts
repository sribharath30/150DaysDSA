import { createBinaryTree, TreeNode } from "../utils/create-binary-tree";

function isValidBST(root: TreeNode | null, array: number[] = []): boolean {
    if (root == null) return true;

    if (!isValidBST(root.left, array)) return false;

    if (array.length > 0 && root.val <= array[array.length - 1]) {
        return false;
    }
    array.push(root.val);

    return isValidBST(root.right, array);
}


const root = createBinaryTree([2,1,3]);
console.log(isValidBST(root));
