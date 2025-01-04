class Solution {
    // Function to return a list containing the DFS traversal of the graph.
    dfs(adj,node,result,visited) {     
        result.push(node);
        visited[node] = true;
        for(let val of adj[node]){
            if(!visited[val]){
                this.dfs(adj,val,result,visited)
            }
        }
    }

    dfsOfGraph(adj) {
        let result = [];
        let visited = new Array(adj.length+1).fill(false);
        let start = 0;
        this.dfs(adj,start,result,visited);
        return result
    }
}