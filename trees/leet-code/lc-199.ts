import { createBinaryTree, TreeNode } from '../utils/create-binary-tree';

function rightSideView(root: TreeNode | null): number[] {
    let finalResult: number[] = [];

    const levelOrderTraversal = (root: TreeNode | null): void => {
        if (!root) {
            return;
        }
        let queue: TreeNode[] = [];
        queue.push(root);
        while (queue.length > 0) {
            let queueLength = queue.length;
            finalResult.push(queue[queueLength - 1].val);
            for (let i = 0; i < queueLength; i++) {
                const currentNode = queue.shift()!;
                if (currentNode.left) queue.push(currentNode.left);
                if (currentNode.right) queue.push(currentNode.right);
            }
        }
    };
    levelOrderTraversal(root);
    return finalResult;
}

const root = createBinaryTree([1, 2, 3, null, 5, null, 4]);
console.log(rightSideView(root));
