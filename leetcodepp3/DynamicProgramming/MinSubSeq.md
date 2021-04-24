##

https://binarysearch.com/problems/Minimum-Sum-Subsequence

### 思路

爬楼梯换皮

### 代码

```JavaScript
class Solution {
    solve(nums) {
        if(nums.length <= 3) return Math.min(...nums)
        const dp = new Array(nums.length).fill(0);
        dp[0] = nums[0];
        dp[1] = nums[1];
        dp[2] = nums[2];
        for(let i = 3; i < nums.length; i++){
            dp[i] = Math.min(dp[i-3], dp[i-2], dp[i-1]) + nums[i]
        }
        // console.log(dp)
        return Math.min(dp[dp.length - 1],dp[dp.length - 2], dp[dp.length - 3] )
    }
}

```

### 复杂度分析

时间复杂度：O(N)
空间复杂度：O(N)
