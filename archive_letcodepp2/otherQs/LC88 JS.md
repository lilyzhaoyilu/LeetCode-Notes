## LC 88

### 思路
3 pointers, from the end 

### 代码
 ``` JavaScript
var merge = function(nums1, m, nums2, n) {
let pointer = m + n - 1;
let pointer1 = m - 1;
let pointer2 = n -1;

while (pointer1 >= 0 && pointer2 >= 0){
  nums1[pointer--] = (nums1[pointer1] < nums2[pointer2]) ? nums2[pointer2--] :nums1[pointer1--]}
while(pointer2 >= 0){
  nums1[pointer--] = nums2[pointer2--];
}
};

```
### 复杂度分析
时间复杂度：O(n)
空间复杂度：O(1)