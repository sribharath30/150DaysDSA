import { createBinaryTree, TreeNode } from '../utils/create-binary-tree';

function serialize(root: TreeNode | null): string {
    if (!root) {
        return '[]';
    }
    let queue: TreeNode[] = [];
    let result: Array<number | null> = [];
    queue.push(root);
    result.push(root.val);
    while (queue.length > 0) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            const node = queue.shift()!;
            const left = node.left;
            const right = node.right;
            if (left) {
                result.push(left.val);
                queue.push(left);
            } else {
                result.push(null);
            }
            if (right) {
                result.push(right.val);
                queue.push(right);
            } else {
                result.push(null);
            }
        }
    }
    return JSON.stringify(result);
}

function deserialize(data: string): TreeNode | null {
    const array = JSON.parse(data);
    if (!array.length) {
        return null;
    }

    const root = new TreeNode(array[0]);
    const queue: TreeNode[] = [root];
    let index = 1;

    while (queue.length > 0) {
        const node = queue.shift()!;

        if (index < array.length && array[index] !== null) {
            node.left = new TreeNode(array[index]);
            queue.push(node.left);
        }
        index++;

        if (index < array.length && array[index] !== null) {
            node.right = new TreeNode(array[index]);
            queue.push(node.right);
        }
        index++;
    }

    return root;
}

// const binaryTree = createBinaryTree([1, 2, 3]);
// const binaryTree = createBinaryTree([1,null,2,3]);
const binaryTree = createBinaryTree([5, 4, 7, 3, null, 2, null, -1, null, 9]);
const serializedTree = serialize(binaryTree);
console.log(deserialize(serializedTree));
