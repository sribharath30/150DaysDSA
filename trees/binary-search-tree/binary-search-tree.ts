class TreeNode {
  value: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class BST {
  private root: TreeNode | null = null;
  constructor() {}

  public insert(val: number): void {
    const node = new TreeNode(val);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertRecursively(this.root, node);
    }
  }
  private insertRecursively(root: TreeNode | null, node: TreeNode) {
    if (root) {
      if (node.value < root.value) {
        if (!root.left) {
          root.left = node;
        }else{
            this.insertRecursively(root.left, node);
        }
      }
      if (node.value > root.value) {
        if (!root.right) {
          root.right = node;
        }
        else{
            this.insertRecursively(root.right, node);
        }
      }
    }
  }

  inorder(root: TreeNode | null ){
    if(root == null){
        return;
    }
    this.inorder(root.left);
    console.log(root.value);
    this.inorder(root.right);
  }

  preorder(root: TreeNode | null ){
    if(root == null){
        return;
    }
    console.log(root.value);
    this.preorder(root.left);
    this.preorder(root.right);
  }
  
  postorder(root: TreeNode | null ){
    if(root == null){
        return;
    }
    this.postorder(root.left);
    this.postorder(root.right);
    console.log(root.value);
  }
  getRoot(): TreeNode | null {
    return this.root;
  }
}

const bst = new BST();
console.log(bst.getRoot());
bst.insert(100);
bst.insert(20);
bst.insert(200);
bst.insert(10);
bst.insert(30);
bst.insert(150);
bst.insert(300);
console.log(JSON.stringify(bst.getRoot(), null, 2)); 
bst.inorder(bst.getRoot());
console.log('pre')
bst.preorder(bst.getRoot());
console.log('post')
bst.postorder(bst.getRoot());