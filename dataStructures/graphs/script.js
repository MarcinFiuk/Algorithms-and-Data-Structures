//Vertex - a node
//Edge - connection between nodes
//Weighted/Unweighted -values assigned to distances between vertices
//Directed/Undirected - directions assigned to distanced between vertices
//Common data structure for graph representation: adjacency list and adjacency matrix

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    removeVertex(vertex) {
        const length = this.adjacencyList[vertex].length;

        for (let i = 0; i < length; i++) {
            this.removeEdge(vertex, this.adjacencyList[vertex][0]);
        }

        delete this.adjacencyList[vertex];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            (edge) => edge !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            (edge) => edge !== vertex1
        );
    }

    DFTraversal(start) {
        //recursion
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        function DFTRecursiveHelper(vertex) {
            if (!vertex) {
                return;
            }

            result.push(vertex);
            visited[vertex] = true;

            adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    return DFTRecursiveHelper(neighbor);
                }
            });
        }

        DFTRecursiveHelper(start);

        return result;
    }

    DFTraversal2(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let vertex = null;
        visited[start] = true;

        while (stack.length) {
            vertex = stack.pop();
            result.push(vertex);

            this.adjacencyList[vertex].forEach((el) => {
                if (!visited[el]) {
                    visited[el] = true;
                    stack.push(el);
                }
            });
        }

        return result;
    }

    BFTraversal(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let vertex = null;

        visited[start] = true;

        while (queue.length) {
            vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

// console.log(g);
const res = g.DFTraversal('A');
console.log(res);

const r2 = g.DFTraversal2('A');
console.log(r2);

const r3 = g.BFTraversal('A');
console.log(r3);
