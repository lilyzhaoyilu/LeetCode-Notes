## LC 2. Add Two Numbers

- [更好的写法](#思路-更好的写法)
- [naive](#思路-naive)

### 思路 更好的写法

#### 代码 JavaScript

```JavaScript
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    const dummyHead = new ListNode(0)
    let node = dummyHead
    while(l1 || l2){
      //利用n1 和 n2 进行空判
        const n1 = l1 ? l1.val : 0
        const n2 = l2 ? l2.val : 0

        let sum = n1 + n2 + carry
        // cur 是 % 10
        let cur = sum % 10
        // carry 是 floor / 10 如果不到10 就是0
        carry = Math.floor(sum / 10)

        node.next = new ListNode(cur)
        node = node.next

        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }
    if(carry) node.next = new ListNode(1)
    return dummyHead.next
};

```

#### 复杂度分析

时间复杂度：O(N) </br>
空间复杂度：O(1)

### 思路 naive

#### 代码 JavaScript

```JavaScript
var addTwoNumbers = function(l1, l2) {
    let carry = false
    const dummyHead = new ListNode(0)
    let node = dummyHead
    while(l1 && l2){
        let cur = l1.val + l2.val

        if(carry){
            cur++
            carry = false
        }

        if(cur >= 10){
            carry = true
            cur = cur % 10;
        }
        l1 = l1.next
        l2 = l2.next
        node.next = new ListNode(cur)
        node = node.next
    }
    let next = l1 || l2
    while(next){
        let cur = next.val
        if(carry){
        cur++
        carry = false
        }
        if(cur >= 10){
            carry = true
            cur = cur % 10;
        }
        node.next = new ListNode(cur)
        node = node.next
        next = next.next

    }
    if(carry) node.next = new ListNode(1)

    return dummyHead.next

};
```

#### 复杂度分析

时间复杂度：O(Max(N+M)) </br>
空间复杂度：O(1)
