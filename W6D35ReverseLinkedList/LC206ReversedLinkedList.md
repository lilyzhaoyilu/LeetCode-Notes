## LC 206 Reverse Linked List

### 思路

iterate through the linkedlist
point back one node per time

### 代码

```JavaScript
var reverseList = function(head) {
    let current = head;
    let prev = null;
    while (current){
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    return prev;
}

```

### 复杂度分析

时间复杂度：O(N) iterate through all nodes
空间复杂度：O(1) only storing constant number of variables

### 思路

resursive

### 代码

```JavaScript
var reverseList = function(head) {
if (!head || !head.next) return head;
let temp = reverseList(head.next);
head.next.next = head;
head.next = null;
return temp;
}

```

### 复杂度分析

时间复杂度：
空间复杂度：
