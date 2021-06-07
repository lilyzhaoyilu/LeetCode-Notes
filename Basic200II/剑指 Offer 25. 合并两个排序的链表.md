## 剑指 Offer 25. 合并两个排序的链表
https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
- [双指针](#思路-双指针)

### 思路 双指针
也可以把判空逻辑放在外面，直接接上
#### 代码 JavaScript

```JavaScript
var mergeTwoLists = function(l1, l2) {
    const dummyHead = new ListNode(0)
    let cur = dummyHead;
    let p1 = l1, p2 = l2

    while(p1 || p2){
        if(!p2){
            cur.next = p1
            p1 = p1.next
        }else if(!p1){
            cur.next = p2
            p2 = p2.next
        }else if(p1.val < p2.val){
            cur.next = p1
            p1 = p1.next
        }else{
            cur.next = p2
            p2 = p2.next
        }
        cur = cur.next
    }

    return dummyHead.next
};

```

#### 复杂度分析
时间复杂度：O(M+N) </br>
空间复杂度：O(1)
