const adj = [];

function addEdge(x, y) {
    adj[x][y] = 1;
    adj[y][x] = 1;
}

function bfs(start) {
    let visited = new Array(adj.length).fill(false);
    let queue = [start];
    let result = [start];
	visited[start] = true

    while (queue.length > 0) {
        const node = queue.shift();
        for (let i = 0; i < adj[node].length; i++) {
            if (adj[node][i] === 1 && !visited[i]) {
                queue.push(i);
                visited[i] = true;
                result.push(i);
            }
        }
    }
    console.log(result);
}

const v = 5;

for (let i = 0; i < v; i++) {
    adj[i] = Array(v).fill(0);
}

addEdge(0, 1);
addEdge(0, 2);
addEdge(1, 3);

bfs(0);
