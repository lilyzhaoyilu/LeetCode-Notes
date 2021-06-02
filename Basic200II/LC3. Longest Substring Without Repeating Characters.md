## LC 3. Longest Substring Without Repeating Characters

- [双指针滑动窗口](#思路-双指针滑动窗口)

### 思路 双指针滑动窗口

#### 代码 JavaScript

```JavaScript
var lengthOfLongestSubstring = function(s) {
    const memo = new Set()
    let ans = 0
    let slow = 0;
    for(let fast = 0; fast <s.length; fast++){

        while(memo.has(s[fast])){
            memo.delete(s[slow])
            slow++
        }
        memo.add(s[fast])
        ans = Math.max(ans, fast - slow + 1)
    }

    return ans;
};

```

#### 复杂度分析

时间复杂度：O(N) </br>
空间复杂度：O(longest repeating string length)
