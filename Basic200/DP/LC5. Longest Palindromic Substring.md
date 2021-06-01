## LC 5. Longest Palindromic Substring

- [朴素 dp 动态](#思路-朴素dp动态)
- [中心点](#思路-中心点)

### 思路 朴素 dp 动态

#### 代码 JavaScript

```JavaScript
var longestPalindrome = function(s) {
     if (!s || s.length === 0) return "";
    let res = s[0];

    const dp = Array.from({length:s.length})
    //dp[i][j] 从i到j的最长回文字符串长度
    for(let i = s.length - 1; i >=0; i--){
        dp[i] = []
        for(let j = i; j < dp.length; j++){
            if(i === j) dp[i][j] = true;
            else if(j - i === 1 && s[i] == s[j]) dp[i][j] = true
            else if(s[i] === s[j] && dp[i + 1][j - 1]) dp[i][j] =true

            if(dp[i][j] && j - i + 1 > res.length){
                res = s.slice(i, j + 1)
            }
        }
    }
    return res;
};

```

#### 复杂度分析

时间复杂度：O(N^2) </br>
空间复杂度：O(N^2)

### 思路 中心点

以每个都是中心点进行滑动窗口？探索

#### 代码 JavaScript

```JavaScript
var longestPalindrome = function(s) {

    var findFromMid = function(i,j){
        while(i >=0 && j < s.length && s[i] == s[j]){
            i--
            j++
        }
        if(res.length < j - i - 1){
            res = s.slice(i + 1, j)
        }
    }

    let res = ''

    for(let i = 0; i < s.length; i++){
        findFromMid(i, i)
        findFromMid(i, i + 1)
    }

    return res;
};


```

#### 复杂度分析

时间复杂度：O(N^2) </br>
空间复杂度：O(1)
