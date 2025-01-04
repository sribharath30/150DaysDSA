// directed 
class GraphAjacencyList {
    private adjacencyMap: Map<number, number[]>;

    constructor() {
        this.adjacencyMap = new Map();
    }

    addVertex(node1: number, node2: number) {
        if (!this.adjacencyMap.has(node1)) {
            this.adjacencyMap.set(node1,[]);
        }
        const val = this.adjacencyMap.get(node1)!;
        this.adjacencyMap.set(node1,[...val,node2])
        /*
        unidirected
        if (!this.adjacencyMap.has(node2)) {
            this.adjacencyMap.set(node2,[]);
        }
        const val = this.adjacencyMap.get(node2)!;
        this.adjacencyMap.set(node2,[...val,node1])
        */
        console.log(this.adjacencyMap);
    }
}
const graph = new GraphAjacencyList();
graph.addVertex(0,1);