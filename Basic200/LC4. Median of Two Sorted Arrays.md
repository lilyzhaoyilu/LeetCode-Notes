## LC 4. Median of Two Sorted Arrays

https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
Example 3:

Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000
Example 4:

Input: nums1 = [], nums2 = [1]
Output: 1.00000
Example 5:

Input: nums1 = [2], nums2 = []
Output: 2.00000

### 思路

双指针+二分

### 代码 JavaScript

```JavaScript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {


```

### 复杂度分析

时间复杂度：O(log(m+n)) </br>
空间复杂度：O(1)

### 思路

two pointers, naive approach

### 代码 JavaScript

```JavaScript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let totalLength = nums1.length + nums2.length
  let even = totalLength % 2 == 0 ? true : false
  let midIndex = Math.floor(totalLength / 2)
  let p1 = 0, p2 = 0, count = 0, mid = 0, premid = 0;
  //[1,2,3,4]
  while(count <= midIndex){
    premid = mid
    if(nums1[p1] > nums2[p2] || p1 == nums1.length){
      mid = nums2[p2]
      p2++
    }else if (nums1[p1] <= nums2[p2] || p2 == nums2.length){
      mid = nums1[p1]
      p1++
    }
    count++
  }

  return even ? (mid + premid)/ 2 : mid
};

```

### 复杂度分析

时间复杂度：O(m+n) </br>
空间复杂度：O(1)
