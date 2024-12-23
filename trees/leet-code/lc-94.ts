import { TreeNode } from "../utils/create-binary-tree";

function inorderTraversal(root: TreeNode | null,result:number[]=[]): number[] {
    if(root == null ){
        return result;
    }
    inorderTraversal(root.left,result);
    result.push(root.val);
    inorderTraversal(root.right,result);

    return result;
};