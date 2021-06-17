# Search

搜索一般指在**有限**的状态空间中进行枚举，通过**穷尽所有的可能**来找到符合条件的解或者解的个数。  
实际上搜索题目本质就是将题目中的**状态映射为图中的点**，将**状态间的联系映射为图中的边**。  
根据题目信息构建状态空间，然后对状态空间进行遍历，遍历过程需要记录和维护状态，并通过剪枝和数据结构等提高搜索效率。

## 深度优先遍历 DFS

### 遍历顺序

那么如果搜索过程中，当前点的结果需要依赖其他节点（大多数情况都会有依赖），那么遍历顺序就变得重要。

1. 前序
   如果当前节点需要依赖其父节点信息

2. 后序
   如果当前节点需要依赖其子节点计算信息，自底向上

### 深度优先遍历技巧

1. 迭代加深（带参，剪枝）
2. 双向搜索
   有时候问题规模很大，直接搜索会超时。此时可以考虑从起点搜索到问题规模的一半。然后将此过程中产生的状态存起来。接下来目标转化为在存储的中间状态中寻找满足条件的状态。进而达到降低时间复杂度的效果。该算法，本质上是将位于指数位的常数项挪动到了系数位。

   1775  
   16.最接近的三数之和  
   1049.最后一块石头的重量 II  
   1774.最接近目标价格的甜点成本

## 广度优先遍历 BFS
我们不断从队头取出状态，然后将此状态对应的决策产生的所有新的状态（对于BFS来说是状态空间中的当前点的邻边）推入队尾，重复以上过程直至队列为空即可。 
队列有： 单调性和二值性 
求最短距离：记录dist，也可以防止环的产生。第一次到达一个点后再次到达此点的距离一定比第一次到达大。
126

**BFS 的核心在于求最短问题时候可以提前终止。**  
层次遍历是一种不需要提前终止的 BFS 的副产物。
BFS 也不是树独有的。  
BFS 使用的是 queue， queue 是 FIFO
```JavaScript
const visited = {}
function bfs() {
 let q = new Queue()
 q.push(初始状态)
 while(q.length) {
  let i = q.pop()
  if (visited[i]) continue
  for (i的可抵达状态j) {
   if (j 合法) {
    q.push(j)
   }
  }
 }
 // 找到所有合法解
}
```
#### 复杂度

时间复杂度：O(n + m)
n 是点数, m 是边数
空间复杂度：O(n)

### 双向搜索  
让我们继续回到这道题。为了能够判断两者是否交汇，我们可以使用两个 hashSet 分别存储起点集合终点集。当一个节点既出现起点集又出现在终点集，那就说明出现了交汇。  

**基本思路**
1. 创建**两个队列**分别用于两个方向的搜索
2. 创建**两个哈希表**用于解决**相同节点重复搜索**和**记录转换次数**
3. 为了尽可能让两个搜索方向‘平均’：每次从队列中取值进行扩展时，先判断哪个队列容量较少
4. 如果在搜索过程中**搜到对方搜过的节点**，则找到了最短路径。

```
// 只有两个队列都不空，才有必要继续往下搜索
// 如果其中一个队列空了，说明从某个方向搜到底都搜不到该方向的目标节点
// memo {word => steps from origin}
while(!queue1.isEmpty() && !queue2.isEmpty()) {
    if (queue1.size() < queue2.size()) {
        update(queue1, memo1, memo2);
    } else {
        update(queue2, memo2, memo1);
    }

    
}

var update = function(curQueue, curMemo, theOtherMemo){
   const curWord = curQueue.shift()

   search all possible next Word from curWord
   1. if curMemo has it, continue
   2. if otherMemo has it, return curMemo.get(curWord) + otherMemo.get(nextWord) + 1
   3. else, push the possible next step into queue & record it into the curMemo
                  curMemo(nextWord, curMemo.get(curWord) + 1)
  
}
```

**保存笛卡尔积**  
127. 单词接龙
140. 单词拆分 II
816. 模糊坐标  



[双向搜索宫水三叶](https://mp.weixin.qq.com/s/CsAx6FydjW4U0KFafVwb1Q)
https://leetcode-solution.cn/solutionDetail?type=2&id=3003&max_id=3008
