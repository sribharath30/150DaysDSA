export class _Node {
    val: number;
    neighbors: _Node[];

    constructor(val?: number, neighbors?: _Node[]) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}
export function createGraph(adjList: number[][]): _Node | null {
    if (adjList.length === 0) return null;

    const nodes: Map<number, _Node> = new Map();
    for (let i = 0; i < adjList.length; i++) {
        nodes.set(i + 1, new _Node(i + 1));
    }

    for (let i = 0; i < adjList.length; i++) {
        const node = nodes.get(i + 1)!;
        for (const neighbor of adjList[i]) {
            node.neighbors.push(nodes.get(neighbor)!);
        }
    }
    return nodes.get(1)!;
}