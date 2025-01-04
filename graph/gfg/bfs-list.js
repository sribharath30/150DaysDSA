class Solution {
    bfsOfGraph(adj) {
        let result = [];
        const visited = new Array(adj.length).fill(false);
        let queue = [];
    
        queue.push(0);
        visited[0] = true;
    
        while (queue.length > 0) {
            let node = queue.shift();
            result.push(node);
    
            for (let neighbor of adj[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    
        return result;
    }
}

/*
Time complexity = O(n) + degrees = O(2Edges);
hence T(n) O(n) +O(2E);
*/