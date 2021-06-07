## Dynamic Programming

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

- [常见题型:背包问题](#常见题型背包问题)
- [常见题型:区间型](#常见题型区间型)
- [常见题型:匹配型](#常见题型匹配型)
- [常见题型:划分型](#常见题型划分型)
- [常见题型:接龙型-线性](#常见题型接龙型-线性)
- [常见题型:数位型](#常见题型数位型)
- [常见题型:概率性](#常见题型概率性)
- [常见题型:博弈型](#常见题型博弈型)

### 常见题型:背包问题

**定义**：给定一个 target(可以是数字/字符串)和一个数组(可以是数字/字符串)。问：能否使用数组中的元素做各种排列组合得到 target。  
**状态**  
dp[i][j] 表⽰[0..i]⾥挑若⼲个数是否能组成和为 j

**方程**
1. 组合问题 dp[i]组合数 += dp[i - num]
2. True & false dp[i] = dp[i] || dp[i-num]
3. 最值 dp[i] = min(dp[i], dp[i - num] + 1)

**背包类型**

1. **0-1 背包**: 数组中元素不可重复使用。  
   nums 外 正  
   target 内 倒

2. **完全背包**：数组中元素可以被重复使用  
   nums 外 正  
   target 内 正

3. **组合问题**：考虑元素顺序  
   target 外
   nums 内

### 常见题型:区间型

**定义**: 题目中有 subarray/ substring, ⼤区间依赖⼩区间  
**状态**: ⽤ dp[i][j] 表⽰数组/字符串中 i, j 这⼀段区间的最优值/可⾏性/⽅案总数  
**方程**: dp[i][j] = max/min/sum/or(dp[i,j 之内更⼩的若⼲区间])

### 常见题型:匹配型

**定义**:通常给出两个字符串，两个字符串的匹配值依赖于两个字符串传前缀的匹配值 通常可以滚动优化  
**状态**:dp[i][j] 表示 s[i..j]  
[10. Regular Expression Matching](https://leetcode-cn.com/problems/regular-expression-matching/)

### 常见题型:划分型

**定义**: 是前缀型动态规划的⼀种, 有前缀的思想

**状态**:
如果指定了要划分为⼏个部分：  
dp[i][j] 表⽰前 i 个数/字符划分为 j 个 部分的最优值/⽅案数/可⾏性

如果没有指定划分为⼏个部分:  
dp[i] 表⽰前 i 个数/字符划分为若⼲个 部分的最优值/⽅案数/可⾏性
[139. Word Break](https://leetcode-cn.com/problems/word-break/)

### 常见题型:接龙型-线性

线性

单串：LIS
双串：LCS

- [经典母题:最长上升子序列](#经典母题:最长上升子序列)
  通常会给⼀个接⻰规则，问你最⻓的⻰有多⻓

LIS 的⼆分做法选择性的掌握，但并不是所有的接⻰型 DP 都可以⽤⼆分来优化
**状态**  
dp[i] 表⽰以坐标为 i 的元素结尾的最⻓⻰的⻓度
**⽅程**  
dp[i] = max(dp[j] + 1), j 的后⾯可以接上 i

### 常见题型:数位型

**状态**  
dp[i][j] 其中 i 为数字的长度， j 为最后一位的数。  
比如 dp[3][2] 表示这个数一共三位，最后一位是 2 的情况

### 常见题型:概率性

### 常见题型:博弈型

## 经典母题

- [经典母题:最长上升子序列](#经典母题:最长上升子序列)
- [经典母题:最长公共子序列](#经典母题:最长公共子序列)
- [经典母题:爬楼梯](#经典母题:爬楼梯)

### 经典母题:最长上升子序列 LIS

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

### 常见题型:最长公共子序列 LCS

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

1. 一维通常是 dp[i] 表示以 nums[i] 结尾的 xxxx
1. 二维通常是 dp[i][j] 表示以 grid[i][j] 结尾的 xxxx

**枚举**：一维就是一层循环枚举所有的 nums，二维就是两层循环枚举所有的 grid

**状态转移**：

1. 一维通常是当前格子和前面的两个格子的关系，可能是最大最小或计数。  
   dp[i] = dp[i - 1] + dp[i - 2]，这也叫递推式，因为不涉及决策。

2. 二维通常是当前格子和上方以及左方的两个格子的关系，可能是最大最小或计数。
   dp[i][j] = dp[i - 1][j] + dp[i][j-1]，这也叫递推式，因为不涉及决策。
3. 根转移方程不难看出， 这种题目通常都可以滚动数组优化

[滚动数组图片](https://tva1.sinaimg.cn/large/0081Kckwly1glpom6u30yj30u00v1n61.jpg)  
[LC70]

参考  
[动态规划专题](https://leetcode-solution.cn/solutionDetail?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fazl397985856%2Fleetcode%2Fcontents%2Fthinkings%2Fdynamic-programming.md&type=1)  
[记忆化递归转变动态规划](https://mp.weixin.qq.com/s/afRM6owOL_KTKekmW7wzpQ)  
[还有一些来自 Lucifer 的插件](https://chrome.google.com/webstore/detail/leetcode-cheatsheet/fniccleejlofifaakbgppmbbcdfjonle?hl=en-US%E3%80%82)
[dp 题型参考知乎](https://zhuanlan.zhihu.com/p/126546914)
