class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        if (n === 0) return 0;
        if (n === 1 || edges.length === 0) return n;

        let map = {};
        let visited = new Array(n).fill(false);
        let count = 0;

        for (let i = 0; i < n; i++) {
            map[i] = [];
        }

        for (let [u, v] of edges) {
            map[u].push(v);
            map[v].push(u);
        }

        const dfs = (node) => {
            visited[node] = true;
            for (let neighbour of map[node]) {
                if (!visited[neighbour]) dfs(neighbour);
            }
        };

        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                count++;
                dfs(i);
            }
        }

        return count;
    }
}
