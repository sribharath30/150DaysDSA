import { TreeNode } from "../utils/create-binary-tree";

function preorderTraversal(root: TreeNode | null,result:number[]=[]): number[] {
    if(root == null ){
        return result;
    }
    result.push(root.val);
    preorderTraversal(root.left,result);
    preorderTraversal(root.right,result);

    return result;
};