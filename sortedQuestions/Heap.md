# Heap 堆

-[Hints to Use](#Hints-to-Use)  
-[复杂度](#Complexity)  
-[堆定义](#堆定义)

### Hints to Use

1. 动态找极值(60%)
   1.1 找最大或者最小值
   1.2 找第 k ⼤(pop k 次 复杂度 O(nlogk))(50%) (build N pop k)
   - 也可以 divide & conqure + resursive
2. 要求 logn 时间对数据进⾏操作(40%)
3. [topK](#四大应用：topK)
4. 带权最短路径
5. 因子分解
6. 堆排序

#### 不能解决的问题

1. 查询⽐某个数⼤的最⼩值/最接近的值（平衡排序⼆叉树 Balanced BST 才可以解决）
2. 找某段区间的最⼤值最⼩值（线段树 SegmentTree 可以解决）
3. O(n)找第 k ⼤ (使⽤快排中的 partition 操作) 也可以用堆但是很慢

### Complexity

- time complexity:  
  build heap: O(N) N is the input number of elements  
  heapify: O(logN) with (n-1)calls on heapify // 下沉和树高度正相关，为 logH。由于二叉堆是一颗完全二叉树，因此可以为 LogN，N 是节点个数。  
  （当用数组模拟堆的时候，选择 push 来添加新的节点，因为在尾部添加为 O(1)）

## 堆定义

### 二叉堆 - 用完全二叉树实现的堆

Heap is a binary tree with two special properties:

1. it must have all of its nodes in **a special order**

- **minHeap**: heap's root node must have all of it's children greater than or equal to its children
- **maxHeap**: heap's root node must have all of it's children smaller than or equal to its children

2. its shape must be **complete**, which means that it must be a complete binary tree.
   A complete binary tree is a binary tree where all of the levels must be completely filled except for the last one. The last one needs to be filled start with the left side.

3. (ps) heap's structure is a complete binary tree but it is _not_ a binary search tree.

## Growing the Tree

In order to maintain the shape/structure of a heap, we can only ever add an item to its _most left available spot_ (1.the bottom level, 2. the most left empty spot -> the last one in the array)

### Process

1. add to the _most left available spot_
2. swap the nodes, if out of order, to restore order (<- _heapify_ / bubble up)

## Shrinking the Tree (pop the max/min ele pop the root)

Most of the heaps remove the root node since they are the min/max

### Process

1. copy the top node
2. copy _most left available spot_
3. put the node from step2 to the top, if out of order, to restore order (<- _heapify_ // bubble down )

### Use an array to represent heaps

parent = i  
left child = i \* 2 + 1  
right child = left + 1

child = i, parent = Math.floor(i - 1 / 2)

## 三个技巧

学习 [路西法堆讲义](https://leetcode-solution.cn/solutionDetail?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fazl397985856%2Fleetcode%2Fcontents%2Fthinkings%2Fheap-2.md&type=1)

### 固定堆 - 求 topk

LC295
例子：求第 K 小的数

假设有[1,2,3,4,5,6] k = 2；

可以先建立一个小顶堆，然后 pop k 次

或者建立一个**大顶堆**，并且维持堆大小 k：
堆里有 k 个最小的数字，其中堆顶就是第 k 小的

1. 如果堆小于 k，加入
2. 如果堆等于 k，比较新的数字和堆顶  
   2.1 移除较大的那个， 来保证堆中的数字是全体中最小的 k 个

维持一个大小为 K 的堆： k 的大顶堆可以快速求第 k 小的数，反之固定一个大小为 k 的小顶堆可以快速求第 k 大的数

### 多路归并

- 多路体现在：有多条候选路线。代码上，我们可使用多指针来表示。
- 归并体现在：结果可能是多个候选路线中最长的或者最短，也可能是第 k 个 等。因此我们需要对多条路线的结果进行比较，并根据题目描述舍弃或者选取某一个或多个路线。

### 事后诸葛亮

## 四大应用

### 四大应用：topK
