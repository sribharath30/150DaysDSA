import { TreeNode } from "../utils/create-binary-tree";

function sortedArrayToBST(
    nums: number[]
): TreeNode | null {
    return convertArratToBST(nums, 0, nums.length - 1)
}

function convertArratToBST(
    nums: number[],
    start: number,
    end: number
): TreeNode | null {
    if (start > end) {
        return null;
    }
    let mid = Math.floor((start + end) / 2);
    const newNode = new TreeNode(nums[mid]);
    newNode.left = convertArratToBST(nums, start, mid - 1);
    newNode.right = convertArratToBST(nums, mid + 1, end);
    return newNode;
}