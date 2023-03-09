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
            // console.log(vertex, this.adjacencyList[vertex][i]);
            this.removeEdge(vertex, this.adjacencyList[vertex][i]);
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        // console.log(this.adjacencyList[vertex1]);
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            (edge) => edge !== vertex2
        );
        // console.log(this.adjacencyList[vertex2]);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            (edge) => edge !== vertex1
        );
    }
}

const g = new Graph();

g.addVertex('Tokyo');
g.addVertex('Dallas');
g.addVertex('Aspen');

g.addEdge('Tokyo', 'Dallas');
g.addEdge('Tokyo', 'Aspen');
// console.log(g);
g.removeVertex('Tokyo');
console.log(g);
