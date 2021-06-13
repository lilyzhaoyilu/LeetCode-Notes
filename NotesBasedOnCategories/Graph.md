# 图

* 点 vertice: 代表事物
* 链接 link/edge: 代表事物间的关系
图论是一种表示`多对多`关系的数据结构。
图是由顶点和边组成的，可以无边，但至少有一个顶点。

## 基本概念
- **无向图 & 有向图**  
(v, w) 表示无向边，即 v 和 w 是互通的  
<v, w> 表示有向边，该边始于 v，终于 w  

- **有权图 & 无权图**    
有权图：每条边具有一定的权重(weight)，通常是一个数字  
无权图：每条边均没有权重，也可以理解为权为 1  

- **入度 & 出度 & 度**  
度(Degree)：所有与它连接点的个数之和  
入度(Indegree)：存在于有向图中，所有接入该点的边数之和  
出度(Outdegree)：存在于有向图中，所有接出该点的边数之和  

- **路径 & 环**

- **连通图 & 强连通图**   
连通图：所有的点都有路径相连  
非连通图：存在某两个点没有路径相连  

在无向图中，若任意两个顶点 i 与 j 都有路径相通，则称该无向图为连通图。
在有向图中，若任意两个顶点 i 与 j 都有路径相通，则称该有向图为强连通图。

**生成树**  
一个连通图的生成树是指一个连通子图，它含有图中全部 n 个顶点，但只有足以构成一棵树的 n-1 条边。一颗有 n 个顶点的生成树有且仅有 n-1 条边，如果生成树中再添加一条边，则必定成环。  
在连通网的所有生成树中，所有边的代价和最小的生成树，称为最小生成树，其中代价和指的是所有边的权重和。

## 图的建立

1. 邻接矩阵：使用 n * n 的矩阵来描述graph[i][j]边的关系。 

graph[i][j] = 1来表述有一条边 `i -> j`。可以用0来表示没有边，或者用数字来表示权重。  
空间复杂度: O(N^2)。 如果是稀疏图（顶点数目 > 边 很多），则浪费空间。如果是无向图，也会浪费~50%的空间。  
优点： 1)直观; 2)时间复杂度是O(1)，在判断顶点是否连接，入度，初度，和更新度数的时候。  
在无向图中，邻接矩阵关于对角线相等

2. 邻接表：对于每个点，存一个链表，用链表来只想所有与改点直接相连的点。
对于有全图来说，链表中元素值对应着权重。

邻接矩阵和链表对比：
邻接矩阵由于没有相连的边也占有空间，因此存在浪费空间的问题，而邻接链表则比较合理地利用空间
邻接链表比较耗时，牺牲很大的时间来查找，因此比较耗时，而邻接矩阵法相比邻接链表法来说，时间复杂度低。


## 图的遍历 - 找出图中所有的点
**如果图有环，就一定要记录节点的访问情况，防止死循环。**  
当然你可能不需要真正地使用一个集合记录节点的访问情况，比如使用一个数据范围外的数据原地标记，这样的空间复杂度会是 O(1)。

### DFS
从图中某顶点 v 出发，不断访问邻居，邻居的邻居直到访问完毕。
```JavaScript
var dfs = function(v){
  visited[v] = true
  for(const v 的每个邻接点W){
    if(!visited[v]){
      dfs(v)
    }
  }
}
```

### BFS

1. 顶点 v 入队列
2. 当队列非空时则继续执行，否则算法结束
3. 出队列取得队头顶点 v；访问顶点 v 并**标记顶点 v 已被访问**
4. 查找顶点 v 的第一个邻接顶点 col
5. 若 v 的邻接顶点 col 未被访问过的，则 col 继续
6. 查找顶点 v 的另一个新的邻接顶点 col，转到步骤 5 入队列，直到顶点 v 的所有未被访问过的邻接点处理完。转到步骤 2


## 常见算法

### Bellman-ford - Shortest Path
can 1) detect negative cycle

Time: O(NM) n-1 rounds and iterate through all m edges
if no negative cycles, **all distances are final after n - 1 roudns**, because the shortest path can contain at most n - 1 edges
(a graph without cycle mostly has n - 1 edges)
possible more efficient: stop the algorithem if no distance can be reduced during a round

**check negative cycle**
run the algorithm N times, if the last round reduces any distance, the graph contains a negative cycle, regardless of the starting node. 
```
def bell_man(edges, s):
    dis = defaultdict(lambda: math.inf)
    dis[s] = 0
    for _ in range(n):
        for u, v, w in edges:
            if dis[u] + w < dis[v]:
                dis[v] = dis[u] + w
    //侦测是否有负weight，无论起点在哪儿都可以用这个方法
    for u, v, w in edges:
        if dis[u] * w < dis[v]:
            return -1

    return dis

```

```
  for (int i = 1; i <= n; i++) distance[i] = INF;

  distance[x] = 0;

  for (int i = 1; i <= n-1; i++) {
    for (auto e : edges) {
    int a, b, w;
    tie(a, b, w) = e;

    distance[b] = min(distance[b], distance[a]+w);
    }
  }

```
### DIJKSTRA 是图中任意两点的最短距离。单源。

以下是错的  
*如果不用堆的话没法保证每次都是最短的`路径`出现，图里有环的时候可能存在有超过一条路径到某个点的情况。
比如`[[1,2,1],[2,3,2],[1,3,4]]`从1开始出发，有 1->2->3 和 1->3两条路径*

算法的基本思想是贪心，每次都遍历所有邻居，并从中找到距离最小的，本质上是一种广度优先遍历。  O(NM)
这里我们借助**堆**这种数据结构，使得可以在 **logN** 的时间内找到 cost 最小的点。
O(N + mlogM) m edges, n nodes => O(NlogN)
because the algorithm goes through all nodes of the graph and adds for each edge at most one distance to the priority queue.

A remarkable property in Dijkstra’s algorithm is that whenever a node is
selected, its distance is final.
不能有负权  


LC778
steps  
1) initiate all distance to be infinite, and starting node to be 0
2) selecte a node that is not visited & the distance is as small as possible (1st one is the starting node)
3) when a node is selected, the algorithm goes through all edges that start at the node and reduces the distances using them
4) the remarkable property 




### floyd_warshall 算法
解决任意两点距离的算法，多远最短路径。也是单元最短路径的经典动态规划算法。相比上面的 dijkstra 算法， 由于其计算过程会把中间运算结果保存起来防止重复计算，因此其特别适合求图中任意两点的距离，基本思想是动态规划。  
该算法的时间复杂度是 O(N^3)空间复杂度是 O(N^2)，其中 N 为顶点个数。

The
following code constructs a distance matrix where distance[a][b] is the shortest
distance between nodes a and b. First, the algorithm initializes distance using
the adjacency matrix `graph` of the graph:
```
for (int i = 1; i <= n; i++) {
  for (int j = 1; j <= n; j++) {
    if (i == j) distance[i][j] = 0;
    else if (graph[i][j]) distance[i][j] = graph[i][j];
    else distance[i][j] = INF;
  }
}
```
After this, the shortest distances can be found as follows:
```
for (int k = 1; k <= n; k++) {
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
    distance[i][j] = min(distance[i][j],
    distance[i][k]+distance[k][j]);
    }
  }
}

```


