class Graph {
    constructor(v, e) {
        this.v = v;
        this.e = e;

        this.adj = Array.from(Array(v), () => new Array(v).fill(0));
    }

    addEdge(start, end) {
        this.adj[start][end] = 1;
        this.adj[end][start] = 1;
    }
    DFS(start, visited, result) {
        visited[start] = true;
        for (let i = 0; i < this.adj[start].length; i++) {
            if (!visited[i] && this.adj[start][i] === 1) {
                result.push(i);
                this.DFS(i, visited, result);
            }
        }
    }
}
const v = 5;
const e = 4;

// create the graph
const G = new Graph(v, e);
G.addEdge(0, 1);
G.addEdge(0, 2);
G.addEdge(0, 3);
G.addEdge(0, 4);

const visited = new Array(v).fill(false);
const result = [];
G.DFS(0, visited, result);
console.log(result);
