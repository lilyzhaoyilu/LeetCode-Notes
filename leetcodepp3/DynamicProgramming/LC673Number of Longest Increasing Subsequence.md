## LC 673. Number of Longest Increasing Subsequence

https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/

### 思路

### 代码

```JavaScript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  if(nums.length == 1) return 1
  const dp = new Array(nums.length ).fill(1);
  const count = new Array(nums.length).fill(1);
  //dp[index必选] = 子上升序列长度
  // dp[0] = 1;
  let maxLength = 0;
  for(let i = 1; i < nums.length; i++){
    for(let j = 0; j < i; j++){
      if(nums[j] < nums[i]) {

        if(dp[i] < dp[j]+1){
          // console.log('dp[i] < dp[j]+1', `i:${i}, j${j}`, dp,' ---------' , count)
          dp[i] = dp[j] + 1
          count[i] = count[j]
        }else if(dp[i] == dp[j] + 1){ //这个时候说明之前已经计算过一次dp[i] = dp[j] + 1 了
        //也就是说现在的dp[i]的值已经是最大值了，所以当dp[i] == dp[j] + 1 的时候，就代表
        //遇到了两次相同的子序列长度
        //所以count++
          // console.log('dp[i] == dp[j] + 1', `i:${i}, j${j}`, dp,' ---------' , count)
          count[i] += count[j]
        }

      }
    }
    // console.log(`this i ${i}`, dp)
    maxLength = Math.max(maxLength, dp[i])
  }
  // console.log(dp, count, maxLength)
  let res = 0;
  for(let i = 0; i < dp.length; i++){
    if(dp[i] == maxLength) res+= count[i]
  }
  return res;

};

```

### 复杂度分析

时间复杂度：O(N^2)
空间复杂度：O(N)
