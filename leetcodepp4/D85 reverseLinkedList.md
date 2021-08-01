# Reverse LinkedList

## LC 206. Reverse Linked List
https://leetcode-cn.com/problems/reverse-linked-list/

### 思路 原地转换

#### 代码 JavaScript

```JavaScript
var reverseList = function(head) {
    if(!head || !head.next) return head;
    let cur = head, pre = null; 
    while(cur){
        const nextNode = cur.next;
        cur.next = pre;

        pre = cur;
        cur = nextNode;
    }
    return pre;
};

```

### 思路 递归

#### 代码 JavaScript

```JavaScript
var reverseList = function(head) {
    if(!head || !head.next) return head;

    const nextNode = head.next;
    const reverse = reverseList(nextNode)
    nextNode.next = head
    head.next = null;

    return reverse
};

```


## LC 92. Reverse Linked List II
https://leetcode-cn.com/problems/reverse-linked-list-ii/
学习宫水三叶的题解

#### 代码 JavaScript

```JavaScript
var reverseBetween = function(head, left, right) {
    const dummyHead = new ListNode(-1, head)
    let diff = right - left;

    let curNode = dummyHead;

    while(left-- > 1)  curNode = curNode.next;

    let a = curNode.next, b = a.next;

    while(diff-- > 0){
        const nextNode = b.next;
        b.next = a;
        a = b;
        b = nextNode;
    }

    curNode.next.next = b;
    curNode.next = a;

    return dummyHead.next;
};

```


## LC 25. Reverse Nodes in k-Group
https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
- [辅助栈](#思路-辅助栈)

### 思路 辅助栈

#### 代码 JavaScript

```JavaScript
var reverseKGroup = function(head, k) {
    if(!head || !head.next) return head;
    const dummyHead = new ListNode(-1, head);
    let cur = head;
    let curHead = head, pre = dummyHead;
    const stack = [];
    while(cur){

        while(cur && stack.length < k){
            stack.push(cur)
            cur = cur.next;
        }

        if(stack.length < k) break;
        
        while(stack.length){
            let node = stack.pop();
            node.next = null;
            pre.next = node;
            pre = pre.next;
        }
        
    }

    pre.next = stack[0] ? stack[0] : null;   

    return dummyHead.next;
};

```

