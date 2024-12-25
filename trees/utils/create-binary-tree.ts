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

export function createBinarySearchTree(arr: (number | null)[]): TreeNode | null {
    if (arr.length === 0) return null;

    // Filter out null values to create a sorted array of numbers
    const filteredArray = arr.filter((val): val is number => val !== null).sort((a, b) => a - b);

    function constructBST(start: number, end: number): TreeNode | null {
        if (start > end) return null;

        // Middle element as root
        const mid = Math.floor((start + end) / 2);
        const node = new TreeNode(filteredArray[mid]);

        // Recursively build left and right subtrees
        node.left = constructBST(start, mid - 1);
        node.right = constructBST(mid + 1, end);

        return node;
    }

    return constructBST(0, filteredArray.length - 1);
}

// // Example usage
// let root = createBinaryTree([3, 9, 20, null, null, 15, 7]);
