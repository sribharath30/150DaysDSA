import { createBinaryTree, TreeNode } from '../utils/create-binary-tree';

function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxPath = 0;

    const dfs = (node: TreeNode | null): number => {
        if (!node) return 0; // Base case: Null nodes have a depth of 0
        
        const leftDepth = dfs(node.left);  // Depth of left subtree
        const rightDepth = dfs(node.right); // Depth of right subtree
        
        // Update the maximum path (left + right depths)
        maxPath = Math.max(maxPath, leftDepth + rightDepth);
        
        // Return the depth of the current subtree
        return Math.max(leftDepth, rightDepth) + 1;
    };

    dfs(root);
    return maxPath;
}


const tree = createBinaryTree([1, 2, 3]);
console.log(diameterOfBinaryTree(tree));
