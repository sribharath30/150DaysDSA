import { createBinaryTree, TreeNode } from "../utils/create-binary-tree";

const flatten = (root: TreeNode | null): void => {
    let prev: TreeNode | null = null;

    const helper = (node: TreeNode | null): void => {
        if (!node) return;

        helper(node.right);
        helper(node.left);

        node.left = null;
        node.right = prev;
        prev = node;
    };

    helper(root);
};
const tree = createBinaryTree([1, 2, 5, 3, 4, null, 6]);
flatten(tree);
console.log(tree);
/* 
-----Brute force solution-------
function flatten(root: TreeNode | null): void {
    if (!root) return;

    const arr: TreeNode[] = [];
    const dfs = (node: TreeNode | null) => {
        if (!node) return;
        arr.push(node);
        dfs(node.left);
        dfs(node.right);
    };
    dfs(root);

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i].left = null;
        arr[i].right = arr[i + 1];
    }
}
*/

