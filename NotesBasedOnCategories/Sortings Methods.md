## Sorting Methods

学习 https://github.com/azl397985856/leetcode/blob/master/problems/912.sort-an-array.md

https://leetcode-cn.com/problems/sort-an-array/solution/fu-xi-ji-chu-pai-xu-suan-fa-java-by-liweiwei1419/

-[Quick Sort 快速排序](#Quick-Sort-快速排序)  
-[Merge Sort 归并排序](#Merge-Sort-归并排序)  
-[Insertion Sort 插入排序](#Insertion-Sort-插入排序)  
-[Selection Sort 选择排序](#Selection-Sort-选择排序)  
-[Bubble Sort 冒泡排序](#Bubble-Sort-冒泡排序)

## Quick Sort 快速排序

[LC 912. Sort an Array](https://leetcode-cn.com/problems/sort-an-array/)  
思路

- 每次选定一个元素 pivot，以它为标杆
- 递归地去排它左边和右边的部分

### Complexity

- Time complexity: O(nlogn) (期望复杂度)
- Space complexity: O(1)

### 模板

```JavaScript
var sortArray = function(nums) {
  partision(nums, 0, nums.length - 1)
  return nums
};

var partision = function(nums, start, end){
  if(start >= end) return;
  const pivotIndex = start + ((end - start) >> 1)
  const pivot = nums[pivotIndex]

  let i = start, j = end;

  while(i <= j){
    while(nums[i] < pivot) i++
    while(nums[j] > pivot) j--
    if(i <= j){
      [nums[i], nums[j]] = [nums[j], nums[i]]
      i++
      j--
    }
  }

  partision(nums, start, j)
  partision(nums, i, end)
}
```

## Merge Sort 归并排序

[LC88. Merge Sorted Array](https://leetcode-cn.com/problems/merge-sorted-array/)

### Complexity

- Time complexity: O(nlogn) (最坏复杂度) O(MlogN)M 是字符串平均长度 N 是字符串数量
- Space complexity: O(n)

### 模板

```JavaScript
var sortArray = function(nums, beg = 0) {
  if(nums.length === 1) return nums;
  const mid = beg + ((nums.length - beg) >> 1)
  const left = nums.slice(0, mid)
  const right = nums.slice(mid, nums.length)
  return mergeSortHelper(sortArray(left), sortArray(right))
};



var mergeSortHelper = function(left, right){
  let res = [];
  while(left.length && right.length){
    if(left[0] < right[0]){
      res.push(left.shift())
    }else{
      res.push(right.shift())
    }
  }

  return [...res,...left,...right]
}

```

## Insertion Sort 插入排序

每次将一个数字插入一个有序的数组里，成为一个长度更长的有序数组，有限次操作以后，数组整体有序。  
[LC 147. Insertion Sort List](https://leetcode-cn.com/problems/insertion-sort-list/)  
[My Solution](https://github.com/lilyzhaoyilu/LeetCode-Notes/blob/master/Basic200/LC147.%20Insertion%20Sort%20List.md)

### Complexity

- Time complexity: O(n^2)
- Space complexity: O(1)

### 模板

```JavaScript
var InsertionSort = function(nums) {
  for(let i = 0; i < nums.length; i++){
    let cur = nums[i]
    let j = i

    while(j > 0 && nums[j - 1] > cur){
      nums[j] = nums[j - 1]
      j--
    }

    nums[j] = cur
  }
  return nums;
};

```

## Selection Sort 选择

思路：每一轮选取未排定的部分中最小的部分交换到未排定部分的最开头，经过若干个步骤，就能排定整个数组。即：先选出最小的，再选出第 2 小的，以此类推。

### Complexity

- Time complexity: O(n^2)
- Space complexity: O(1)

### 模板

```JavaScript
var sortArray = function(nums) {
  for(let i = 0; i < nums.length - 1; i++){
    let mid = i
    for(let j = i+1; j <  nums.length; j++){
      if(nums[j] < nums[mid]) mid = j
    }
    [nums[mid], nums[i]] = [nums[i], nums[mid]]
  }
  return nums
};

```

## Bubble Sort 冒泡排序

### Complexity

- Time complexity: O(n^2)
- Space complexity: O(1)

### 模板

```JavaScript
半夜起来都能写对的sort Q_Q

```
