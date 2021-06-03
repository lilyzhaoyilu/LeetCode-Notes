## LC 9. Palindrome Number

### 思路 解法副标题

#### 代码 JavaScript

```JavaScript
var isPalindrome = function(x) {
    if(x < 0) return false

    // 最后一位是0的不可能是true
    // 但0 自己可以是true
    if(x % 10 == 0 && x != 0) return false;

    let thehalf = 0
    while(x > thehalf){
        thehalf = thehalf * 10 + x % 10
        x = Math.floor(x / 10)
    }

    //分别讨论x是偶数长度      x是奇数长度 比如121  那么结果就是 1 和 12 需要地板除
    return (x == thehalf) || (x == (Math.floor(thehalf / 10)))
};

```

#### 复杂度分析

时间复杂度：O(logN) </br>
空间复杂度：O(1)
