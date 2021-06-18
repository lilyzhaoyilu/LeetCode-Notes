# Topological Sort
---
## Lucifer Notes

### 图的拓扑排序
图的拓扑排序其实是BFS的一个功能。给一个无环图，如果有一个序列满足以下条件，那么这个序列就是这个图的拓扑序：
1）序列包含图中所有点；2）对于图中的每一个边[x,y] x在序列中的位置都在y之前。
求解这个序列的过程就是拓扑排序。

本质上，图的拓扑序就是使用队列来存储图中入度为 0 的点，并将其剔除。由于这些点被剔除了，因此可能会使得图中其他的点入度减少。如果其他的点入度被减少到 0，那么就继续入队重复上面的过程。

对应前文讲的队列的二值性和单调性，这里的队列中只会有度为 0 的节点。因此这个队列其实是单值性，是一种更特殊的 BFS。
```
# items 为图的所有点
# indegree 为图的入度信息
# neighbors 则是每个点的邻居信息
def tp_sort(self, items, indegree, neighbors):
 q = collections.deque([])
 ans = []
 for item in items:
  if indegree[item] == 0:
   q.append(item)
 while q:
  cur = q.popleft()
  ans.append(cur)

  for neighbor in neighbors[cur]:
   indegree[neighbor] -= 1
   if indegree[neighbor] == 0:
    q.append(neighbor)

 return ans

```

### 图的连通分量
从图中任意一点出发，我们可以访问到的所有的点可以构成一个联通分量(connected component)。    
对图中每一个点进行一次这样的遍历就可以得到若干连通分量（也可能只有一个，比如说树，因为树是无环全连通图。）

形象地来说，你可以把图看成是几个分离的水域，图中的点水域的一部分。那么你要如何求水域的个数（不是点的个数）呢？

我们可以往某一个点倒墨水，让墨水进行扩散。 如果此时所有水域都被染色了，那么水域个数（联通分量个数）就是 1。

否则继续往下一个点倒墨水，重复上面过程直到所有点都被倒了墨水或者所有的水域都被染色。

同时为了防止一个点被多次（因为这是没有意义的），我们需要记录一下每个点被倒墨水的情况。
并查集也特别适合处理联通分量个数的计算，大家不妨结合起来理解。
```
visited = set()
count = 0

def dfs(x):
 visited.add(x)
 for neibor in neibors:
  if neibor in visited: continue
  dfs(x)

for x in range(n):
 if x not in visited:
  dfs(x)
  count += 1
```
---
it is a non numerical sort, it is topological.
Topological sorting only works for DAG (directed acyclic graph) : a directed graph with no directed cycles


**vertex**：顶点（图论）

**indegree** (plural indegrees): The number of edges directed into a vertex in a directed graph.

**topological numbers**: the sequence number
[a,b] -> a depends on b
[[a,b],[a,b]] doesn't work cuz it has a cycle
Topological sort: an algorithm that assigns topological numbers to vertices.

when building graphs, it is typically {a: [b,c]} where a depneds on b and c

e.g.  
![pic](https://miro.medium.com/max/428/1*b8Pa1uVQHtemY9IrP5XmHA.png)

- A must come before B and C
- Both B and C must come before D
- B and C are interchangeable since there is no edge between them
- D must come before E

### Topological Sort BFS

[LC1136 Parallel Courses](https://leetcode-cn.com/problems/parallel-courses/)  
[LC1136 My notes](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/Basic200/T/LC1136.%20Parallel%20Courses.md)

### Topoligcal Sort DFS

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
---





---
继续学习https://a91algo.herokuapp.com/solutionDetail?type=2&id=6&max_id=7  
https://adelachao.medium.com/graph-topological-sort-javascript-implementation-1cc04e10f181  
练习题  
https://www.lintcode.com/problem/topological-sorting/description  