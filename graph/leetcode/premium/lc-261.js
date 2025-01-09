function validTree(n, edges) {
    let map = {};
    let visited = new Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        map[i] = [];
    }
    for (let [u, v] of edges) {
        map[u].push(v);
        map[v].push(u);
    }
    console.log(map);

    const dfs = (node, parent) => {
        if (visited[node]) {
            return false;
        } else {
            visited[node] = true;
            for (let neighour of map[node] || []) {
                if (neighour !== parent && !dfs(neighour, node)) return false;
            }
        }
        return true;
    };

    if (!dfs(0, null)) return false;

    // Check if all nodes are visited (graph is connected)
    return visited.every((v) => v);
}

const n = 5,
    edges = [
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 4],
        [2, 1],
    ];

console.log(validTree(n, edges));
