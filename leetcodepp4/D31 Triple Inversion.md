## Triple Inversion
https://binarysearch.com/problems/Triple-Inversion

- [暴力](#思路-暴力)
- [分治](#思路-分治)
- [二分法](#思路-二分法)
### 思路 暴力

#### 代码 JavaScript

```JavaScript
    solve(nums) {
        let ret = 0
        for(let i = 0; i < nums.length - 1; i++){
            for(let j = i + 1; j < nums.length; j++){
                if(nums[i] > nums[j] * 3){
                    ret += 1
                }
            }
        }

        return ret 
    }

```

#### 复杂度分析
时间复杂度：O(N^2) </br>
空间复杂度：O(1)


### 思路 分治
为啥想到分治？  因为   
首先简化原题，如果是有一个nums,求其中 nums[i]  > nums[j] * 3的有多少对，除了暴力还有什么简化方法吗？  
答案是有的，先把nums排序，从小到大，然后二分法查找对于每一个nums[i]，满足他条件的nums[j]

最右二分搜索-> 左边的数小于等于target
console.log(bright([3, 5, 8, 9, 11], 9)) -> 4
console.log(bright([3, 5, 8, 9, 9, 9, 9, 9, 11], 9)) -> 8
console.log(bright([1, 2, 3], 3)) -> 3 最后一个数也满足条件
console.log(bright([1, 2, 3], 5)) -> 3 没有数满足条件
这样的话我们就把时间简化到了O(NlogN)，因为每次二分搜索是logN，总共搜索(n-1)个数字  

然后我们发现这个对index有要求，怎么能保证i < j 呢，就想到了mergesort。在merge sort的中间部分，我们有两个有序数组。只要保证i在左边数组，j在右边数组，就可以保证这个条件。

于是乎这道题转换成了分治 -> merge sort

这道题的启发就是： 如果现在的题不会做，丢掉一个限制试试。看看在最简单的方法下会不会做，然后再从最简单的题慢慢往上推。这也顺应了Lucifer的母题思想。

我觉得我值得一个小红花。ღ( ´･ᴗ･` )比心

这道题跟LC327很像，不过327更难一丢丢丢丢。
#### 代码 JavaScript

```JavaScript
class Solution {
    solve(nums) {


    return this.mergeSort(nums, 0, nums.length - 1) 
    }

    mergeSort(nums, left, right){
        if(left >= right) return 0

        const mid = left + ((right - left) >> 1)

        const leftSide = this.mergeSort(nums, left, mid)
        const rightSide = this.mergeSort(nums, mid+1, right)

        let ret = leftSide + rightSide

        //[7,8,9] [1,2,4]

        let backPair = mid + 1, frontPair = left;
        
        while(frontPair <= mid){
        // stops at the qualified one + 1
            while(backPair <= right && nums[frontPair] > nums[backPair]* 3) backPair++
            ret += backPair - (mid + 1)
            frontPair++
        }
        this.merge(nums, left, right, mid)
        return ret

    }

    merge(arr, left, right, mid){
        const res = new Array(right - left + 1)
        let index = 0, l = left, r = mid + 1

        while(l <= mid  || r <= right){
            if(l >= mid + 1) res[index++] = arr[r++]
            else if(r > right) res[index++] = arr[l++]
            else if(arr[l] < arr[r]) res[index++] = arr[l++]
            else res[index++] = arr[r++] 
        }

        for(let i = left, j = 0; i<= right; i++, j++ ){
            arr[i] = res[j]
        }
    }
}

```

#### 复杂度分析
时间复杂度：O(NlogN) </br>
空间复杂度：O(1)




### 思路 二分法
上面都提到二分法了， 思路大概就是
把每个遍历过element加入一个array中，每次遇到新的nums[j]
1. 二分查找在array中有几个比 nums[j] * 3 大的，用 二分查找最右模板
2. 返回值，累计，并且把现在的nums[j]加入到array中去（并且维持这个array是sorted）

不过这个方法会超时，因为语言自带接口的sort貌似是nlogn，那么总时间复杂度就是  O(N* NlogN * logN)。。。

#### 代码 JavaScript

```JavaScript
class Solution {
    solve(nums) {
        const arr = []
        let ret = 0

        for(let j = 0; j < nums.length; j++){
            if(j == 0){
                arr.push(nums[j])
                continue;
            }

            ret += this.binarySearchRight(arr, nums[j] * 3)
            arr.push(nums[j])
            arr.sort((a,b) => a - b)
        }

        return ret;
    }

    binarySearchRight(nums, target){
        //返回 nums中 大于target的个数
        let left = 0, right = nums.length - 1

        while (left <= right) {
            const mid = left + ((right - left) >> 1)

            if (nums[mid] == target) left = mid + 1
            else if (nums[mid] > target) right = mid - 1
            else if (nums[mid] < target) left = mid + 1
        
        }

        //[1,2,3] target = 3 return 3
        //[1,2,3] target = 1 return 1
        //[1,2,3] target = 5 return 3
        // console.log(nums, target, left,  nums.length - left)
        return nums.length - left

    }
}

```

#### 复杂度分析
时间复杂度：O(N* NlogN * logN) </br>
空间复杂度：O(N)
