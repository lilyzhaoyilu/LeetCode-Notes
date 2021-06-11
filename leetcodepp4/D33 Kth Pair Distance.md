## Kth Pair Distance

https://binarysearch.com/problems/Kth-Pair-Distance
- [二分](#思路-二分)
- [遇事不慌先暴力](#思路-遇事不慌先暴力)

### 思路 二分
这个二分是这么想出来的：
1. 首先暴力解里我们的时间是O(N^2),那再往下优化就是O(N)或者O(NlogN)
2. 首先想到logN就能想到 binary search， quick sort， merge sort， 堆排序
3. 堆排序首先排除 - 因为堆排序还是需要 O(N^2)构建所有的diff。然后就剩下 binary search， quick sort（的变种，quick select） 和merge sort。一般来说merge sort适用于对index前后顺序有要求的，这道题没有。
4. 那就剩下quick select 和 binary search。到了这一步，可以想到这道题应该转化成，在有限的解空间[0, nums.max - nums.min]中，怎么找到这样一个ret(return value的缩写，下同)，使得他是第K大的？这时候就很像是能力检测二分了。所以选择了binary search。
5. 下面就变成了怎么写能力检测了 - 这个count的写法利用了nums的单调性。当nums为非严格递增的时候，index距离越远，diff越大。
#### 代码 JavaScript

```JavaScript
class Solution {
    solve(nums, k) {
        nums.sort((a,b) => a - b)
        let left = 0, right = nums[nums.length - 1] - nums[0]

        while(left <= right){
            const mid = left + ((right - left) >> 1)
            if(this.countNotGreater(mid, nums) > k){
                right = mid - 1
            }else{
                left = mid + 1
            }
            
        }

        return left
    }

    countNotGreater(diff, nums){
        let i = 0, ret = 0;
        for(let j = 1; j < nums.length; j++){
            while(nums[j] - nums[i] > diff){
                i++
            }
            ret += j - i 
        }
        return ret
    }
}

```

#### 复杂度分析
时间复杂度：O(NlogN) 具体来说是 nums.sort => O(NlogN) + 二分 (log(nums.max - nums.min)) * countNotGreater(O(N)) ===> O(NlogN + O(logDiff) * O(N)) </br>
空间复杂度：O(1)
### 思路 遇事不慌先暴力

#### 代码 JavaScript

```JavaScript
class Solution {
    solve(nums, k) {
        if(nums.length <= 1) return 0
        const pairDiff = []
        for(let i = 0; i < nums.length; i++){
            for(let j = i+1; j < nums.length; j++){
                pairDiff.push(Math.abs(nums[i] - nums[j]))
            }
        }
        pairDiff.sort((a,b) => a- b)
        return pairDiff[k]
    }
}

```

#### 复杂度分析
时间复杂度：O(N^2) </br>
空间复杂度：O(N)
