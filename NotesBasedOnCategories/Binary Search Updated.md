# Binary Search

- [Hints to use](#Hints-to-use)
- [复杂度分析](#复杂度分析)
- [定义-*折半*法](#定义-折半法)
- [二分两大模板](#二分两大模板)
- [二分四大应用](#二分四大应用)

### Hints to use

1. 排序数组 (30% - 40%)
2. 找比 O(N)更小时间复杂度算法 (99%)
3. 找到数组中的某个位置，使得左或右某半部分不满足条件(100%)
4. 找到一个最大/最小值使某个条件被满足(90%)

### 复杂度分析

- 平均时间复杂度： $O(logN)$
- 最坏时间复杂度： $O(logN)$
- 最优时间复杂度： $O(1)$
- 空间复杂度
  - 迭代：$O(1)$
  - 递归：$O(logN)$（无尾调用消除）

## 定义 - *折半*法

解空间：题目所有可能的解构成的集合，一定是有穷尽的，不然无法继续。  
有序：1. 题目有序 2.自己构造有序(比如前缀和)

## 二分两大模板

返回： 他应该在的新位置

寻找最左插入位置 -> 这个数第一个出现的位置 || 右边的数大于它
console.log(lsearch([1, 1, 1, 1, 1, 2, 3, 4, 5], 1)) => 1
console.log(lsearch([1, 2, 3, 3, 4, 5], 3)) => 2

```JavaScript
function binarySearchMostLeftInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    //mid可能是想要的，但再找找还有想要的吗
    if (nums[mid] == target)
      right = mid - 1;
    //mid有可能是想要的，但更多想要的可能在左边
    if (nums[mid] > target)
      right = mid - 1;

    //答案不可能在[left, mid]区间内
    if (nums[mid] < target)
      left = mid + 1;

  }
  // 检查是否越界，区别在于不用检查是否等于
  //如果要找满足条件的值，再加一个 nums[left] === target 即可
  if (left >= nums.length) return -1;
  return left;
}
```
返回： 他应该在的新位置
寻找最右插入位置 -> 左边这个数小于等于他 || 这个数最后出现的位置
console.log(bright([3, 5, 8, 9, 11], 9)) -> 4
console.log(bright([3, 5, 8, 9, 9, 9, 9, 9, 11], 9)) -> 8
console.log(bright([1, 2, 3], 3)) -> 3 
console.log(bright([1, 2, 3], 5)) -> 3 


```JavaScript

function binarySearchMostRightInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    //[mid,left]不是想要的
    if (nums[mid] > target)
      right = mid - 1;

    //mid可能是想要的，但是再向右找一下有没有其他的
    if (nums[mid] == target)

      left = mid + 1;
    //[left, mid]绝对不是想要的
    if (nums[mid] < target)
      left = mid + 1;

  }
  // 检查是否越界，区别在于不用检查是否等于
  if (left >= nums.length) return -1;
  return left;
}
```

## 二分四大应用

1. 能力检测（普通二分的分化）
2. 计数二分（普通二分的分化）
3. 前缀和二分
4. 插入排序二分

#### 二分四大应用一：能力检测

能力检测二分一般是：定义函数 possible， 参数是 mid，返回值是布尔值。外层根据返回值调整 “解空间”。  
LC475

```Python
def ability_test_bs(nums):
  def possible(mid):
    pass
  l, r = 0, len(A) - 1
  while l <= r:
      mid = (l + r) // 2
      # 只有这里和最左二分不一样
      if possible(mid): l = mid + 1
      else: r = mid - 1
  return l
```

#### 二分四大应用二：计数二分

本质也是能力检测，因此和能力检测框架基本一致，大家对比理解一下。

```Python
def count_bs(nums, k):
  def count_not_greater(mid):
    pass
  l, r = 0, len(A) - 1
  while l <= r:
      mid = (l + r) // 2
      # 只有这里和最左二分不一样
      if count_not_greater(mid) > k: r = mid - 1
      else: l = mid + 1
  return l
```

```Python
def count_bs(nums, k):
  def possible(mid, k):
    # xxx
    return cnt > k
  l, r = 0, len(A) - 1
  while l <= r:
      mid = (l + r) // 2
      if possible(mid, k): r = mid - 1
      else: l = mid + 1
  return l
```

构建有序数组： 前缀和（当elements >= 0)
#### 二分四大应用三：前缀和二分

如果数组全是正的，那么其前缀和就是一个严格递增的数组，基于这个特性，我们可以在其之上做二分。
也可以在前缀和头部增加[0]简化 i-1 的判断。
题目： [LC327](https://leetcode-cn.com/problems/count-of-range-sum/)，用到 merge sort + divide & conqure

构建有序数组： 分治 -> 保证index不乱的同时还能把数组划分成俩升序数组
#### 二分四大应用四：插入排序二分

[剑指 51](https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/)用到 merge sort + divide & conqure  
不断插入并维护序列有序，进而利用有序做一些事情。
4.1 直接对序列排序

4.2 遍历过程维护一个新的有序序列，有序序列的内容为已经遍历过的值的集合。
https://leetcode-pp.github.io/leetcode-cheat/?tab=data-structure-vis
https://lucifer.ren/blog/2021/03/08/binary-search-1/
https://lucifer.ren/blog/2021/03/23/binary-search-2/
https://github.com/azl397985856/leetcode/blob/master/91/binary-search.md
