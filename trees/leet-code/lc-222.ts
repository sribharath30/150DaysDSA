import { TreeNode } from "../utils/create-binary-tree";

function countNodes(root: TreeNode | null): number {
    let count = 0
    const dfs = (root: TreeNode | null) => {
        if (root == null) return;
        count++;
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return count;
};