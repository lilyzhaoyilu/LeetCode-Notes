## 剑指 Offer 03. 数组中重复的数字
https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
- [O(1)space](#思路-O(1)space)

### 思路 O(1)space
发现数值和数组引索是一对多的关系
#### 代码 JavaScript

```JavaScript
var findRepeatNumber = function(nums) {
    //establish a relationship between index and nums[index]
    //  nums[index] = index
    // while nums[index] != index
    // swap nums[index] to nums[nums[index]]
    //iterate through, if we find one where nums[i] == i, then it is the duplication


    for(let i = 0; i < nums.length; i++){
        if(nums[i] == i) continue
        

        while(nums[i] != i){
            let temp = nums[nums[i]]
            //注意这里 
            if(nums[nums[i]] == nums[i]) return nums[i]
            nums[nums[i]] = nums[i]
            nums[i] = temp;
        }

    }

    return -1
};

```

#### 复杂度分析

时间复杂度：O(N) </br>
空间复杂度：O(1)
