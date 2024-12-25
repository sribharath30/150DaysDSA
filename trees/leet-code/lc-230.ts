import { createBinarySearchTree, TreeNode } from "../utils/create-binary-tree";

function kthSmallest(root: TreeNode | null,k:number): number {
    const result = inorderArray(root);
    return result[k-1]
};

function inorderArray(root: TreeNode | null, result: number[]=[]): number[]{
    if(root == null) return result;
    inorderArray(root.left,result);
    result.push(root.val);
    inorderArray(root.right,result);
    return result;
}

const btree = createBinarySearchTree([5,3,6,2,4,null,null,1])
console.log(kthSmallest(btree,3))