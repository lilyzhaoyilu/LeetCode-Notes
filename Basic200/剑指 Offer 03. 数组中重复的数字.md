## 剑指 Offer 03. 数组中重复的数字

https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/

### 思路

用 set 如果包含了 就 return

### 代码

```JavaScript
var findRepeatNumber = function(nums) {
  let memo = new Set();

  for(num of nums){
    if(memo.has(num)) return num;
    memo.add(num)
  }
};

```

### 复杂度分析

时间复杂度：O(N)
空间复杂度：O(N)
