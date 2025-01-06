import { _Node, createGraph } from "../utils/utils";

function cloneGraph(node: _Node | null): _Node | null {
    const cloned = new Map<_Node, _Node>();

    const dfs = (node: _Node | null) => {
        if (!node) return null;
        if (cloned.has(node)) {
            return cloned.get(node);
        }
        const newNode = new _Node(node.val);
        cloned.set(node, newNode);
        newNode.neighbors = node.neighbors.map((val) => dfs(val)!).filter((n): n is _Node => n !== null);
        return newNode;
    }

    return dfs(node)!;
};

const graph = createGraph([[2,4],[1,3],[2,4],[1,3]]);

console.log(cloneGraph(graph))