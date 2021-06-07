## 剑指 Offer 06. 从尾到头打印链表
https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
- [辅助栈法](#思路-辅助栈法)
- [递归](#思路-递归)

### 思路 递归

#### 代码 JavaScript

```JavaScript

var reversePrint = function(head) {
    if(!head) return []
    return reversePrint(head.next).concat([head.val])
};
```

#### 复杂度分析
时间复杂度： </br>
空间复杂度：

### 思路 辅助栈法

#### 代码 JavaScript

```JavaScript
var reversePrint = function(head) {
    const res = []
    while(head){
        res.push(head.val)
        head = head.next
    }

    return res.reverse()
};

```

#### 复杂度分析
时间复杂度： </br>
空间复杂度：
