## Dynamic Programming

https://leetcode-solution.cn/solutionDetail?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fazl397985856%2Fleetcode%2Fcontents%2Fthinkings%2Fdynamic-programming.md&type=1
https://mp.weixin.qq.com/s/afRM6owOL_KTKekmW7wzpQ

### hints to use

1. 求方案总数字(90%)
2. 求最值(80%)
3. 求可行性 (80%)

_不适⽤的场景：_

- 找所有具体的⽅案（准确率 99%）
- 输⼊数据⽆序(除了背包问题外，准确率 60%~70%)
- 暴⼒算法已经是多项式时间复杂度（准确率 80%）

### key factors

1. 状态 - 递归的定义
2. 方程 - 递归的拆解
3. 初始化 - 递归的出口
4. 答案 - 递归的调用

### 复杂度

时间  
O(状态总数 _ 每个状态的处理耗费)
O（状态总数 _ 决策树）

空间复杂度  
O（状态总数）
滚动优化 （状态总数 / n） n 是被滚动掉的那个维度

### 常见题型

1. 背包
   背包
   状态 state
   dp[i][j] 表⽰前 i 个数⾥挑若⼲个数是否能组成和为 j
   ⽅程 function
   dp[i][j] = dp[i - 1][j] or dp[i - 1]j - A[i - 1]] 如果 j >=
   A[i - 1]
   dp[i][j] = dp[i - 1][j] 如果 j < A[i - 1]
   第 i 个数的下标是 i - 1，所以⽤的是 A[i - 1] ⽽不是 A[i]
   初始化 initialization
   dp[0][0] = true
   dp[0][1...m] = false
   答案 answer
   使得 dp[n][v], 0 s <= v <= m 为 true 的最⼤ v
   多重背包
   状态 state
   dp[i][j] 表⽰前 i 个物品挑出⼀些放到 j 的背包⾥的最⼤价值和
   ⽅程 function
   dp[i][j] = max(dp[i - 1]j - count _ A[i - 1]] + count _ V[i

- 1])
  其中 0 <= count <= j / A[i - 1]
  初始化 initialization
  dp[0][0..m] = 0
  答案 answer
  dp[n][m]

2. 区间型 - 题目中有 subarray/ substring
   ⼤区间依赖⼩区间
   ⽤ dp[i][j] 表⽰数组/字符串中 i, j 这⼀段区间的最优值/可⾏性/⽅案总数
   状态 state
   dp[i][j] 表⽰数组/字符串中 i,j 这⼀段区间的最优值/可⾏性/⽅案总数
   ⽅程 function
   dp[i][j] = max/min/sum/or(dp[i,j 之内更⼩的若⼲区间])

3. 匹配型
   通常给出两个字符串，两个字符串的匹配值依赖于两个字符串传前缀的匹配值
   通常可以滚动优化  
   状态 dp[i][j] 表示 s[i..j]

4. 划分性  
    前缀型动态划分
   如果指定了要划分为⼏个部分：
   dp[i][j] 表⽰前 i 个数/字符划分为 j 个 部分的最优值/⽅案数/可⾏性
   如果没有指定划分为⼏个部分:
   dp[i] 表⽰前 i 个数/字符划分为若⼲个 部分的最优值/⽅案数/可⾏性
   状态 state
   指定了要划分为⼏个部分: dp[i][j] 表⽰前 i 个数/字符划分为 j 个部分的最优值/⽅案数/可⾏
   性
   没有指定划分为⼏个部分: dp[i] 表⽰前 i 个数/字符划分为若⼲个部分的最优值/⽅案数/可⾏
   性

5. 接龙型
   通常会给⼀个接⻰规则，问你最⻓的⻰有多⻓
   状态表⽰通常为: dp[i] 表⽰以坐标为 i 的元素结尾的最⻓⻰的⻓度
   ⽅程通常是: dp[i] = max{dp[j] + 1}, j 的后⾯可以接上 i
   LIS 的⼆分做法选择性的掌握，但并不是所有的接⻰型 DP 都可以⽤⼆分来优化
   状态 state
   状态表⽰通常为: dp[i] 表⽰以坐标为 i 的元素结尾的最⻓⻰的⻓度
   ⽅程 function
   dp[i] = max{dp[j] + 1}, j 的后⾯可以接上 i
