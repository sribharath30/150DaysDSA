import { TreeNode } from "../utils/create-binary-tree";

function postorderTraversal(root: TreeNode | null,result:number[]=[]): number[] {
    if(root == null ){
        return result;
    }
    postorderTraversal(root.left,result);
    result.push(root.val);
    postorderTraversal(root.right,result);

    return result;
};