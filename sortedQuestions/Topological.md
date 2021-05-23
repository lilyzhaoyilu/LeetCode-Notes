# Topological Sort

https://adelachao.medium.com/graph-topological-sort-javascript-implementation-1cc04e10f181  
练习题  
https://www.lintcode.com/problem/topological-sorting/description  
it is a non numerical sort, it is topological.
Topological sorting only works for DAG (directed acyclic graph) : a directed graph with no directed cycles

**vertex**：顶点（图论）

**indegree** (plural indegrees): The number of edges directed into a vertex in a directed graph.

**topological numbers**: the sequence number
[a,b] -> a depends on b
[[a,b],[a,b]] doesn't work cuz it has a cycle
Topological sort: an algorithm that assigns topological numbers to vertices.

e.g.  
![pic](https://miro.medium.com/max/428/1*b8Pa1uVQHtemY9IrP5XmHA.png)

- A must come before B and C
- Both B and C must come before D
- B and C are interchangeable since there is no edge between them
- D must come before E

```JavaScript
class Graph {
  constructor() {
      this.list = {};
  }
  //增加一个顶点
  addVertex(vertex) {
      if (!this.list[vertex]) {
          this.list[vertex] = [];
      }
  }
  //增加点的边， v1 depends on v2
  addEdge(v1, v2) {
      this.list[v1].push(v2);
      console.log(this.list)
  }

  // A直接连B和C，B->D
  //{ A: [ 'B', 'C' ], B: [ 'D' ], C: [ 'D' ], D: [ 'E' ], E: [] }
}

const graph = function() {
  const g = new Graph();
  ["A", "B", "C", "D", "E"].forEach((v) => g.addVertex(v));
  g.addEdge("A", "B");
  g.addEdge("A", "C");
  g.addEdge("B", "D");
  g.addEdge("C", "D");
  g.addEdge("D", "E");
  return g;
}();

function dfsTopSortHelper(v, n, visited, topNums) {
  console.log(v, n, visited, topNums)
  visited[v] = true;
  const neighbors = graph.list[v];
  for (const neighbor of neighbors) {
      if (!visited[neighbor]) {
          n = dfsTopSortHelper(neighbor, n, visited, topNums);
      }
  }
  topNums[v] = n;
  return n - 1;
}

function dfsTopSort(graph) {
  const vertices = Object.keys(graph.list);
  const visited = {};
  const topNums = {};
  let n = vertices.length - 1;
  for (const v of vertices) {
      if (!visited[v]) {
          n = dfsTopSortHelper(v, n, visited, topNums)
      }
  }
  return topNums;
}

console.log(dfsTopSort(graph));
// { E: 4,
//   D: 3,
//   B: 2,
//   C: 1,
//   A: 0 }
```
