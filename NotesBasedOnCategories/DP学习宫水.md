# Dynamic Programming II

## 宫水三叶 - 路径规划

[宫水三叶路径规划](https://mp.weixin.qq.com/s?__biz=MzU4NDE3MTEyMA==&mid=2247485580&idx=1&sn=84c99a0a8ab7b543c3678db577309b97&scene=21#wechat_redirect)  

#### 1575
我们知道，如果要实现 DFS 的话，通常有以下几个步骤：

设计好递归函数的「入参」和「出参」
设置好递归函数的出口（Base Case）
编写「最小单元」处理逻辑


要想知道如何优化，先要分析现有算法所做的工作：
1. 转移 n * feul 个状态
2. 每次状态要枚举n个点

通胀需要转移的状态数量是无法减少的，所以可以尝试从第二点入手。

## 宫水三叶 - 背包系列
[宫水三叶背包](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU4NDE3MTEyMA==&action=getalbum&album_id=1751702161341628417&scene=173&from_msgid=2247485638&from_itemidx=1&count=3&nolastread=1#wechat_redirect    
)  

泛指一类「给定价值与成本」，同时「限定决策规则」，在这样的条件下，如何实现价值最大化的问题。

NP完全问题(Knapsack problem)是无法直接求解的问题，只能通过**穷举**+**验证**的方式进行求解。  
因为穷举，想到动态规划，并且这个问题也满足**无后效性**的要求。  

### 背包系列0-1背包

为有 N 个物品，问在不超过背包重量 V 的情况下，能够装入物品的最大价值，每个物品只能使用一次。
w[i]是第 i 个物品的重量，v[i]是第 i 个物品的价值。

```
输入: N = 3, V = 4, v = [4,2,3], w = [4,2,3]
输出: 4
解释: 只选第一件物品，可使价值最大。

输入: N = 3, V = 5, v = [4,2,3], w = [4,2,3]
输出: 5
解释: 不选第一件物品，选择第二件和第三件物品，可使价值最大。
```

#### 0-1背包：dp[N][C+1]解法
设计一个dfs函数对方案进行枚举：   
`dfs = (v, w, i, capacityLeft)` i代表枚举到哪件物品， capacityLeft;返回值是`最大价值`   

然后设计出dp数组   
`dp[i][j] = maxValue` dp[i件物品][j的容量] = 最大价值    

根据最后一步来推倒状态转移方程:   
对于第`i`件物品，我们有`选`和`不选`： 对于`不选 dp[i][j] = dp[i - 1][j]`， 对于`选 dp[i][j] = dp[i-1][j - w[i]] + v[i] if (j - w[i] >= 0)`   

**所以可得`dp[i][c] = max(dp[i - 1][c], dp[i - 1][c - w[i]] + v[i])`**

```JavaScript
const maxValue = (N, C, v, w)=>{
  const dp = Array.from({length: N}).map(() => Array.from({length:C + 1}))

  // 处理i= 0 的时候
  for(let j = 0; j <= C; j++){
    dp[0][j] = j >= w[0] ? v[0] : 0
  }

  for(let i = 1; i < N; i++){
    for(let j = 0; j <= C; j++){
      //容量可以选择
      if(j >= w[i]){ 
        dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j - w[i]] + v[i])
      }else{
        //容量不能选择
        dp[i][j] = dp[i-1][j]
      }
    }
  }

  return dp[N - 1][C]
}
```

时间复杂度：N * C （一共有N* C个状态需要转移）  
空间复杂度：N * C   


#### 0-1背包：dp[2][C+1]解法(滚动数组)
根据转移方程，我们发现`dp[i]`只依靠`dp[i - 1]`，因此可以用一个只有两行的数组来存储结果。根据当前计算的行号是偶数还是奇数来交替使用第0行和第1行。   

奇偶性可以用 `i % 2` 或者 `i & 1`
```JavaScript
const maxValue = (N, C, v, w)=>{
  const dp = Array.from({length: 2}).map(() => Array.from({length:C + 1}))

  // 处理i= 0 的时候
  for(let j = 0; j <= C; j++){
    dp[0][j] = j >= w[0] ? v[0] : 0
  }

  for(let i = 1; i < N; i++){
    for(let j = 0; j <= C; j++){
      //容量可以选择
      if(j >= w[i]){ 
        dp[i & 1][j] = Math.max(dp[(i-1) & 1][j], dp[(i-1) & 1][j - w[i]] + v[i])
      }else{
        //容量不能选择
        dp[i & 1][j] = dp[(i-1) & 1][j]
      }
    }
  }

  return dp[(N - 1) & 1 ][C]
}
```
时间复杂度：N * C （一共有N* C个状态需要转移）
空间复杂度：C

#### 0-1背包：dp[C+1]解法(一维空间优化)
只保留**剩余容量**的维度： 观察原方程，发现只依赖上一行的 `c` 和 `c - w[i]`，且 `必然c - w[i] < c`，那么从后往前遍历就可以。

`f[j] = f[j - w[i]] + v[i]`

```JavaScript
const maxValue = (N, C, v, w)=>{
  const dp = Array.from({length:C + 1})

  for(let i = 0; i < N; i++){
    for(let j = C; j >= w[i]; j--){
      const no = dp[j]
      const yes = dp[j - w[i]] + v[i]
      dp[j] = Math.max(no, yes)
    }
  }

  return dp[C]
}
```
时间复杂度：N * C （一共有N* C个状态需要转移）   
空间复杂度：C


### 背包系列完全背包

`dp[i][j] = max(dp[i-1][j], dp[i - 1][j - k * w[i]] + k * v[i]) 其中 j - k * w[i] >= 0`
k是能装多少件就装多少件

#### 完全背包：dp[N][C+1]解法
```JavaScript
  const maxValue = (N, C, v, w)=>{
    const dp = Array.from({length:N}).map(() => Array.from({length:C + 1}))

    //预处理i = 0
    for(let j = 0; j <= C; j++){
      const maxK = Math.floor(j / w[0])
      dp[0][j] = maxK * v[0]
    }

    for(let i = 1; i < N; i++){
      for(let j = 0; j <= C; j++){
        const no = dp[i - 1][j]
        let yes = 0
        for(let k = 1; j < w[i] * k;k++){
          y = Math.max(y, dp[i - 1][j - k * w[i]]) + k * v[i])
        }
        dp[i][j] = Math.max(yes, no)
      }
    }

    return dp[N - 1][C]
  }

```
时间复杂度：O(N * C * C)   
    
#### 完全背包：dp[C+1]解法
[参考宫水](https://mp.weixin.qq.com/s?__biz=MzU4NDE3MTEyMA==&mid=2247486107&idx=1&sn=e5fa523008fc5588737b7ed801caf4c3&chksm=fd9ca184caeb28926959c0987208a3932ed9c965267ed366b5b82a6fc16d42f1ff40c29db5f1&scene=178&cur_album_id=1751702161341628417#rd)

**`dp[i][j] = max(dp[i - 1], dp[i][j - w[i]] + v[i])`**
在计算的时候，依赖于 `dp[i][j - w[i]]`需要确保i的值已经被更新，所以从小到大
一般性完全背包压缩公式：`f[j] = max(f[j], f[j - w[i]] + v[i])`
```JavaScript
  const maxValue = (N, C, v, w)=>{
    const dp =  Array.from({length:C + 1})

    for(let i = 0; i < N; i++){
      for(let j = 0; j <= C; j++){
        const no = dp[j]
        const yes = j - w[i] >= 0 ? dp[j - w[i]] + v[i] : 0
        dp[j] = Math.max(yes, no)
      }
    }

    return dp[C]
  }

```
  时间复杂度：O(N * C )

压缩是一样的么？？？

|   | 01背包  | 完全背包  |   |   |
|---|---|---|---|---|
|方程   | `dp[i][c] = max(dp[i - 1][c], dp[i - 1][c - w[i]] + v[i])`  | `dp[i][j] = max(dp[i - 1], dp[i][j - w[i]] + v[i])`  |   |   |
| 一维压缩 | `f[j] = f[j - w[i]] + v[i]`  |`f[j] = max(f[j], f[j - w[i]] + v[i])`   |   |   |
|   |   |   |   |   |

