## 剑指 Offer 29. 顺时针打印矩阵
https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/

### 思路
注意初始值别忘记加
#### 代码 JavaScript

```JavaScript
var spiralOrder = function(matrix) {
    if(matrix.length == 0 || matrix[0].length == 0) return []
    //(0,1) (1,0) (-1,0) (0,-1)
    const visited = new Set;
    var checker = function(row, col){
        if(col < 0 || row < 0 || col >= matrix[0].length || row >= matrix.length || visited.has(`${row}&${col}`)){
            return false
        }else{
            return true
        }
    }   
    const guide = [[0,1],[1,0],[-1,0], [0,-1]]

    let col = 0, row = 0, res = [matrix[0][0]], guideIndex = 0
    visited.add(`${0}&${0}`)
    const total = matrix[0].length * matrix.length

    while(res.length < total){
        while(!checker(row + guide[guideIndex][0], col + guide[guideIndex][1])){
            guideIndex++
            guideIndex = guideIndex % guide.length
        }
        row += guide[guideIndex][0]
        col += guide[guideIndex][1]
        res.push(matrix[row][col])
        // console.log(res)
        visited.add(`${row}&${col}`)
    }

    return res;

};


```

#### 复杂度分析
时间复杂度：O(MN) </br>
空间复杂度：O(MN) visited
