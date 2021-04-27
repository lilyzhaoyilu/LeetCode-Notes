## LC 7

https://leetcode-cn.com/problems/reverse-integer/

### 思路

### 代码

```JavaScript
var reverse = function(x) {
  if(x < 10 && x > -10) return x;
  let negative = x < 0 ? true : false;
  x = Math.abs(x);
  let result = 0;
  while(x >= 10){
    result = result * 10;
    result += x % 10;
    x = Math.floor(x/10)
  }
  result = result * 10 + x
  if(result > Math.pow(2,31)) return 0;

  return negative ? -result : result;
};

```

### 复杂度分析

时间复杂度：O(log(x))
空间复杂度：O(1)
