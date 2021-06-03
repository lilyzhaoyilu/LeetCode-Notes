## LC 7. Reverse Integer

### 思路

注意 Math.floor(1/ 10) = 0
利用这个特性
然后记得看条件

#### 代码 JavaScript

```JavaScript
var reverse = function(x) {
    if(x == 0) return 0
    let negative = false;
    if(x < 0){
        negative = true
        x = -x
    }

    let ans = 0
    while(x > 0){
        ans = ans * 10 + x % 10
        x = Math.floor(x / 10)
    }

    ans = negative ? -ans : ans
    return (ans >= (-2) ** 31 && ans <= (2 ** 31 - 1)) ? ans : 0
};

```

#### 复杂度分析

时间复杂度：O(N) N 等于 number 的长度 </br>
空间复杂度：O(1)
