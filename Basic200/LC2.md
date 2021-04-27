## LC 2

### 思路

### 代码

```JavaScript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let resListDummy = new ListNode(-1);

  let curNode = resListDummy;
  let ticker = false;

  while(l1 || l2){
    let temp = ((l1 && l1.val) || 0) +( (l2 && l2.val) || 0);
    if(ticker == true){
      temp += 1
      ticker = false;
    }
    if(temp >= 10){
      ticker = true;
      temp = temp % 10;
    }
    curNode.next = new ListNode(temp);
    curNode = curNode.next;
    l1 = l1 ? l1.next : 0;
    l2 = l2 ? l2.next : 0;
  }
  if(ticker == true){
    curNode.next = new ListNode(1)
  }

 return resListDummy.next;
};

```

### 复杂度分析

时间复杂度：O(N) N 是 L1 和 L2 中较长的长度
空间复杂度：O(1)只有常量
