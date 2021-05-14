## Binary Search

学习 https://github.com/azl397985856/leetcode/blob/master/91/binary-search.md  
二分查找又称折半搜索算法。 狭义地来讲，二分查找是一种在有序数组查找某一特定元素的搜索算法。这同时也是大多数人所知道的一种说法。实际上， 广义的二分查找是将问题的规模缩小到原有的一半。类似的，三分法就是将问题规模缩小为原来的 1/3。

- [题型一：查找一个数](#题型一：查找一个数)
- [题型二：寻找最左边的满足条件的值](#题型二：寻找最左边的满足条件的值)
- [题型三：寻找最右边的满足条件的值](#题型三：寻找最右边的满足条件的值)

### 题型一：查找一个数

#### 算法描述

- 从数组中间开始，搜索[left, right]

  - 如果 arr [mid]是想要搜索的，则返回 mid
  - 如果 arr[mid] > target 那么说明答案区间在 [mid + 1, right]
  - 如果 arr[mid] < target 那么说明答案区间在 [left, mid - 1]

- index 区间如果为空，则表示找不到
  - 因此此处设定是要 left <= right 这样的话当区间里只有一个数字的时候，是能返回正确的值的

#### 复杂度分析

- 平均时间复杂度： $O(logN)$
- 最坏时间复杂度： $O(logN)$
- 最优时间复杂度： $O(1)$
- 空间复杂度
  - 迭代: $O(1)$
  - 递归： $O(logN)$（无尾调用消除）

### 模板 查找一个数

```JavaScript
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  //注意  是 left<= right
  while (left <= right) {

    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] == target) return mid;

    if (nums[mid] < target)
      left = mid + 1;

    if (nums[mid] > target)
      right = mid - 1;
  }
  return -1;
}

```

### 题型二：寻找最左边的满足条件的值

#### 思维框架

- 搜索区间[left, right]
- 终止搜索条件是 left <= right
- 循环内，对比 target 和 nums[mid]
  - 如果 nums[mid] == target，**找到可能解，收缩右边界，需要继续看左边是否还有同样的值**。 换句话说，现在的 mid 要么是答案，要么是答案右边的 mid+1。那么我们继续搜寻左边看是否还有 target （如果这之后的区间内没有 target 了，因为终止条件是 left <= right, left 会终止在 right + 1 的地方，也就是现在的 mid）
  - 如果 nums[mid] < target, 则解可能在区间 [mid + 1, right]
  - 如果 nums[mid] > target, 则解可能在区间 [left, mid - 1]
- 由于不会提前返回，需要检查最终的 left，看 nums[left] 是否等于 target
  - 如果 nums[left] != target，或者 left 出了右边界(nums.length - 1)，则-1
  - 或者 返回 left

### 模板 寻找最左边的满足条件的值

```JavaScript
function binarySearchLeft(nums, target) {

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {

    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] < target)
      left = mid + 1;
    //下面两个可以合并
    if (nums[mid] > target)
      right = mid - 1;
    //寻找最右和最左的区别
    if (nums[mid] == target){
       right = mid - 1;
    }
  }
  // 检查是否越界
  if (left >= nums.length || nums[left] != target) return -1;
  return left;
}

```

### 题型三：寻找最右边的满足条件的值

#### 思维框架

- 搜索区间[left, right]
- 终止搜索条件是 left <= right
- 循环内，对比 target 和 nums[mid]
  - 如果 nums[mid] == target，**找到可能解，收缩左边界，需要继续看右边是否还有同样的值**。 换句话说，现在的 mid 要么是答案，要么是答案左边的。那么我们继续搜寻右边看是否还有 target （如果这之后的区间内没有 target 了，因为终止条件是 left <= right, right 会终止在 left 的地方，也就是现在的 mid）
  - 如果 nums[mid] < target, 则解可能在区间 [mid + 1, right]
  - 如果 nums[mid] > target, 则解可能在区间 [left, mid - 1]
- 由于不会提前返回，需要检查最终的 right，看 nums[right] 是否等于 target
  - 如果 nums[right] != target，或者 right 出了左边界(0)，则-1
  - 或者 返回 left

### 模板 寻找最右边的满足条件的值

```JavaScript
function binarySearchLeft(nums, target) {

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {

    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > target)
      right = mid - 1;

    //下面两个可以合并
    if (nums[mid] < target)
      left = mid + 1;
    //寻找最右和最左的区别
    if (nums[mid] == target){
       left = mid + 1;
    }
  }
   // 检查是否越界
  if (right < 0 || nums[right] != target) return -1;
  return right;
}

```
