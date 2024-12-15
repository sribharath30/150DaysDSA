function postorderTraversal(root: TreeNode | null,result:number[]=[]): number[] {
    if(root == null ){
        return result;
    }
    postorderTraversal(root.left,result);
    result.push(root.value);
    postorderTraversal(root.right,result);

    return result;
};