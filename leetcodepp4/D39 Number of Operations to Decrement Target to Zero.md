## Number of Operations to Decrement Target to Zero
https://binarysearch.com/problems/Number-of-Operations-to-Decrement-Target-to-Zero

- [双指针-滑动窗口](#思路-双指针-滑动窗口)

### 思路 双指针-滑动窗口
坑：  
1. target = 0 的时候咋的都返回0就对了；
2. 把中间那段看成是窗口，sum - target = windowSum
3. 解可能有多个，所以要穷举所有解，并记录最短的那一个
4. 要讨论可能没有解 (-1) 的情况和要移除所有的情况(nums.length)
#### 代码 JavaScript

```JavaScript

class Solution {
    solve(nums, target) {
        if(target == 0) return 0
        
        //sum - target = sliding window sum
        
        let sum = 0
        for(const n of nums){
            sum += n
        }

        let res = nums.length * 2

        
        const windowTarget = sum - target
        if(windowTarget == 0) return nums.length
        else if(windowTarget < 0) return - 1
     
       for(let fast = 0, slow = 0, curSum = 0; fast < nums.length; fast++){
            curSum += nums[fast]
            while(curSum >= windowTarget && slow < nums.length){
                if(curSum == windowTarget){
                    res = Math.min(nums.length - 1 - fast + slow, res)
                }
                curSum -= nums[slow]
                slow++
            }
        }

        return res == nums.length * 2 ? -1 : res 

    }
}
```

#### 复杂度分析
时间复杂度：O(N)  
空间复杂度：O(1)  

  
## LC 1423. Maximum Points You Can Obtain from Cards
https://leetcode-cn.com/problems/maximum-points-you-can-obtain-from-cards/

### 思路 固定大小窗口

#### 代码 JavaScript

```JavaScript
var maxScore = function(cardPoints, k) {
    // pointsICanHave = Sum - windowSum
    // to max PointsICanHave, I want to minimize windowSum

    const sum = cardPoints.reduce((a,e) => a + e)
    const windowLength = cardPoints.length - k
    let windowSum = 0
    for(let fast = 0; fast < windowLength; fast++){
        windowSum += cardPoints[fast]
    }
    let minWindowSum = windowSum


    for(let fast = windowLength, slow = 0; fast < cardPoints.length; fast++, slow++){
        windowSum += cardPoints[fast]
        windowSum -= cardPoints[slow]

        minWindowSum = Math.min(windowSum, minWindowSum)
    }


    return sum - minWindowSum
};

```

#### 复杂度分析
时间复杂度：O(N) </br>
空间复杂度：O(1)