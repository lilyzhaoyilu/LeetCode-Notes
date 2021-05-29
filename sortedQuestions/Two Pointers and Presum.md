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

# 前缀和

## 前缀和公式

pre[𝑖]=pre[𝑖−1]+nums[𝑖]

### 例题 1

如果让你求一个数组的连续子数组总个数，你会如何求？其中连续指的是数组的索引连续。 比如 [1,3,4]，其连续子数组有：[1], [3], [4], [1,3], [3,4] , [1,3,4]，你需要返回 6。

一种思路是总的连续子数组个数等于：以索引为 0 结尾的子数组个数 + 以索引为 1 结尾的子数组个数 + ... + 以索引为 n - 1 结尾的子数组个数，这无疑是完备的。
![image](!https://pic.leetcode-cn.com/1601445881-ZCdAdB-007S8ZIlly1gj6m27kgbsj306u06gt8u.jpg)

```JavaScript
function countSubArray(nums) {
  let ans = 0;
  let pre = 0;
  for (_ in nums) {
    pre += 1;
    ans += pre;
  }
  return ans;
}
而由于以索引为 i 结尾的子数组个数就是 i + 1，因此这道题可以直接用等差数列求和公式 (1 + n) * n / 2，其中 n 数组长度。
```

### 例题 2

我继续修改下题目， 如果让你求一个数组相邻差为 1 连续子数组的总个数呢？其实就是索引差 1 的同时，值也差 1。

和上面思路类似，无非就是增加差值的判断。

```JavaScript
function countSubArray(nums) {
  let ans = 1;
  let pre = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] == 1) {
      pre += 1;
    } else {
      pre = 0;
    }

    ans += pre;
  }
  return ans;
}
```

### 例题 3

如果我让你求出不大于 k 的子数组的个数呢？不大于 k 指的是子数组的全部元素都不大于 k。 比如 [1,3,4] 子数组有 [1], [3], [4], [1,3], [3,4] , [1,3,4]，不大于 3 的子数组有 [1], [3], [1,3] ，那么 [1,3,4] 不大于 3 的子数组个数就是 3。 实现函数 atMostK(k, nums)。

```JavaScript
function countSubArray(k, nums) {
  let ans = 0;
  let pre = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= k) {
      pre += 1;
    } else {
      pre = 0;
    }

    ans += pre;
  }
  return ans;
}

```

### 例题 4+5

如果我让你求出子数组最大值刚好是 介于 k1 和 k2 的子数组的个数呢？实现函数 betweenK(k1, k2, nums)。

实际上是 betweenK 可以直接利用 atMostK，即 atMostK(k1, nums) - atMostK(k2 - 1, nums)，其中 k1 > k2。前提是值是离散的， 比如上面我出的题都是整数。因此我可以直接 减 1，因为 「1 是两个整数最小的间隔」。
![pic](!https://mmbiz.qpic.cn/mmbiz_jpg/liaT5dytkaTfA9bBFIfOuOx0XicUIiauv7JkTgKUicV8XuBMqicPwia26Mcbn7x2x9PWpolPDtQwicOTicpfYhFyEjwTVA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
如上，小于等于 10 的区域减去 小于 5 的区域就是 大于等于 5 且小于等于 10 的区域。

注意我说的是**小于 5**， 不是小于等于 5。由于整数是离散的，最小间隔是 1。因此小于 5 在这里就等价于 小于等于 4。这就是 **betweenK(k1, k2, nums) = atMostK(k1) - atMostK(k2 - 1)**的原因。

因此不难看出 exactK 其实就是 betweenK 的特殊形式。当 k1 == k2 的时候， betweenK 等价于 exactK。

因此 atMostK 就是灵魂方法，一定要掌握，不明白建议多看几遍。
