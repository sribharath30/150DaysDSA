import { createBinaryTree, TreeNode } from "../../../utils/create-binary-tree";

function maximumAverageSubtree(root: TreeNode | null): number {
  let maxAverage = 0;

  const dfs = (root: TreeNode | null): [number, number] => {
    if (root === null) {
      return [0, 0];
    }

    const [leftSum, leftCount] = dfs(root.left);
    const [rightSum, rightCount] = dfs(root.right);

    const sum = root.val + leftSum + rightSum;
    const count = 1 + leftCount + rightCount;

    const average = sum / count;

    maxAverage = Math.max(maxAverage, average);

    return [sum, count];
  };
  dfs(root)
  return maxAverage;
}
const tree = createBinaryTree([5, 6, 1]);
console.log(maximumAverageSubtree(tree));
