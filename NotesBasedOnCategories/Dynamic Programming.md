## Dynamic Programming

[动态规划专题](https://leetcode-solution.cn/solutionDetail?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fazl397985856%2Fleetcode%2Fcontents%2Fthinkings%2Fdynamic-programming.md&type=1)  
[记忆化递归转变动态规划](https://mp.weixin.qq.com/s/afRM6owOL_KTKekmW7wzpQ)  
[还有一些来自 Lucifer 的插件](https://chrome.google.com/webstore/detail/leetcode-cheatsheet/fniccleejlofifaakbgppmbbcdfjonle?hl=en-US%E3%80%82)

### hints to use

1. 求方案总数字(90%)
2. 求最值(80%)
3. 求可行性 (80%)

_不适⽤的场景：_

- 找所有具体的⽅案（准确率 99%）
- 输⼊数据⽆序(除了背包问题外，准确率 60%~70%)
- 暴⼒算法已经是多项式时间复杂度（准确率 80%）

### key factors

1. 状态 - 递归的定义 2. 方程 - 递归的拆解 3. 初始化 - 递归的出口 4. 答案 - 递归的调用

Lucifer:
状态，枚举，转移方程（选择）

### 复杂度

时间:
O(状态总数 \* 每个状态的处理耗费)
O（状态总数 \* 决策树）

空间复杂度 O（状态总数）// 滚动优化 （状态总数 / n） n 是被滚动掉的那个维度

## 常见题型

- [常见题型:最长上升子序列](#常见题型:最长上升子序列)
- [常见题型:最长公共子序列](#常见题型:最长公共子序列)
- [常见题型:爬楼梯](#常见题型:爬楼梯)

### 常见题型:最长上升子序列

学习 https://lucifer.ren/blog/2020/06/20/LIS/  
[LC 300](https://leetcode-cn.com/problems/longest-increasing-subsequence/)  
**状态**：

1. dp[i] 表示以 s[i] 结尾的 xxxx
2. dp[i] 表示到 s[i] 为止的 xxxx

枚举： 通常都是两层循环，一层循环固定左端点，另一层循环固定右端点进行枚举
转移方程：根据题目选择是否和 s[j] 结合，取最大，最小或计数即可

```Python
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 0: return 0
        dp = [1] * n
        ans = 1
        for i in range(n):
            for j in range(i):
                if nums[i] > nums[j]:
                    dp[i] = max(dp[i], dp[j] + 1)
                    ans = max(ans, dp[i])
        return  ans
```

### 常见题型:最长公共子序列

学习 https://lucifer.ren/blog/2020/02/13/LCS/  
[LC1143](https://leetcode-cn.com/problems/longest-common-subsequence/)  
**状态：**

1. dp[i][j] 表示以 s1[i],s2[j] 结尾的 xxxx
2. dp[i][j] 表示到 s1[i],s2[j] 为止的 xxxx  
   或者 ij 可以表示长度，这样方便 dp[0][0] || dp[i][0]这样的 base case

**枚举**：通常都是两层循环，一层循环固定 s1 的右端点，另一层循环固定 s2 的右端点进行枚举  
**状态转移**：根据题目以及 s[i]， s[j] 的关系，取最大，最小或计数即可

```Python
class Solution:
    def longestCommonSubsequence(self, A: str, B: str) -> int:
        m, n = len(A), len(B)
        ans = 0
        dp = [[0 for _ in range(n + 1)] for _ in range(m + 1)]
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if A[i - 1] == B[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                    ans = max(ans, dp[i][j])
                else:
                   //如果可以不连续
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
        return ans

```

### 常见题型:爬楼梯

**状态：**

1. 一维通常是 dp[i] 表示以 nums[i] 结尾的 xxxx
2. 二维通常是 dp[i][j] 表示以 grid[i][j] 结尾的 xxxx

**枚举**：一维就是一层循环枚举所有的 nums，二维就是两层循环枚举所有的 grid

**状态转移**：

1. 一维通常是当前格子和前面的两个格子的关系，可能是最大最小或计数。  
   dp[i] = dp[i - 1] + dp[i - 2]，这也叫递推式，因为不涉及决策。

2. 二维通常是当前格子和上方以及左方的两个格子的关系，可能是最大最小或计数。
   dp[i][j] = dp[i - 1][j] + dp[i][j-1]，这也叫递推式，因为不涉及决策。
3. 根转移方程不难看出， 这种题目通常都可以滚动数组优化

![](https://tva1.sinaimg.cn/large/0081Kckwly1glpom6u30yj30u00v1n61.jpg)
[LC70]

### 常见题型

1. 背包

   **背包**  
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

   **多重背包**  
    状态 state  
    dp[i][j] 表⽰前 i 个物品挑出⼀些放到 j 的背包⾥的最⼤价值和  
    ⽅程 function  
    dp[i][j] = max(dp[i - 1]j - count _ A[i - 1]] + count _ V[i- 1])  
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
