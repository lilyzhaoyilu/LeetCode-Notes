## LC 986. Interval List Intersections
https://leetcode-cn.com/problems/interval-list-intersections/
- [双指针](#思路-双指针)

### 思路 双指针

#### 代码 JavaScript

```JavaScript
var intervalIntersection = function(firstList, secondList) {
    const ret = [];
    let i = 0, j = 0;

    while(i < firstList.length && j < secondList.length){
        const start = Math.max(firstList[i][0], secondList[j][0])
        const end = Math.min(firstList[i][1], secondList[j][1])
        if(start <= end) ret.push([start, end])

        firstList[i][1] < secondList[j][1] ? i++ : j++
    }

    return ret
    
};

```

#### 复杂度分析
时间复杂度： </br>
空间复杂度：