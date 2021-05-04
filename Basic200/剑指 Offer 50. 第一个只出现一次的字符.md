## 剑指 Offer 50. 第一个只出现一次的字符

https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/

### 思路

哈希表

### 代码 JavaScript

```JavaScript
var firstUniqChar = function(s) {
  let memo = new Map();
  for(char of s){
    memo.set(char, ((memo.get(char) || 0 ) + 1))
  }

  for(const[key, value] of memo){
    if(value == 1) return key
  }

  return ' '
};

```

### 复杂度分析

时间复杂度：O(N)
空间复杂度：O(N)
