## LC 8. String to Integer (atoi)
https://leetcode-cn.com/problems/string-to-integer-atoi/

### 思路 string
注意 + - 只能有一个 所以要用if else if
#### 代码 JavaScript

```JavaScript
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let ans = 0
    let p = 0
    let negative = false

    while(s[p] == ' '){p++}
    if(s[p]== '-'){
        negative = true
        p++
    }else if (s[p] == '+') p++

    while(s[p] >= '0' && s[p] <= '9'){
        ans = ans * 10 + Number(s[p])
        p++
    }
    ans = negative ? ans * -1 : ans
    if(ans < (-2)** 31){
        ans = (-2)** 31
    }else if(ans > (2**31) - 1){
        ans = (2**31) - 1
    }
    return ans

};

```

#### 复杂度分析
时间复杂度： </br>
空间复杂度：
