export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export function createBinaryTree(arr: (number | null)[]): TreeNode | null {
    if (arr.length === 0) return null;

    let root = new TreeNode(arr[0]!); // Assuming the first element is not null
    let queue: TreeNode[] = [root];
    let i = 1;

    while (i < arr.length) {
        let currentNode = queue.shift()!;
        
        if (arr[i] !== null) {
            currentNode.left = new TreeNode(arr[i]!);
            queue.push(currentNode.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            currentNode.right = new TreeNode(arr[i]!);
            queue.push(currentNode.right);
        }
        i++;
    }

    return root;
}

// // Example usage
// let root = createBinaryTree([3, 9, 20, null, null, 15, 7]);
