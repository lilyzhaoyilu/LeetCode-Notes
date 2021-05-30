# Notes based on categories

## Main ones

- [Binary Search](#Binary-Search)
- [Binary Tree](#Binary-Tree)
- [Sorting Methods](#Sorting-Methods)
- [DFS BFS](#DFS-BFS)
- [Trie](#Trie)
- [Heap (MinHeap / MaxHeap)](<#Heap-(MinHeap-/-MaxHeap)>)
- [Dynamic Programming](#Dynamic-Programming)
- [Two Pointers / PreSum](#Two-Pointers-/-PreSum)
- [Union Find](#Union-Find)

## Others

- [Monotonic Queue](#Monotonic-Queue)
- [Topological Sort](#Topological-Sort)

### [Binary Search](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Binary%20Search.md) :heavy_check_mark:

1. 排序数组 (30% - 40%)
2. 找比 O(N)更小时间复杂度算法 (99%)
3. 找到数组中的某个位置，使得左或右某半部分不满足条件(100%)
4. 找到一个最大/最小值使某个条件被满足(90%)

### [Sorting Methods](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Sortings%20Methods.md):heavy_check_mark:

1. Quick sort O(NlogN)
2. Merge sort O(NlogN))
3. Insertion Sort O(N^2)
4. Bubble Sort O(N^2)

### [Binary Tree](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Binary%20Tree.md) :heavy_check_mark:

1. 二叉树的遍历和修改

### [DFS BFS](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/sortedQuestions/BFS%20DFS.md):fountain_pen:

- BFS - Breadth First Search
  1. 拓扑排序（100%）
  2. 出现连通块的关键词（100%）connected component
  3. 分层遍历（100%）
  4. 简单图最短路径（100%）
  5. 给定一个变换规则，从初始状态到最终状态最少走几步（100%）
- DFS - Depth First Search
  1. 满足某个条件的所有解决方案(99%)
  2. 二叉树问题(90%)
  3. 组合问题(95%)
  - 问题模型：求出所有满⾜条件的“组合”
  - 判断条件：组合中的元素是顺序⽆关的
  4. 排列问题(95%)
  - 问题模型：求出所有满⾜条件的“排列”
  - 判断条件：组合中的元素是顺序相关的
- **不用 DFS 的场景**
  - 连通块， 否则 Stackoverflow
  - 拓扑， 否则 overflow
  - 一切 BFS 可以解决的

### [Trie](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Trie.md):heavy_check_mark:

1. 查找包含某个前缀的字符串是否存在字符串合集中
2. 字符矩阵中找单词
3. 字符矩阵中找 prefix 相同/不同的
4. 模糊搜索某个单词

### [Heap (MinHeap / MaxHeap)](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Heap.md):heavy_check_mark:

1. **动态求极值**（动态：第 k 小/大的数），且复杂度 O(NlogK) 其中 logk 时间对数据进行操作
2. 多路归并 (merge K sorted list)
3. topK 应用 固定反堆
4. 可以带参/带权

- 不能：
  - 查询比某个数大的最小值/接近值（二叉树或者 binary
  - 查找某段区间最大或者最小
  - O(N)找第 k 大（要用快排的 partision）

### [Dynamic Programming](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Dynamic%20Programming.md) :fountain_pen:

1. 求方案总数字(90%)
2. 求最值(80%)
3. 求可行性(80%)

- 不适用场景
  - 找所有具体的⽅案（准确率 99%）
  - 输⼊数据⽆序(除了背包问题外，准确率 60%~70%)
  - 暴⼒算法已经是多项式时间复杂度（准确率 80%）

### [Two Pointers / PreSum](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Two%20Pointers%20and%20Presum.md) :fountain_pen:

1. 滑动窗口(90%)
2. 时间复杂度 O(N)（80%）
3. 原地交换，不能使用额外空间(80%)
4. 有 subarray / substring 关键词(50%)
5. 回文 palindrome （50%）
6. 前缀和 + 二维前缀和- :fountain_pen:

### [Union Find](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Union%20Find.md):heavy_check_mark:

1. 需要查询图的联通状况
2. 需要支持快速合并两个合集
3. 检测是否有环 - 将边合并，如果在合并之前就同元，那么就有环
4. 确定无向图的连通分量
5. 亲戚问题，是否同个祖先

## others

### [Monotonic Queue](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Monotonic%20Queue.md) :heavy_check_mark:

1. 下一个大于 xxx
2. 下一个小于 xxx
3. 如果有 nums， 其每个 digit 最小的排列方法是递增栈，最大的排列方式是递减栈
4. 有一堆 digits，找最大/最小的排列方式
5. 对连续性有一定要求的？

### [Topological Sort](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Topological.md)
