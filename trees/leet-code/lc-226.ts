import { TreeNode } from "../utils/create-binary-tree";

function invertTree(root: TreeNode | null): TreeNode | null {
    if(root == null){
        return null;
    }
    const right = root.right;
    root.right = invertTree(root.left);
    root.left = invertTree(right)
    return root
};