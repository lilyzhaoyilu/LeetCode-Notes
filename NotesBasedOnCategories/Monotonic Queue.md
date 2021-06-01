## Monotonic Stack 单调栈

学习https://mp.weixin.qq.com/s/Mb8PAxMj2KLTQ1QrCh8XAA

### Monotonic Stack 单调栈

- 单调递增栈
- 单调递减栈

通常用作

- 下一个大于 xxx
- 下一个小于 xxx
- 如果有 nums， 其每个 digit 最小的排列方法是递增栈，最大的排列方式是递减栈
- 有一堆 digits，找最大/最小的排列方式
- push index in
  技巧  
  可以添加哨兵在 array 尾部或头部

#### 操作方式

一直 push 新的元素，如果新的元素不满足单调栈特性，则 pop 到让新入的栈可以满足特性为止  
这个 push 也可以是 index

### 复杂度

- Time:由于 arr 的元素最多只会入栈，出栈一次，因此时间复杂度仍然是 ，其中 N 为数组长度。
- Space: O(N)

### 模板 在其之后第一个大于其本身的位置 => 单调递减栈

```JavaScript
var monostoneStack = function (T) {
  //存储的stack
  let stack = [];
  //结果
  let result = [];

  for (let i = 0; i < T.length; i++) {
    result[i] = 0;
    // let topOfStack = T[stack[stack.length - 1]]
    //这里维持的是单调递减栈 - 遇到不符合规则的/遇到更大的就弹出
    while (stack.length > 0 && T[stack[stack.length - 1]] < T[i]) {
      let peek = stack.pop();
      //这里求的是在res[index] = distance of the first rule breaker
      result[peek] = i - peek;

      //也可以是result[peek] = i 那就是 index of the 1st rule breaker
    }
    stack.push(i);
  }

  return result;
};
```

#### stack - LIFO

常用操作

- push 放到栈顶 O(1)
- pop 推出栈顶元素 O(1)
- top 查看栈顶元素
- isEmpty

通常用作

- 寻找下一个更大/更小的元素
- 匹配括号
- 迭代调用/函数调用

Qs 42. 接雨水[1]

84.柱状图中最大的矩形[2]

739.每日温度[3]

316 去除重复字母

402 移掉 K 位数字

496 下一个更大元素 I

581 组

901 股票价格跨度
