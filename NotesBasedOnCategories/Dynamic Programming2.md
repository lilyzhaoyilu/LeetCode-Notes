# Dynamic Programming II

### 宫水三叶 - 路径规划
https://mp.weixin.qq.com/s?__biz=MzU4NDE3MTEyMA==&mid=2247485580&idx=1&sn=84c99a0a8ab7b543c3678db577309b97&scene=21#wechat_redirect  


#### 1575
我们知道，如果要实现 DFS 的话，通常有以下几个步骤：

设计好递归函数的「入参」和「出参」
设置好递归函数的出口（Base Case）
编写「最小单元」处理逻辑


要想知道如何优化，先要分析现有算法所做的工作：
1. 转移 n * feul 个状态
2. 每次状态要枚举n个点

通胀需要转移的状态数量是无法减少的，所以可以尝试从第二点入手。