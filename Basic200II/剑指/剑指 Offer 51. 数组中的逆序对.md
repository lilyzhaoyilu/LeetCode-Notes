## 剑指 Offer 51. 数组中的逆序对

https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/

学习https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/solution/ni-yi-ding-neng-kan-dong-de-gui-bing-jie-fa-by-tan/

- [分治算逆序对](#思路-分治算逆序对)

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
