## LC 92

https://leetcode-cn.com/problems/reverse-linked-list-ii/

### 思路

四点法：确定 m-1,m,n,n+1 四个点。把从 m 到 n 反转，然后再连接到 m-1 和 n 上。
坑:

1. 如果 m 是 1，p1 就会报错，所以要用 dummyHead;
2. 如果 ListNode 长度没有 4，或者 m === n，那么就要求 p2 和 p3 的条件同时被响应，所以不能写成 switch 或者 if...else if
3. index++ 要放在前面，否则可能会...溢出~？
4. 注意 current 和 prev 的位置，否则可能溢出
5. 要 return dummyHead，因为最后一步的连接在 dummyHead 上~

### 代码

```JavaScript
var reverseBetween = function(head, m, n) {
  let dummyHead = {
    next: head
  }
  let current = dummyHead.next;
  let prev = null; ///
  let index = 0;
  let p1,p3,p2,p4 = null;
  while (current){
    const next = current.next;
    index++;
    if(index > m && index <= n){
      current.next = prev;
    }
    if (index === m - 1) {
      p1 = current;
    }
    if (index === m) {
      p2 = current;
    }

    if (index === n) {
      p3 = current;
    }

    if (index === n + 1) {
      p4 = current;
    }

    prev = current;
    current = next;

};

(p1 || dummyHead).next = p3;

p2.next = p4;

return dummyHead.next;

}

```

### 复杂度分析

时间复杂度：O(N) 遍历了 ListNode
空间复杂度：O(1) 只存储了一些常量
