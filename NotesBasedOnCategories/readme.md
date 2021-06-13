# Notes based on categories

## Main ones

- [Binary Search :heavy_check_mark:](#Binary-Search)
- [Binary Tree :heavy_check_mark:](#Binary-Tree)
- [Divide and Counqure 分治，merge sort](#Divide-and-Counqure-分治-merge-sort)
- [Sorting Methods :heavy_check_mark:](#Sorting-Methods)
- [Search & BFS & DFS & BackTrack:fountain_pen:](#Search)
- [Trie:heavy_check_mark:](#Trie)
- [Heap (MinHeap / MaxHeap):heavy_check_mark:](#heap-minheap--maxheap)
- [Dynamic Programming:fountain_pen:](#Dynamic-Programming)
- [Two Pointers / PreSum:fountain_pen:](#Two-Pointers-/-PreSum)
- [Union Find:heavy_check_mark:](#Union-Find)
- [Graph:fountain_pen:](#Graph)
## Others

- [Presum and Prefix](#Presum-and-Prefix)
- [Monotonic Queue](#Monotonic-Queue)
- [Topological Sort](#Topological-Sort)

### [Binary Search](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Binary%20Search%20Updated.md)

1. 找比 O(N)更小时间复杂度算法 (99%)
3. 有限解空间，可以通过搜索排除某个区域不符合答案(100%)
4. 找到一个最大/最小值使某个条件被满足(90%)
5. 通过merge sort 或者 前缀和构建有序数组 

### [Sorting Methods](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Sortings%20Methods.md)

1. Quick sort O(NlogN)
2. Merge sort O(NlogN))
3. Insertion Sort O(N^2)
4. Bubble Sort O(N^2)

### [Binary Tree](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Binary%20Tree.md)

1. 二叉树的遍历和修改

### [Search](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/sortedQuestions/BFS%20DFS.md)

- BFS - Breadth First Search
  1. 拓扑排序（100%）
  2. 出现连通块的关键词（100%）connected component
  3. 分层遍历（100%）
  4. 简单图最短路径（100%）
  5. 给定一个变换规则，从初始状态到最终状态最少走几步（100%）
- DFS - Depth First Search
  1. 满足某个条件的所有解决方案(99%)
  2. 二叉树问题(90%)
  3. 排列（顺序相关）组合（顺序无关）问题(95%)
- **不用 DFS 的场景**
  - 连通块， 否则 Stackoverflow
  - 拓扑， 否则 overflow
  - 一切 BFS 可以解决的

### [Divide and Counqure 分治，merge sort](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Divede%20and%20Conqure.md)
1. 对index大小有一定要求，且排序能让它复杂度更低

### [Trie](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Trie.md)

1. 查找包含某个前缀的字符串是否存在字符串合集中
2. 字符矩阵中找单词
3. 字符矩阵中找 prefix 相同/不同的
4. 模糊搜索某个单词

### [Heap (MinHeap / MaxHeap)](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Heap.md)

1. **动态求极值**（动态：第 k 小/大的数），且复杂度 O(NlogK) 其中 logk 时间对数据进行操作
2. 多路归并 (merge K sorted list)
3. topK 应用 固定反堆
4. 可以带参/带权

- 不能：
  - 查询比某个数大的最小值/接近值（二叉树或者 binary
  - 查找某段区间最大或者最小
  - O(N)找第 k 大（要用快排的 partision）

### [Dynamic Programming](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Dynamic%20Programming.md)

1. 求方案总数字(90%)
2. 求最值(80%)
3. 求可行性(80%)

- 不适用场景
  - 找所有具体的⽅案（准确率 99%）
  - 输⼊数据⽆序(除了背包问题外，准确率 60%~70%)
  - 暴⼒算法已经是多项式时间复杂度（准确率 80%）

### [Two Pointers / Sliding Window](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Two%20Pointers%20and%20Sliding%20Window.md)

1. 滑动窗口(90%)
2. 时间复杂度 O(N)（80%）
3. 原地交换，不能使用额外空间(80%)
4. 有 subarray / substring 关键词(50%)
5. 回文 palindrome （50%）

### [Union Find](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Union%20Find.md)

1. 需要查询图的联通状况
2. 需要支持快速合并两个合集
3. 检测是否有环 - 将边合并，如果在合并之前就同元，那么就有环
4. 确定无向图的连通分量
5. 亲戚问题，是否同个祖先

### [Graph](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Graph.md)

## others

### [Presum and Prefix](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/preSum%20and%20Prefix.md)
1. nums[i] >= 0, presum就是一个升序数组
2. presum求得之后，可以任意被打乱顺序，仍代表某 presum[j] - presum[i - 1] (不过这时候要记得presum =[0])


### [Monotonic Queue](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Monotonic%20Queue.md)

1. 第一个大于/小于 xxx (就是找第一个破坏规则的并且记录到ans里)
2. 如果有 nums， 其每个 digit 最小的排列方法是递增栈，最大的排列方式是递减栈
3. 有一堆 digits，找最大/最小的排列方式
4. 对连续性有一定要求的？
5. 对O(N)继续优化成OlogN的时候，可以建立以单调栈。它
5.1 作为接龙可以是每个可接龙值的最小值
5.2 可以是升序单调栈，利用升序和index的关系，把双循环改成单循环
```
    countNotGreater(diff, nums){
        let i = 0, ans = 0;
        for(let j = 1; j < nums.length; j++){
            while(nums[j] - nums[i] > diff){
                i++
            }
            ans += j - i 
        }
        return ans
    }
```

### [Topological Sort](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/NotesBasedOnCategories/Topological.md)
