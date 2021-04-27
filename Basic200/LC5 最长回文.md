## LC 5

https://leetcode-cn.com/problems/longest-palindromic-substring/

### 思路

dp （暴力也可以，不写了。。）

### 代码

```JavaScript
var longestPalindrome = function(s) {
  if(s.length < 2) return s;
  let maxLength = 1;
  let result = s[0]; //坑 这里比如'ac'的最长回文就是a或者c
  const dp = Array.from({length:s.length + 1}).map(()=>(Array.from({length:s.length + 1}).fill(false)))
  //dp[i][j] 表示s[i..j]是否为回文串 初始化为false
  for(let i = 0; i < dp.length; i++){
    dp[i][i] = true
  }
  //初始化 所有s[i..i]就是s[i]他自己都是个回文串
  // console.log(dp)
  for(let l = s.length - 1; l > 1; l--){
    for(let r = 1; r < s.length; r++){
      if(l >= r) continue; //这里要么不合法，要么是dp[i][i]的情况（已经算过了），
      if(s[l] == s[r]){//这是有可能组成更长回文的开端
        if(l + 1 == r){//如果是'accb'里的cc 那么这种情况可以直接是true
          dp[l][r] = true;
        }else{
          dp[l][r] = dp[l + 1][r - 1]; //不然的话看去除s[l] 和 s[r]是否的substring是否还是回文
        }

        if(dp[l][r] && maxLength < (r - l + 1)){
          maxLength = r - l + 1;
          result = s.slice(l, r+1)
        }
      }

    }
  }
  // console.log(dp)
  return result;
};

```

### 复杂度分析

时间复杂度：O(N^2)遍历两遍
空间复杂度：O(N^2)dp 的长度
