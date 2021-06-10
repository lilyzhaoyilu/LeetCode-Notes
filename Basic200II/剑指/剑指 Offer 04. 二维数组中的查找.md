## 剑指 Offer 04. 二维数组中的查找
https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
- [二分法](#思路-二分法)
- [巧..思？](#思路-巧..思？)

### 思路 巧..思？
注意找到一个关系，就是最右上角的时候可以选择大和小   
并且注意row 和 col 可能超出的边界，根据他们的移动方向
#### 代码 JavaScript

```JavaScript
var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length < 1 || matrix[0].length < 1) return false
    let row = 0, col = matrix[0].length - 1;

    while(row < matrix.length && col >=0){
        const cur = matrix[row][col]
        if(cur == target) return true
        else if(cur > target) col--
        else if(cur < target) row++
    }

    return false
};

```

#### 复杂度分析
时间复杂度：O(M+N) </br>
空间复杂度：O(1)

### 思路 二分法

#### 代码 JavaScript

```JavaScript

var findNumberIn2DArray = function(matrix, target) {

    for(const row of matrix){
        if(target >= row[0] && target <= row[row.length - 1]){
            const ret = binarySearch(row, target)
            if(ret) return true
        }
    }

    return false

};

var binarySearch = function(nums, target){
    let left = 0, right = nums.length - 1

    while(left <= right){
        const mid = left + ((right - left) >> 1)

        if(target == nums[mid]) return true
        else if(target > nums[mid]) left = mid + 1
        else if(target < nums[mid]) right = mid - 1
    }

    return nums[left] == target
}
```

#### 复杂度分析
时间复杂度：O(nlogM) </br>
空间复杂度：
