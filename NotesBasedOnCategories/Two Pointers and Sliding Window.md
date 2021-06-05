# Two Pointers / Siding Window

https://github.com/azl397985856/leetcode/blob/master/thinkings/slide-window.md  
前缀和  
https://mp.weixin.qq.com/s/6hTbcin64TtHi0UEpvkchA
二维前缀和
https://mp.weixin.qq.com/s/PR8i45CBmWeB3aLSC36mlQ

## Complexity

Time:O(N)  
跟最内层循环主体的执行次数有关，跟多少重循环无关  
Space: O(1)

## 常见使用

1. 滑动窗口(90%)
2. 时间复杂度 O(N)（80%）
3. 原地交换，不能使用额外空间(80%)
4. 有 subarray / substring 关键词(50%)
5. 回文 palindrome （50%）
6. 前缀和

## 常见题型

-[固定窗口大小](#题型-固定窗口大小)  
-[求满足条件最大窗口/最小窗口](#题型-求满足条件最大窗口/最小窗口)

### 题型 固定窗口大小

1. l 初始化 0
2. r 初始化 r - l + 1 => 窗口大小
3. 同时移动 l r
4. 判断窗口内元素是否满足条件
   扩张窗口找到可行解，收缩窗口直到不可行，然后再扩张

- 如果满足，考虑更新解

- 如果不满足，继续

### 题型 求满足条件最大窗口/最小窗口

1. l r 初始化为 0
2. r++
3. 判断窗口内连续元素是否满足条件

- 如果满足，考虑更新解，并且移动 l
- 如果不满足，重复  
  就是 r 指针不停向右移动，l 指针仅仅在窗口满足条件之后才会移动，起到窗口收缩的效果。

### 模板

```
初始化慢指针 = 0
初始化 ans

for 快指针 in 可迭代集合
   更新窗口内信息
   while 窗口内不符合题意/窗口内符合题意
      扩展窗口/收缩窗口
      慢指针移动
   更新答案
返回 ans
```

[LC209. Minimum Size Subarray Sum](https://leetcode-cn.com/problems/minimum-size-subarray-sum/)

```JavaScript
var minSubArrayLen = function(target, nums) {

  let ans = nums.length + 1
  let windowTotal = 0, slow = 0;
  //快指针
  for(let fast = 0; fast< nums.length; fast++){
    //更新窗口内信息
    windowTotal+= nums[fast]
    //while窗口内信息符合要求
    while(windowTotal>=target){
      //检查答案
      ans = Math.min(ans, fast - slow + 1)
      //慢指针移动
      windowTotal -= nums[slow]
      slow++
    }
  }

  return ans === nums.length + 1 ? 0 : ans
};
```

### 双指针 删除重复项

由于是保留 k 个相同数字，对于前 k 个数字，我们可以直接保留。
对于后面的任意数字，能够保留的前提是：与当前写入的位置前面的第 k 个元素进行比较，不相同则保留。

```JavaScript
var removeDuplicates = function(nums) {

    var process = function(nums, k){
        let slow = 0
        for(let fast = 0; fast < nums.length; fast++){
            if( slow < k || nums[slow - k] != nums[fast]){
                nums[slow] = nums[fast]
                slow++
            }
        }
        return slow;
    }

    return process(nums, 2)
};

```
