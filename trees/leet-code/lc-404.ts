import { TreeNode } from '../utils/create-binary-tree';

function sumOfLeftLeaves(root: TreeNode | null): number {
    let sum = 0;
    const dfs = (root: TreeNode | null) => {
        if (!root) return;
        if (root.left && root.left.left == null && root.left.right == null) {
            sum = sum + root.left.val;
        }
        dfs(root.left);
        dfs(root.right);
    };
    dfs(root);
    return sum;
}
