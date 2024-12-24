import { TreeNode } from "../utils/create-binary-tree";

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    
    const result: number[][] = [];
    const queue: TreeNode[] = [root]; // Initialize the queue with the root node

    while (queue.length > 0) {
        const levelSize = queue.length; // Number of nodes at the current level
        const currentLevel: number[] = [];

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift()!; // Dequeue the front node
            currentLevel.push(currentNode.val); // Add the node's value to the current level

            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }

        result.push(currentLevel);
    }

    return result;
}

