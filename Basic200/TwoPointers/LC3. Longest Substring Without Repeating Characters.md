## LC 3. Longest Substring Without Repeating Characters

- [双指针](#思路-双指针)

### 思路 双指针

#### 代码 JavaScript

```JavaScript
var lengthOfLongestSubstring = function(s) {
  let include = new Set();
  let slow = 0, ans = 0

  for(let fast = 0; fast < s.length; fast++){
    if(!include.has(s[fast])){
      include.add(s[fast])

    }else{
      while(include.has(s[fast])){
        include.delete(s[slow])
        slow++
      }
      include.add(s[fast])
    }
    ans = Math.max(ans, include.size)
  }
  return ans;
};

```

#### 复杂度分析

时间复杂度：O(N) </br>
空间复杂度：O(|\Sigma|∣Σ∣)|\Sigma|∣Σ∣ 表示字符集的大小
