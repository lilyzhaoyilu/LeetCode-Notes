# 图 Graph

* 点 vertice: 代表事物
* 链接 link/edge: 代表事物间的关系
图论是一种表示`多对多`关系的数据结构。
图是由顶点和边组成的，可以无边，但至少有一个顶点。

**N代表点的个数，M代表edges的个数，下同。**

- [基本概念](#基本概念)  
- [图的建立](#图的建立)  
- [图的遍历](#图的遍历)  
- [常见图算法-最短距离](#常见图算法-最短距离)  
- [Spanning Trees 生成树](#spanning-trees-生成树)   
- [拓扑排序 Topological Sort](#拓扑排序-Topological-Sort)
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

## 图的建立和代表 Graph Represnetation

1. **Adjacency List**    
Each node x in teh graph is assinged an adjacency list that consists of nodes to which there is an edge from x.   
For undirected graph, store both ways.  
```
1 -> 2 && 1->3
adj[1].push(2)
adj[1].push(3)

//undirected 1 - 2
adj[1].push(2)
adj[2].push(1)

//weighted
   5(i am the weight!)
1 -> 2
adj[1].push([2,5])
```

*advantage: efficiently find the nodes to which we can move from a given node through an edge*

2. **Adjacency Matrixs**  
It is a 2-d array that indicates which edges the graph contains. 
```
adj[a][b] = 1 || 0 (true/false)  or weight
```
*advantage: efficiently check from an adjancency matrix if there is an edge between two nodes*


3. **Edge List**   
It contains **all edges** of a graph in some order.  
`const edges = [[a,b,w], [c,d,w2]]...  `   
It is convenient if the algorithm processes all edges of the graph and it is not needed to find edges that start at a given node. 


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

## 常见图遍历应用
例题 LC261 以图判树
### 查询是否连接图
即从随便某个点开始，看是否每个点都能访问到剩余的点；或者说visited.size == n 
### 查询是否有环
A graph contains a cycle if during a graph traversal, we find a node whose neighbor(other than the previous node in the current path) has alreayd been visited. 


### bipartitie 二分性
A graph is bipartite if its nodes can be colored using two colors so that there are
no adjacent nodes with the same color.  
1. colorstarting node blue, all its neighbors red, all their neighbors blue, and so on. 
2. If at some point of the search we notice that two adjacent nodes have the same color, this means that the graph is not bipartite.

Otherwise the graph is bipartite and one coloring has been found.   
[二分性模板题LC785](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/Basic200II/Graph%26Topo/LC785.%20Is%20Graph%20Bipartite%EF%80%BF.md)  
LC886  
  
## 常见图算法-最短距离 
1. [Bellman-Ford](#Bellman-Ford)  
2. [Dijkstra](#Dijkstra)
3. [Floyd Warshall](Floyd-Warshall)  

N:number of nodes ; M: number of edges
|            | Bellman Ford  | Dijkstra |  Floyd Warshall   |
| -------------| ------------- | ------------- |  ------------- |
| 简介       | 建立edges list [(u,v,w)]，从1..n遍历所有点；如果有更小的就更新（遍历n-1)次；再遍历一次如果还有更新就可以检测到图内有环  | 建立图，每次挑选最小的weight进行下一轮遍历，每个遍历完的就是final。可用堆加速。  | 动态规划，得到图中所有两点之间最短距离。多源。 本质是寻找是否有k点使得[i][j]距离更短 |
| 初始化| edges list, distance list(inf) | graph, distance/weight map(inf), visited, minHeap |  K, adjcency matrix, distance(inf) |
| 能提供| 起始点最短路径，是否有环，是否有负权   | 起始点到所有点最短路径 | 所有点到所有点最短路径 |
| 负权| 可以在n round检查是否有   | 有的话就不能用Dijkstra |  ~？ |
| 检测环| 可以在n round检查是否有（如果有更新就是有）   | 有的话就不能用Dijkstra |  ~？ |
| 时间复杂| O(nm) (n-1) rounds of all m edges  | 普通：O(NM)    |O(N^3) 三层遍历: k, i, j  |
| 时间复杂优化|   |**有堆：O(N + mlogm)** goes through all nodes of  the graph and adds for each edge at most one distance to the priority queue  | |
| 空间复杂| O(N)  | O(M)堆的大小  |O(N^2) dp表格  |
| notes|   | D可以一次遍历后求出源点到所有点的最短距离，也可以多个源点，这样就能知道所有源点到所有其他点的最短距离 |  |

[模板题Bellman-ford & DIJKSTRA LC 743 ](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/Basic200II/Graph%26Topo/LC743.%20Network%20Delay%20Time.md)   

### Bellman Ford

**应用**
- 单源最短距离
- 检测是否有负数w （第n round遍历如果有update，无视起始点）
- 检测是否有环  （第n round遍历如果有update，无视起始点）

**复杂度**  
时间： O(NM)  
 n-1 rounds and iterate through all m edges
if no negative cycles, **all distances are final after n - 1 rounds**, because the shortest path can contain at most n - 1 edges (a graph without cycle mostly has n - 1 edges)   
possible more efficient: stop the algorithem if no distance can be reduced during a round
 
``` JavaScript
略写...下面的不能跑
var bellmanFord = function(edges){
    //1. build edges = [(u,v,w)]
    //2. build distance = new Map to record shortest distance 
    //3. set starting node's distance = 0, other Inf
    //4. itarate edges, update distances
    dis = new Map()
    dis.set(startingNode, 0)
    
    for _ in range(n):
        for u, v, w in edges:
            if dis[u] + w < dis[v]:
                dis[v] = dis[u] + w

    //侦测是否有负weight || 有环
    for u, v, w in edges:
        if dis[u] + w < dis[v]:
            return -1

    return dis
}

```

### Dijkstra   

**简介**  
算法的基本思想是贪心，每次都遍历所有邻居，并从中找到距离最小的，本质上是一种广度优先遍历。   

The algorithm goes through all nodes of the graph and adds for each edge at most one distance to the priority queue.  O(NM)  

这里我们借助**堆**这种数据结构，使得可以在 **logN** 的时间内找到 cost 最小的点。
O(N + mlogM) m edges, n nodes => O(NlogN)    

A remarkable property in Dijkstra’s algorithm is that whenever a node is selected, its distance is final.


**steps**  
1. 建立图，建立distance，建立visited（也可以用distance来代表visited，因为distance只要有的，就代表visited过）
2. 建立queue，push第一个点进去；
3. while(queue),更新每个pop出来的点的dis
4. 在graph[curnode]里面，寻找还没有被访问过的点，并加入queue。注意这时候加入queue的cost 是 curCost + 图里的weight

1) initiate all distance to be infinite, and starting node to be 0
2) selecte a node that is not visited & the distance is as small as possible (1st one is the starting node)
3) when a node is selected, the algorithm goes through all edges that start at the node and reduces the distances using them
4) the remarkable property 




### Floyd Warshall
解决任意两点距离的算法，多远最短路径。也是单元最短路径的经典动态规划算法。相比上面的 dijkstra 算法， 由于其计算过程会把中间运算结果保存起来防止重复计算，因此其特别适合求图中任意两点的距离，基本思想是动态规划。  
该算法的时间复杂度是 O(N^3)空间复杂度是 O(N^2)，其中 N 为顶点个数。

[模板题 1462. Course Schedule IV](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/Basic200II/Graph%26Topo/LC1462.%20Course%20Schedule%20IV.md)

steps
1. 建立图
2. 根据图更新distance[n][n]; 1）如果是一个点就是0；2）有图的话就是图上的距离；3）不然的话infinity 
3. n 次遍历 distance， （N^3), 更新距离 `distance[i][j] = min(distance[i][j],distance[i][k]+distance[k][j]);`


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

## Spanning Trees 生成树
[例题LC1584 Kruskal’s & Prim](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/Basic200II/Graph%26Topo/LC1584.%20Min%20Cost%20to%20Connect%20All%20Points.md)
### Basics
A spanning tree of a graph consits of all nodes of the graph and some of the edges of the graph so that there is a path between any two nodes. Spanning trees, like trees, are **connected** and **acyclic**. **Several ways** to construct a spanning tree from a graph. 

**weight of a spanning tree**: sum of its edge weights.

**minimum spanning tree & maximum spanning tree**: based on the weight. They can be not unique in a graph / there can be several of them in a graph.
|            | Kruskal  | Prim |  
| -------------| ------------- | ------------- | 
| 简介| 建立edges和并查集（每个点都是一个元），将edges从weight小到大来合并集。当p1和p2不是一个集的时候，链接他们，并且累加cost。当链接了n次，代表完成//当两个点连通，代表完成。最后一个连接的weight总是最大的。 | 类似Dijkstra。开启一个新集（visited）和dist（用来记录当前搜过的最短路径），随便开始一个点。每次加入和当前node的cost最低的(更低的) && 没有被链接过的 edge（可以用heap优化）。当visited的大小和原集相同，就完成了。 | 
| 初始化 | edges list(sorted), union find | visited, weightMap(minheap) | 
| 本质 | 基于图的联通性贪心算法/加边法 | 基于堆的贪心算法/加点法 | 
| 适合图形 | 稀疏图(点多边少，因为以边为单元) | 稠密图（因为以点为单元） | 
| 时间复杂度 | O(mlogm)因为有sort，其中优化过的并查集 unit & find都应该是logN | O(n+mlogm) 堆优化 |

#### Kruskal’s algorithm (O(MlogM))
1. 首先建立edges lists，edges = [[p1,p2, cost]]
2. 按照cost 从小到大排序 (O(MlogM))
3. 建立并查集，每个node是自己一个集  
4. 遍历已经sort过的edges来合并集，
5. 当发现p1和p2不是同一个集的时候，代表他们还没有被链接过。链接他们，并且把cost累计到形成min spinning tree的cost中去
KruKal 是基于图的联通性贪心算法
复杂度  
find是logN(假设chain的长度是logN)， unite也是logN。 并查集unit省时间的办法：always connect the root of the smaller set to the root of larger set, the length of any chain will be O(logN)  

Kruskal算法，该算法以边为单元，时间主要取决于边数，比较适合于稀疏图(点多边少)


#### Prim’s algorithm
Similar to Dijkstra’s algorithm, can use priority queue.
而 Prim 则是基于堆的贪心算法
**time: O(n+mlogm)**
Prim算法，该算法以顶点为单元，与图中边数无关，比较适合于稠密图
1. initialize a new set for visited nodes
2. adds an abitrary node to the tree
3. always choose a **minimum-weight edge** that adds a **new node** to the tree  
2 is where it is similar to Dijstra & can be optimized with heap
4. if all nodes have been added/ the size of union is n, the minimum spinning tree has been found


## 拓扑排序 Topological Sort
A topological sort is an ordering of the nodes of a directed graph such that if
there is a path from node a to node b, then node a appears before node b in the
ordering.   
在计算机科学领域，有向图的拓扑排序是对其顶点的一种线性排序，使得对于从顶点 u 到顶点 v 的每个有向边 uv， u 在排序中都在之前。当且仅当图中没有定向环时（即有向无环图），才有可能进行拓扑排序。  
  
典型的题目就是给你一堆课程，课程之间有先修关系，让你给出一种可行的学习路径方式，要求先修的课程要先学。任何有向无环图至少有一个拓扑排序。已知有算法可以在线性时间内，构建任何有向无环图的拓扑排序。  
**Has to be Acyclic**  
任何有向无环图至少有一个拓扑排序。已知有算法可以在线性时间内，构建任何有向无环图的拓扑排序。

## Kahn 算法
假设 L 是存放结果的列表，先找到那些入度为零的节点，把这些节点放到 L 中，因为这些节点没有任何的父节点。

然后把与这些节点相连的边从图中去掉，再寻找图中的入度为零的节点。

对于新找到的这些入度为零的节点来说，他们的父节点已经都在 L 中了，所以也可以放入 L。

重复上述操作，直到找不到入度为零的节点。

如果此时 L 中的元素个数和节点总数相同，说明排序完成；如果 L 中的元素个数和节点总数不同，说明原图中存在环，无法进行拓扑排序。

steps  
1. 建立图 和 indegree
2. 把indegree 为 0 的节点们放入queue中  
3. 把节点相连的边从图中去掉，如果这时候有新的indegree == 0的点，继续2  
4. 直到queue为空，查看 visited的点和总节点数。如果相同，拓扑完成；不然的话，有环。

*当我们把某一个node从queue中拿出来执行，这意味着什么？*  
意味着以该node的指向其他点的边都消失了，也就是这个node的outdegree变成了0.

*每循环一层代表什么？*  
在BFS的循环中，每一层代表离出发点的距离又远了1.