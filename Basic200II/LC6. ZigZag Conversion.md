## LC 6. ZigZag Conversion

### 思路

注意 numRows == 1 的特殊情况

#### 代码 JavaScript

```JavaScript
var convert = function(s, numRows) {
    if(numRows == 1) return s
    const ans = new Array(numRows).fill([])

    let step = -1
    let rowIndicator = 0
    for(let i = 0; i < s.length; i++){
        if(rowIndicator == 0 || rowIndicator == numRows - 1){
            step = -step
        }

        ans[rowIndicator]+= s[i]
        rowIndicator += step
    }
    return ans.join('')
};

```

#### 复杂度分析

时间复杂度：O(N) </br>
空间复杂度：O(N)
