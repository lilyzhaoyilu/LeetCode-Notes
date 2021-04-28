## LC 1143 最长公共子序列

### 思路

DP

### 代码

```JavaScript
var longestCommonSubsequence = function(text1, text2) {
const dp = Array.from({length: text1.length + 1}).map(() => (Array.from({length: text2.length + 1}).fill(0)))
//dp[i][j] 对应 text1[i - 1 ] text2[j- 1]因为当他们都是空集的时候最长子序列也是空集
for(let i = 1; i <= text1.length; i++){
  for(let j = 1; j <= text2.length; j++){
    if(text1[i-1] == text2[j-1]){ //如果现在的text1[i - 1] == text2[j - 1]
      dp[i][j] = dp[i - 1][j-1] + 1; //那么在dp[i][j]这个位置的子序列长度就是 dp[i - 1][j-1] + 1
    }else{
      dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
    }
  }
}

// console.log(dp)

return dp[text1.length][text2.length]
};

```

### 复杂度分析

时间复杂度：O(M*N)
空间复杂度：O(M*N)
