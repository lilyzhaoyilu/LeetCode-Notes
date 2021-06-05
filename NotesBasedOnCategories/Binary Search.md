# Binary Search

学习 https://github.com/azl397985856/leetcode/blob/master/91/binary-search.md

二分查找又称折半搜索算法。 狭义地来讲，二分查找是一种在有序数组查找某一特定元素的搜索算法。这同时也是大多数人所知道的一种说法。实际上， 广义的二分查找是将问题的规模缩小到原有的一半。类似的，三分法就是将问题规模缩小为原来的 1/3。

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

### 总结

1. 先定义搜索区间（非常重要）
2. 根据搜索区间定义循环结束条件
3. 取中间元素和目标元素做对比（可能是要找的，可能是数组第一个）  
   如果是整体有序通常只要比较 nums[mid]和 target,如果局部有序则要和特定元素比较  
   因为这个模板定义是 left <= right  
   通常只要想当 mid == target cross 的时候  
   和收缩是否能排除来确定 right = mid 还是 mid + 1 就好
4. 根据比较的结果收缩区间，放弃非法解（也就是二分）
5. 注意是否有无重复元素

### 模板

寻找最左插入位置 ->右边第一个数比他大

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

//寻找最右插入位置 ->左边这个数比他小
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

### 题型 & 思路

- [题型一：查找一个数](#题型一：查找一个数)
- [题型二：寻找最左边的满足条件的值](#题型二：寻找最左边的满足条件的值)
- [题型三：寻找最右边的满足条件的值](#题型三：寻找最右边的满足条件的值)
- [**题型四：寻找最左插入位置**](#题型四：寻找最左插入位置)
- [**题型五：寻找最右插入位置**](#题型五：寻找最右插入位置)
- [题型六：局部有序+二维数组](#题型六：局部有序+二维数组)
- [题型七：寻找最值](#题型六：寻找最值)

### 题型一：查找一个数

#### 算法描述

- 从数组中间开始，搜索[left, right]

  - 如果 arr [mid]是想要搜索的，则返回 mid
  - 如果 arr[mid] > target 那么说明答案区间在 [mid + 1, right]
  - 如果 arr[mid] < target 那么说明答案区间在 [left, mid - 1]

- index 区间如果为空，则表示找不到
  - 因此此处设定是要 left <= right 这样的话当区间里只有一个数字的时候，是能返回正确的值的

#### 模板 查找一个数

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

#### 模板 寻找最左边的满足条件的值

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
  // 检查是否越界 注意这里是nums[left]
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
  - 或者 返回 right

#### 模板 寻找最右边的满足条件的值

```JavaScript
function binarySearchRight(nums, target) {

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {

    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > target)
      right = mid - 1;

    //下面两个可以合并
    if (nums[mid] < target)
      left = mid + 1;
    //寻找最右和最左的区别 此处收缩左边界
    if (nums[mid] == target){
       left = mid + 1;
    }
  }
   // 检查是否越界 //注意这里是nums[right]
  if (right < 0 || nums[right] != target) return -1;
  return right;
}

```

### 题型四：寻找最左插入位置

#### 思维框架

对于[1,3,4] target = 2 来说，应该返回的是 1； 同理，对于[1,2,2,2,2,3] target = 2 来说，应该返回的是 1.
那么寻找最左插入位置 => 寻找最左侧 >= target 的值 // 寻找第一个大于等于 target 的值
（之前寻找最左侧的值是 值 == target）

定义搜索区间为[left, right]，终止搜索条件为 left <= right

- 当 nums[mid] >= x,说明捡到一个备胎，将备胎剔除，看是否有更好备胎
- 当 nums[mid] < x, 说明 nums[mid]不可能在答案区间内，直接更新 left = mid + 1
- 最后搜索区间的 left 就是我们想要的值

#### 模板 寻找最左插入位置

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

### 题型五：寻找最右插入位置

#### 思维框架

那么寻找最右插入位置 => 寻找最左 > target 的值 //寻找第一个大于 target 的值
（之前寻找最左侧的值是 值 == target）

定义搜索区间为[left, right]，终止搜索条件为 left <= right

- 当 nums[mid] > x,说明捡到一个备胎，将备胎剔除，看是否有更好备胎
- 当 nums[mid] =< x, 说明 nums[mid]不可能在答案区间内，直接更新 left = mid + 1，从而将 mid 在搜索区域内剔除
- 最后搜索区间的 left 就是我们想要的值

#### 模板 寻找最右插入位置

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

### 题型六：局部有序+二维数组

#### [LC 33. Search in Rotated Sorted Array](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/)

重点是知道，在二分的一个点之后， nums[mid]的左边或者右边必有一个有序区间
如果他正常的不在有序区间里，那他就在另外一边

```JavaScript
var search = function(nums, target) {

  let left = 0, right = nums.length - 1;

  while(left <= right){
    const mid = left + ((right - left) >> 1)

    if(nums[mid] == target) return mid;

    if(nums[left] <= nums[mid]){
      if(nums[mid] > target && nums[left] <= target){
        right = mid - 1
      }else{
        left = mid + 1
      }
    }else{
      if(nums[mid] < target && nums[right] >= target ){
        left = mid + 1
      }else{
        right = mid - 1
      }
    }
  }

  if(left >= 0 && nums[left] === target) return left;

  return -1
};

```

#### [LC 81. Search in Rotated Sorted Array II](https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/submissions/)

```JavaScript
var search = function(nums, target) {
  let left = 0, right = nums.length - 1;


  while(left <= right){
    const mid = left + ((right - left) >> 1)

    if(nums[mid] == target) return true;

    //这里要考虑 [3,0,1,3,3,3,3]这种corner case
    //可以舍弃一边，并且给移动的指针画一个界限
    //界限是mid，不是arr.length / 0
    if(nums[left] === nums[right] && left < mid){
      left++
    }else if(nums[left] <= nums[mid]){
      if(nums[mid] > target && nums[left] <= target){
        right = mid - 1
      }else{
        left = mid + 1
      }
    }else{
      if(nums[mid] < target && target <= nums[right]){
        left = mid + 1
      }else{
        right = mid - 1
      }
    }
  }

  if(nums[left] === target) return true;

  return false;
};

```

#### [LC 面试题 10.03. Search Rotate Array LCCI](https://leetcode-cn.com/problems/search-rotate-array-lcci/)

面试题 10.03. Search Rotate Array LCCI
Given a sorted array of n integers that has been rotated an unknown number of times, write code to find an element in the array. You may assume that the array was originally sorted in increasing order. If there are more than one target elements in the array, return the smallest index.

Example1:

Input: arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], target = 5
Output: 8 (the index of 5 in the array)
Example2:

Input: arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], target = 11
Output: -1 (not found)
Note:

1 <= arr.length <= 1000000

```JavaScript
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var search = function(arr, target) {
  // 题意转换 -> 找寻左边第一个等于target的，所以要尽量在右边缩小
  let left = 0, right = arr.length - 1;

  while(left <= right){
    const mid = left + ((right - left) >> 1)
    //could have duplicates
    if(arr[left] < arr[mid]){
      if(arr[mid] >= target && arr[left] <= target){
        right = mid - 1;
      }else{
        left = mid + 1
      }
      //注意这里的单独讨论
    }else if (arr[left] > arr[mid]){
      //注意这里的缩小范围
      if(arr[left] <= target || target <= arr[mid]){
        right = mid - 1
      }else{
        left = mid+ 1
      }
    }else if(arr[left] == arr[mid]){
      //因为找最左的，所以只在确定最左不是答案的情况下再缩小
      if(arr[left] != target){
        left++
      }else{
        right = left - 1
      }
    }
  }

  if(target === arr[left] && left < arr.length) return left;
  return -1;
};
```

#### [LC 74. Search a 2D Matrix](https://leetcode-cn.com/problems/search-a-2d-matrix/)

[solution](https://github.com/lilyzhaoyilu/LeetCodeRecord/blob/master/Basic200/LC74.%20Search%20a%202D%20Matrix.md)

### 题型七：寻找最值

## LC 153. Find Minimum in Rotated Sorted Array

[My soluiton](https://github.com/lilyzhaoyilu/LeetCodeRecord/blob/master/Basic200/LC153.%20Find%20Minimum%20in%20Rotated%20Sorted%20Array.md)

## LC 875. Koko Eating Banans

[My Solution](https://github.com/lilyzhaoyilu/LeetCodeRecord/blob/master/Basic200/LC875.%20Koko%20Eating%20Bananas.md)
