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

O(n)时间可以选择第K个
```JavaScript
var closestKValues = function(root, target, k) {
    const nodes = []

    const inorder = (node) => {
        if(!node) return null

        inorder(node.left)
        nodes.push({val: node.val , diff:Math.abs(node.val - target) })
        inorder(node.right)
    }

    const quickSort = (arr, l, r) => {
        if(l >= r) return
        let i = l, j = r;

        while(i < j){
            while(i < j && arr[j].diff >= arr[l].diff) j--
            while(i < j && arr[i].diff <= arr[l].diff) i++
            swap(arr, i,j)
        }
        swap(arr,i,l)
        if(k < i) return quickSort(arr, l, i -1)
        if(k > i) return quickSort(arr, i + 1, r)
        return arr
    }

    const swap = (arr, i, j)=> {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    inorder(root)
    quickSort(nodes, 0, nodes.length - 1)

    return nodes.slice(0,k).map((e) => e.val)
};
```

## Merge Sort 归并排序 
（这个例子写的真不咋地！）
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

思路：每一轮选取未排定的部分中最小的部分交换已经排序部分的结尾，经过若干个步骤，就能排定整个数组。即：先选出最小的，再选出第 2 小的，以此类推。
A selection sort algorithm sorts through a list of items by iterating through a list of elements, finding the smallest one, and putting it aside into a sorted list.   
A selection sort algorithm will divide its input list into a sorted and an unsorted section.

1. Set the smallest number to be the first element in the list.   
2. Look through the entire list and find the actual smallest number.   
3. Swap that value with the item at the index of the smallest number.   
4. Move on to look at the next unsorted item in the list, repeat steps 2 + 3.   
5. Continue to do this until we arrive at the last element in the list.   
### Complexity

- Time complexity: O(n^2)
- Space complexity: O(1)

### 模板

```JavaScript
var sortArray = function(nums) {
  for(let i = 0; i < nums.length - 1; i++){
    let smallest = i
    for(let j = i+1; j <  nums.length; j++){
      if(nums[j] < nums[smallest]) smallest = j
    }
    [nums[target], nums[i]] = [nums[i], nums[target]]
  }
  return nums
};

```

## Bubble Sort 冒泡排序
A bubble sort algorithm iterates through the list or array that it is given, and compares each pair of adjacent elements in the list by size.If they elements are in the incorrect order, it swaps them, and then moves on to the next pair of elements.
### Complexity

- Time complexity: O(n^2)
- Space complexity: O(1)

### 模板

```JavaScript
半夜起来都能写对的sort Q_Q

```


插件排序
```
# 1. 归并排序（推荐！其他排序方法都不推荐在竞赛中使用）
# 归并排序乞丐版
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        def mergeSort(l, r):
            if l >= r:
                return
            mid = (l + r) // 2
            mergeSort(l, mid)
            mergeSort(mid + 1, r)
            temp = []
            i, j = l, mid + 1
            while i <= mid and j <= r:
                if nums[i] < nums[j]:
                    temp.append(nums[i])
                    i += 1
                else:
                    temp.append(nums[j])
                    j += 1
            while i <= mid:
                temp.append(nums[i])
                i += 1
            while j <= r:
                temp.append(nums[j])
                j += 1
            nums[l : r + 1] = temp

        mergeSort(0, len(nums) - 1)
        return nums
# 归并排序优化版
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        temp = [0] * len(nums)

        def mergeSort(l, r):
            if l >= r:
                return
            mid = (l + r) // 2
            mergeSort(l, mid)
            mergeSort(mid + 1, r)
            i, j = l, mid + 1
            k = 0
            while i <= mid and j <= r:
                if nums[i] < nums[j]:
                    temp[k] = nums[i]
                    i += 1
                else:
                    temp[k] = nums[j]
                    j += 1
                k += 1
            while i <= mid:
                temp[k] = nums[i]
                i += 1
                k += 1
            while j <= r:
                temp[k] = nums[j]
                j += 1
                k += 1
            nums[l : r + 1] = temp[: r - l + 1]

        mergeSort(0, len(nums) - 1)
        return nums

# 2. 快速排序
# 快速排序乞丐版
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        temp = [0] * len(nums)

        def quickSort(nums):
            if not nums: return []
            pivot = nums[0]
            nums = nums[1:]
            l = quickSort([num for num in nums if num <= pivot])
            r = quickSort([num for num in nums if num > pivot])
            return l + [pivot] + r

        return quickSort(nums)
# 快速排序优化版
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        temp = [0] * len(nums)

        def partition(l, r):
            pivot = nums[l]

            while l < r:
                while l < r and nums[r] >= pivot:
                    r -= 1
                nums[l] = nums[r]
                while l < r and nums[l] <= pivot:
                    l += 1
                nums[r] = nums[l]
            nums[l] = pivot
            return l

        def quickSort(l, r):
            if l >= r:
                return
            pivot = partition(l, r)
            quickSort(l, pivot - 1)
            quickSort(pivot + 1, r)

        quickSort(0, len(nums) - 1)
        return nums

# 3. 插入排序
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        for i in range(1, n):
            t = nums[i]
            j = i - 1
            while j > -1 and nums[j] > t:
                nums[j + 1] = nums[j]
                j -= 1
            nums[j + 1] = t
        return nums

# 4. 选择排序
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        for i in range(n - 1):
            k = i
            for j in range(i + 1, n):
                if nums[j] < nums[k]:
                    k = j
            nums[i], nums[k] = nums[k], nums[i]
        return nums

# 5. 冒泡排序
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        for i in range(n):
            for j in range(i + 1, n):
                if nums[j] < nums[i]:
                    nums[i], nums[j] = nums[j], nums[i]
        return nums

            
```