function preorderTraversal(root: TreeNode | null,result:number[]=[]): number[] {
    if(root == null ){
        return result;
    }
    result.push(root.value);
    preorderTraversal(root.left,result);
    preorderTraversal(root.right,result);

    return result;
};