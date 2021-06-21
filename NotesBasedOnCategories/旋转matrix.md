```JavaScript
var rotate = function(matrix) {
    let n = matrix.length
    const ans = new Array(n).fill(0).map(() => new Array(n).fill(0))
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            ans[j][n - i - 1] = matrix[i][j]
        }
    }
}
```

`newMatrix[col][n - row - 1] = matrix[row][col]`

或者原地反转
```
var rotate = function(matrix) {
    const n = matrix.length;
    // 水平翻转
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < n; j++) {
            [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
        }
    }
    // 主对角线翻转
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
};

```