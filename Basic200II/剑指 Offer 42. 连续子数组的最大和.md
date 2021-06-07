## 剑指 Offer 42. 连续子数组的最大和
https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/

- [动态规划](#思路-动态规划)
### 思路 动态规划
设动态规划列表 dpdp ，dp[i]dp[i] 代表以元素 nums[i]nums[i] 为结尾的连续子数组最大和。

为何定义最大和 dp[i]dp[i] 中必须包含元素 nums[i]nums[i] ：保证 dp[i]dp[i] 递推到 dp[i+1]dp[i+1] 的正确性；如果不包含 nums[i]nums[i] ，递推时则不满足题目的 连续子数组 要求。

### 思路 动态规划-压缩

#### 代码 JavaScript

```JavaScript
var maxSubArray = function(nums) {
    const dp = new Array(nums.length + 1).fill(0)
    let res = nums[0]
    let cur = nums[0]
    for(let i = 1; i < nums.length; i++){
        cur = Math.max(cur + nums[i], nums[i])
        res = Math.max(res,cur)
    }
    // console.log(dp)
    return res
};

```

#### 代码 JavaScript

```JavaScript
var maxSubArray = function(nums) {
    const dp = new Array(nums.length + 1).fill(0)
    dp[0] = nums[0]
    let res = dp[0] ;
    for(let i = 1; i < nums.length; i++){
        dp[i] = Math.max(dp[i-1] + nums[i], nums[i])
        res = Math.max(res, dp[i])
    }
    // console.log(dp)
    return res
};

```

#### 复杂度分析
时间复杂度：O(N) </br>
空间复杂度：O(N)
