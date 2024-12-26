 class _Node {
      val: number
      children: _Node[]
      constructor(val?: number, children?: _Node[]) {
          this.val = (val===undefined ? 0 : val)
          this.children = (children===undefined ? [] : children)
      }
  }

function maxDepth(root: _Node | null): number {
    let maxDepth = 0;

    const findMaxDepth = (root: _Node | null, currentDepth: number) => {
        if (root === null)
            return;

        if (currentDepth > maxDepth)
            maxDepth = currentDepth;

        for (const node of root.children) {
            findMaxDepth(node, currentDepth + 1);
        }
    }

    findMaxDepth(root,1);

    return maxDepth;

};