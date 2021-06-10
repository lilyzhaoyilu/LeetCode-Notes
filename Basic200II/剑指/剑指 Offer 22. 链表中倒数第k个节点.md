## 剑指 Offer 22. 链表中倒数第k个节点
https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
- [双指针](#思路-双指针)
- [双指针](#思路-双指针)

### 思路 双指针

#### 代码 JavaScript

```JavaScript
var getKthFromEnd = function(head, k) {
    if(!head) return head
//倒数第一个-> slow fast 同时走 fast.next = null 的时候停下 
//倒数第二个-> slow  fast  先走一步 fast.next = null 的时候停下
//倒数第三个 -> slow fast fast先走2步 fast.next = null 的时候停下

    let fast = head, slow = head;
    while(k > 0){
        fast = fast.next
        k--
    }

    while(fast){
        fast = fast.next
        slow = slow.next
    }

    return slow
};

```

#### 复杂度分析
时间复杂度：O(N) </br>
空间复杂度：O(1)

### 思路 双指针

#### 代码 JavaScript

```JavaScript
var getKthFromEnd = function(head, k) {
    if(!head) return head
//倒数第一个-> slow fast 同时走 fast.next = null 的时候停下 
//倒数第二个-> slow  fast  先走一步 fast.next = null 的时候停下
//倒数第三个 -> slow fast fast先走2步 fast.next = null 的时候停下

    let fast = head, slow = head;
    while(k > 1){
        fast = fast.next
        k--
    }

    while(fast.next){
        fast = fast.next
        slow = slow.next
    }

    return slow
};

```

#### 复杂度分析
时间复杂度：O(N) </br>
空间复杂度：O(1)
