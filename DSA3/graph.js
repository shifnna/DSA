//^^^ Adjacency List
// class Graph {
//     constructor(){
//         this.adjList = {};
//     }

//     addVertex(data){
//         if(!this.adjList[data]){
//             this.adjList[data] = [];
//         }
//     }

//     addEdge(v1,v2){
//         if(!this.adjList[v1]) this.addVertex(v1);
//         if(!this.adjList[v2]) this.addVertex(v2);

//         this.adjList[v1].push(v2);
//         this.adjList[v2].push(v1);
//     }

//     removeEdge(v1,v2){
//         if(this.adjList[v1]){
//             this.adjList[v1]=this.adjList[v1].filter(v=>v!==v2);
//         }
//         if(this.adjList[v2]){
//             this.adjList[v2]=this.adjList[v2].filter(v=>v!==v1);
//         }
//     }

//     removeVertex(data){
//         while (this.adjList[data]?.length) {
//             let rmvVertex = this.adjList[data].pop();
//            this.removeEdge(rmvVertex,data);  
//         }
//         delete this.adjList[data];
//     }

//     displayGraph(){
//         for(let vertex in this.adjList){
//             console.log(`${vertex} -> ${this.adjList[vertex]}`);           
//         }
//     }

//     dfs(start){
//         if(!this.adjList[start]) return [];
//         let result = [];
//         let visited = {};
//         const adjList = this.adjList; //don't forget

//         (function dfsHelper(vertex){
//             result.push(vertex);
//             visited[vertex] = true;

//             adjList[vertex].forEach(neighbor => {
//                 if(!visited[neighbor]){
//                     dfsHelper(neighbor);
//                 }
//             });
//         })(start)

//         return result;
//     }

//     bfs(start){
//         if(!this.adjList[start]) return [];
//         let queue = [start]
//         let result = [];
//         let visited = {};
//         visited[start]=true;

//         while (queue.length) {
//             let vertex = queue.shift();
//             result.push(vertex);

//             this.adjList[vertex].forEach(neighbor=>{
//                 if(!visited[neighbor]){
//                     visited[neighbor]=true;
//                     queue.push(neighbor)
//                 }
//             })
//         }

//         return result;
//     }

// }


// const graph = new Graph();

// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addVertex('D')
// graph.addVertex('E')

// graph.addEdge('A','B')
// graph.addEdge('A','C')
// graph.addEdge('B','C')
// graph.addEdge('C','D')

// graph.removeVertex("E")

// graph.displayGraph();

// console.log(graph.dfs('B'));
// console.log(graph.bfs('B'));


//^^^ Adjacency Matrix

// class GraphMatrix {
//     constructor(size) {
//         this.size = size;
//         this.matrix = Array.from({ length: size }, () => Array(size).fill(0));
//     }

//     addEdge(v1, v2) {
//         this.matrix[v1][v2] = 1;
//         this.matrix[v2][v1] = 1; // Undirected graph
//     }

//     display() {
//         console.log(this.matrix.map((row) => row.join(' ')).join('\n'));
//     }

//     // Depth-First Search (DFS)
//     dfs(start) {
//         const visited = Array(this.size).fill(false);
//         const result = [];

//         const dfsHelper = (vertex) => {
//             visited[vertex] = true;
//             result.push(vertex);

//             for (let i = 0; i < this.size; i++) {
//                 if (this.matrix[vertex][i] === 1 && !visited[i]) {
//                     dfsHelper(i);
//                 }
//             }
//         };

//         dfsHelper(start);
//         return result;
//     }

//     // Breadth-First Search (BFS)
//     bfs(start) {
//         const visited = Array(this.size).fill(false);
//         const queue = [start];
//         const result = [];
//         visited[start] = true;

//         while (queue.length) {
//             const vertex = queue.shift();
//             result.push(vertex);

//             for (let i = 0; i < this.size; i++) {
//                 if (this.matrix[vertex][i] === 1 && !visited[i]) {
//                     visited[i] = true;
//                     queue.push(i);
//                 }
//             }
//         }

//         return result;
//     }
// }

// // Example Usage
// const graphMatrix = new GraphMatrix(4); // 4 vertices (0, 1, 2, 3)
// graphMatrix.addEdge(0, 1);
// graphMatrix.addEdge(1, 2);
// graphMatrix.addEdge(2, 3);
// graphMatrix.display();

// console.log("DFS:", graphMatrix.dfs(0));
// console.log("BFS:", graphMatrix.bfs(0)); 