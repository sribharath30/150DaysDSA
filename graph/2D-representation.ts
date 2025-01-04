// directed
class GraphAdjacencyMatrix{
    verticeCount: number;
    adjacencyMatrix: number[][];

    constructor(verticeCount: number){
        this.verticeCount = verticeCount;
        this.adjacencyMatrix = this.initArray(verticeCount);
    }

    addVertices(node1: number, node2: number, weight: number = 1){
        if (node1 >= this.adjacencyMatrix.length || node2 >= this.adjacencyMatrix.length) {
            return -1;
        }
        this.adjacencyMatrix[node1][node2] = weight;
        /* undirected
        this.adjacencyMatrix[node2][node2] = weight;
        */
        return 1;
    }
    private initArray(verticeCount: number){
        const array = new Array(verticeCount);
        for (let i = 0; i < verticeCount; i++) {
            array[i] = new Array(verticeCount).fill(0);            
        }
        return array;
    }
}

const graph = new GraphAdjacencyMatrix(4);
graph.addVertices(0,0);
graph.addVertices(1,1);
console.log(graph.adjacencyMatrix);