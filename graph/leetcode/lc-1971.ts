function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    let adjacencyMap: Map<number, number[]> = new Map();
    for (const [u, v] of edges) {
        if (!adjacencyMap.has(u)) {
            adjacencyMap.set(u, []);
        }
        if (!adjacencyMap.has(v)) {
            adjacencyMap.set(v, []);
        }
        adjacencyMap.get(u)!.push(v);
        adjacencyMap.get(v)!.push(u);
    }


    let visited: boolean[] = new Array(n).fill(false);

    const dfs = (current: number): boolean => {
        if (current === destination) {
            return true;
        }

        visited[current] = true;

        for (const neighbor of adjacencyMap.get(current) || []) {
            if (!visited[neighbor]) {
                if (dfs(neighbor)) {
                    return true;
                }
            }
        }

        return false;
    };
    return dfs(source);
}

const n = 3,
    edges = [
        [0, 1],
        [1, 2],
        [2, 0],
    ],
    source = 0,
    destination = 2;

console.log(validPath(n, edges, source, destination));
