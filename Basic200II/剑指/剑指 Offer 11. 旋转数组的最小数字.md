## 剑指 Offer 11. 旋转数组的最小数字
https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
- [二分](#思路-二分)

### 思路 二分
1. 我们要找的是旋转数组里的最小数字，转换成判断nums[mid]在哪个排序数组中。  
排序数组：[3,4,5,1,2] [3,4,5]是左排序数组，[1,2]是右排序数组
2. 观察nums[left]的初始值，nums[0]，发现nums[left]有可能在左排序数组，也有可能在右排序数组。比如  
[1,2,3,4,5]  
[3,4,5,1,2]
3. 再观察nums[right]的初始值，发现它和nums[mid]比较可以确定mid在哪个排序数组中，进而缩小解的范围
4. 为什么是(left < right) 因为 right = mid ，不能进一步被缩小
[1,3,5]的时候会一直循环
#### 代码 JavaScript

```JavaScript
var minArray = function(numbers) {
    let left = 0, right = numbers.length - 1

    while(left < right){
        const mid = left + ((right - left) >> 1)

        if(numbers[mid] > numbers[right]){
            left = mid + 1
        }else if(numbers[mid] < numbers[right]){
            right = mid 
        }else if(numbers[mid] == numbers[right]){
            right--
        }
    }
    
    return numbers[left]
};

```

#### 复杂度分析
时间复杂度：O(logN),特殊情况[1,1,1,1]会是O(N) </br>
空间复杂度：O(1)
https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/solution/mian-shi-ti-11-xuan-zhuan-shu-zu-de-zui-xiao-shu-3/