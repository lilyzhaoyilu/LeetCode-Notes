## Union Find 并查集

学习 https://mp.weixin.qq.com/s/aHdMcSAu2cpHgRq46yW3dw  
- [Hints to Use](#Hints-to-Use)  
- [基本操作](#基本操作)  
- [并查集模板](#并查集模板)  
- [带权并查集](#带权并查集)  
- [#检查是否有环](#检查是否有环)

### Intro

并查集使用的是一种树形的数据结构，用于处理一些不交集(Disjoint Sets)的合并和查询。  
只能回答‘路径连通与否’ 不能回答 ‘具体连通路径是什么’。
也可以用来检测图里是否有环。
Disjoint Sets: in Math, two sets are said to be disjoint setts if they have no element in common.

并查集维护了一个不相交动态几何$S = {S1, S2, ... Sn}$。

- 代表元：我们用集合中的某个元素来代表这个集合
- 并查集元素一般用树来表示。
- 多棵树构成一个并查集森林。
- 树根就是代表元。

#### Hints to Use

- 需要查询图的联通状况
- 需要支持快速合并两个合集
- 检测是否有环 - 将边合并，如果在合并之前就同元，那么就有环
- 确定无向图的连通分量
- 亲戚问题，是否同个祖先

#### Complexity

**Time Complexity**   
  **Union/合并**  
  时间复杂度是 2find * 合并部分，其中合并合并部分的时间是O(1)，所以合并的时间复杂度是find的时间复杂度。

  **Find**  
  复杂度是树的高度。N 是这个树的数据数。
  最坏的情况，树是一条线，复杂度就是O(N)  
  当树是一个树, 复杂度是O(logN)  
  有了按秩合并的话，平均下来**趋近于**O(1)

- Space: O(N)

#### 基本操作

- Make Set(x): 构建并查集

```
function MAKE-SET(x) // root ->  我爸爸是我自己
  x.parent = x

```

- Find (x) （确定元素属于哪个子集，它可以被用来确定两个元素是否属于同一个子集

```
带路径压缩
FIND-SET(x)
  if x != x.parent
    return FIND-SET(x.parent)
  return x.parent

```

- Union(x,y) （俩子集合并

```
没优化
UNION(x,y)
  xRoot = FIND-SET(x)
  yRoot = FIND-SET(y)
  xRoot.parent = yRoot
```

```
CONNECT(x,y)


```

#### Optimization

因为 n-1 此的 Union 操作可能会构造出一棵敲好含有 n 个节点的线性链的树，就变成单链表了。

1. 按秩合并 （按照秩序合并  
   秩：节点的高度， 将小指向大

```
带秩的数据节点 - 谁大谁是爸爸

Node{
  rank: 0,
  parent: Node
}

UNION(x, y){ //大的当爸爸
  yParent = FIND-SET(y)
  xParent = FIND-SET(x)

  if xParent.rank > yParent
    yParent.parent = xParent
    xParent.rank += yParent.rank
  else
    xParent.parent = yParent
    yParent.rank += xParent.rank

  count--
}


```

2. 路径压缩 在`FIND-SET`的时候将节点的 parent 指向元
我们知道每次 find 都会从当前节点往上不断搜索，直到到达根节点，因此 find 的时间复杂度大致相等于节点的深度，树的高度如果不加控制则可能为节点数，因此 find 的时间复杂度可能会退化到 O(n)O(n)。而如果进行路径压缩，那么树的平均高度不会超过 lognlogn，如果使用了路径压缩和下面要讲的按秩合并那么时间复杂度可以趋近 O(1)O(1)，具体证明略。不过给大家画了一个图来辅助大家理解。
```
def find(self, x):
    if x != self.parent[x]:
        self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    return x
```

### 并查集模板

```JavaScript
class UnionFind{
  constructor(){
    this.parents={} //{dependency: parent}
    this.count = 0
    this.rank = []
  }

  makeSet(x){
    this.parents[x] = x;
    this.rank[x] = 1
    this.count++
  }

  //基础findSet
  findSet(x){
    while(this.parents[x] != x){
      x = this.parents[x]
    }
    return x
  }

  // 路径压缩 findSet(x)

  findSet(x){
    if (this.parents[x] != x){
      this.parents[x] = this.findSet(this.parents[x])
      return this.parents[x]
    }
    return x
  }

  // union(x, y){
  //   const rootX = this.findSet(x)
  //   const rootY = this.findSet(y)
  //   if(rootX == rootY) return;
  //   this.parents[rootX] = rootY //y是x的家长
  //   this.count--
  // }

  //按秩合并union
  union(x,y){
    const rootX = this.findSet(x)
    const rootY = this.findSet(y)
    if(rootX == rootY) return;

    // if(this.rank[rootX] > this.rank[rootY]){
    //   this.parents[rootY] = rootX
    // }else if(this.rank[rootY] > this.rank[rootX]){
    //   this.parents[rootX] = rootY
    // }else{
    //   this.parents[rootY] = rootX
    //   this.rank[rootX]++
    // }

    if(this.rank[rootX] < this.rank[rootY]){
      [this.rank[rootX], this.rank[rootY]] = [[this.rank[rootY], this.rank[rootX]]
    }
    this.rank[rootX] += this.rank[rootY]
    this.parents[rootY] = rootX

    this.count--
  }

  size(){
    return this.count
  }
  //纯粹为了看看是啥...
  all(){
    return this.parents;
  }
}

```
### 数岛屿个数
给每个岛屿建立子集，
然后如果顺序遍历可以只查右和下。每次建立count++，每次合并count--

不能默认每个都是子集，不然岛屿size == 1 的时候没法和 0 区分开。


### 带权并查集

权要有可传导性  
[LC399. Evaluate Division](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/Basic200/UnionFind/LC399.%20Evaluate%20Division.md)

### 检查是否有环

```
if union.isConnected(nodea, nodeb) return false
union.union(nodea, nodeb)
```

思路： 只需要将边进行合并，并在合并之前判断是否已经联通即可，如果合并之前已经联通说明存在环。  
[LC 684. Redundant Connection](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/Basic200/UnionFind/LC684.%20Redundant%20Connection.md)
