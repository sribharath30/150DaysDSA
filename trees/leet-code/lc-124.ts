import { TreeNode } from '../utils/create-binary-tree';

function maxPathSum(root: TreeNode | null): number {
    let maxSum = Number.MIN_SAFE_INTEGER; // Global maximum path sum

    const dfs = (node: TreeNode | null): number => {
        if (!node) return 0; // Base case: null nodes contribute 0

        // Recursively find the maximum path sum from the left and right children
        const leftMax = Math.max(0, dfs(node.left)); // Ignore negative paths
        const rightMax = Math.max(0, dfs(node.right)); // Ignore negative paths

        // Update the global maximum if the current path is better
        maxSum = Math.max(maxSum, node.val + leftMax + rightMax);

        // Return the maximum path sum including this node and one child
        return node.val + Math.max(leftMax, rightMax);
    };

    dfs(root);
    return maxSum;
}

