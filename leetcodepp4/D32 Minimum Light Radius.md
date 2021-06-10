## Minimum Light Radius

https://binarysearch.com/problems/Minimum-Light-Radius


### 思路 二分 - 能力检测
枚举灯是否能cover所有house那比较绕...其他都是标准的能力检测二分。
#### 代码 JavaScript

```JavaScript
class Solution {
    solve(nums) {
        // nums might distributed unevenly... like [0,0,0,0, 3]
        //能力检测二分
        nums.sort((a,b) => a -b ) //O(NlogN)
        const N = nums.length
        if(N <= 3) return 0
        
        const LIGHTS = 3

        //这里搜索的是直径的可能性，（直径 = 2 * 半径）
        let left = 0, right = nums[nums.length - 1] - nums[0]

        //O(logN * LIGHTS * logN)
        while(left <= right){
            const mid = left + ((right - left) >>1)
            if(this.possible(nums, mid, LIGHTS, N)) right = mid - 1
            else left = mid + 1
        }

        return left / 2
    }


    possible(nums, diameter, LIGHTS, N){
        //等价转换问题，就是L个LIGHTS以 diameter为直径的时候是否能cover每一个在nums中的元素
        //等价转换问题，就是有n个diameter，是否能cover每一个在nums中的元素
        //介于nums中的元素是不平均分布的。平均分布：[1,2,3,4] 不平均分布:[0,0,0,3]
        //可以枚举每段diameter的cover状况
        //枚举每段diameter的cover 状况 -> 二分法最右查找
        let oneLightStart = nums[0]
        let oneLightend = start + diameter
        for (let i = 0; i < LIGHTS; i++) {
            let idx = bright(nums, end)
            if (idx >= N) return true

            //这里是cover前一段了之后，下一个衔接继续cover
            //因为最右二分返回的index是  左边这个数小于等于target 
            //所以其实最右二分返回的index是第一个没法被上一个灯 cover到的house
            //所以我们在寻找下一个灯的时候，可以直接 oneLightStart = nums[idx]
            oneLightStart = nums[idx]
            oneLightend = oneLightStart + diameter
        }
        return false
    }

    bright(nums, target){
        let left = 0, right = nums.length - 1

        while(left <= right){
            const mid = left + ((right - left) >>1)
            if(nums[mid] == target) left = mid + 1
            else if (nums[mid] > target) right = mid - 1
            else if(nums[mid] < target) left = mid + 1
        }
        return left
    }
}

```

#### 复杂度分析
时间复杂度：O(NlogN) 具体算下来 是排序O(NlogN) 每个bright是logN，每个possible就是Light * LogN。一共最多call(log(nums.max - nums.min)次possible)掐指一算那就是O(NlogN + log(max-min) * 1 * logN) 最后就应该是O(NlogN) </br>
空间复杂度：O(1)
