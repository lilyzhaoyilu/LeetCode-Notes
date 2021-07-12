## 剑指 Offer 51. 数组中的逆序对

https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/

学习https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/solution/ni-yi-ding-neng-kan-dong-de-gui-bing-jie-fa-by-tan/

- [分治算逆序对](#思路-分治算逆序对)

- [二刷](#思路-二刷)

### 思路 二刷
注意数的方式是` ans += m - l`
本质是数每一个rightside有多少个left能match

```

[1,3,5,2,3,1]
[ 3 ] 0 [ 1 ] 0
[ 2 ] 0 [ 1, 3 ] 0
[ 1, 3, 5 ] 1 [ 1, 2, 3 ] 0
[ 1, 3, 5 ] 1 [ 1, 2, 3 ] 1
[ 1, 3, 5 ] 2 [ 1, 2, 3 ] 2

```
#### 代码 JavaScript

```JavaScript

var reversePairs = function(nums) {
    let ans = 0
    const mergeSort = (arr) => {
        if(arr.length <= 1) return arr
        const mid = (arr.length >> 1)
        // console.log(mid)
        const left = mergeSort(arr.slice(0, mid))
        const right =  mergeSort(arr.slice(mid))

        return merge(left, right)
    }

    const merge = (left, right) => {
        // console.log(left, right)
        const m = left.length, n = right.length, t = m + n;
        let l = 0, r = 0, i = 0
        const ret = new Array(m + n)
        while(i < t){
            if(l === m) ret[i++] = right[r++];
            else if(r === n) ret[i++] = left[l++];
            else if(left[l] <= right[r]) ret[i++] = left[l++]
            else if(left[l] > right[r]){
                // [5,7,9,10]  [4,6,8]
                console.log(left,l, right, r)
                ret[i++] = right[r++]
                ans += m - l
            }
        }
        return ret 
    }

    mergeSort(nums)

    return ans
};
```

#### 复杂度分析
时间复杂度： </br>
空间复杂度：
### 思路 分治算逆序对

Review

#### 代码 JavaScript

```JavaScript

var reversePairs = function(nums) {
    let sum = 0
    mergeSort(nums)
    return sum


    function mergeSort (nums){
        if(nums.length < 2) return nums;
        const mid = Math.floor(nums.length / 2)
        let left = nums.slice(0, mid)
        let right = nums.slice(mid)

        return merge(mergeSort(left), mergeSort(right))
    }

    function merge(left, right) {
        let res = [];
        let len = left.length + right.length
        for(let index = 0, i = 0, j = 0; index < len; index++) {
            if(i >= left.length) res[index] = right[j++];
            else if (j >= right.length) res[index] = left[i++];
            else if (left[i] <= right[j]) res[index] = left[i++];
            else { //left[i] > right[j]构成逆序对
                res[index] = right[j++];
                console.log(left.length , i, left, right)
                sum += left.length - i;//在归并排序中唯一加的一行代码
            }
        }
        return res;
    }

};
```

#### 复杂度分析

时间复杂度：O(NlogN) </br>
空间复杂度：O(N)
