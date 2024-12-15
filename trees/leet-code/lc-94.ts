function inorderTraversal(root: TreeNode | null,result:number[]=[]): number[] {
    if(root == null ){
        return result;
    }
    inorderTraversal(root.left,result);
    result.push(root.value);
    inorderTraversal(root.right,result);

    return result;
};