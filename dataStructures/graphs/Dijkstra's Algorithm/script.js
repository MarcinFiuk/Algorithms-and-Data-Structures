class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight) {
        if (vertex1 && vertex2) {
            this.adjacencyList[vertex1].push({ node: vertex2, weight });
            this.adjacencyList[vertex2].push({ node: vertex1, weight });
        }
    }

    dijkstra(start, end) {
        const PQueue = new PriorityQueue();
        const distances = {};
        const previous = {};
        let currentVertex = null;
        let last = null;
        const shortestPath = [];

        for (const key in this.adjacencyList) {
            if (key === start) {
                distances[key] = 0;
                PQueue.enqueue(key, 0);
            } else {
                distances[key] = Infinity;
                PQueue.enqueue(key, Infinity);
            }
            previous[key] = null;
        }

        while (PQueue.values.length) {
            currentVertex = PQueue.dequeue().val;

            if (currentVertex === end) {
                last = end;
                while (last) {
                    shortestPath.push(last);
                    last = previous[last];
                }

                return shortestPath.reverse();
            }

            this.adjacencyList[currentVertex].forEach((neighbor) => {
                const { node, weight } = neighbor;
                const tempDistance = distances[currentVertex] + weight;
                if (tempDistance < distances[node]) {
                    distances[node] = tempDistance;
                    previous[node] = currentVertex;
                    PQueue.enqueue(node, tempDistance);
                }
                // console.log(tempDistance);
                /**
 * let alt = distances[currNode] + neighbor.weight;
         if (alt < distances[neighbor.node]) {
            distances[neighbor.node] = alt;
            prev[neighbor.node] = currNode;
            pq.enqueue(neighbor.node, distances[neighbor.node]);
 */
            });
        }
    }
}

const g = new WeightedGraph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'E', 3);
g.addEdge('C', 'D', 2);
g.addEdge('C', 'F', 4);
g.addEdge('D', 'E', 3);
g.addEdge('D', 'F', 1);
g.addEdge('E', 'F', 1);
// console.log(g.adjacencyList);
const r = g.dijkstra('A', 'E');

console.log(r);
