# LinkedList

[91讲义](https://leetcode-solution.cn/solutionDetail?type=2&id=2002&max_id=2007)

- [链表的基本操作](#链表的基本操作)
  - 插入
  - 删除
  - 遍历
- [链表的基本题型](#链表的基本题型)
  - 反转链表
  - 合并链表
  - 相交或者环形链表
  - 设计题
- [链表的三个注意](#链表的三个注意)
  - 出现环
  - 边界
  - 递归
- [链表的四个技巧](#链表的四个技巧)
  - 虚拟头
  - 快慢指针
  - 穿针引线
  - 先穿再排后判空
## 简介

- linked list（一个是存储数据的数据域，另一个是存储下一个节点指针的指针域。） ,

- doubly linked list(一个是存储数据的数据域，一个是存储下一个节点指针的指针域，一个是存储上一个节点指针的指针域。) 空间换时间。支持O(1)定位删减。

链表具有递归性质


## 链表的基本操作

### 链表的基本操作：插入

```JavaScript
const nextOne = node.next
node.next = newBee
newBee.next = nextOne
```

### 链表的基本操作：删除
```JavaScript
preToDelete.next = preToDelete.next.next;
```
### 链表的基本操作：遍历
```JavaScript
let cur = head
while(cur) cur = cur.next
```


## 链表的基本题型

### 链表的基本题型一：反转链表
```JavaScript
let cur = head, pre = null
while(cur){
  const next = cur.next;
  cur.next = pre
  pre = cur
  cur = next
}
```

### 链表的基本题型二：合并链表
制造一个dummyHead，然后双指针合并。
```JavaScript

```
### 链表的基本题型三：相交或者环形链表

#### 链表的基本题型三一：相交
1. 哈希法   
有A、B两链表，先遍历其中一个，并且存入哈希。如果遍历B的时候，遍历到哈希有的点，就是相交。

2. 双指针   
a,b 两个指针在 A、B的头部，移动速度相同。当a到达尾部，下一个到B的头部，b也同理。两人相遇的地方就是交点，否则没有交点。
因为a，b走过路程相等： a路程： A + shared + B  b路程： B + shared + A 

```JavaScript
let a = headA, b = headB;
while( a != b){
  a = a ? a.next : null
  b = b ? b.next : null

  if(a === null && b === null)return null;
  if(!a) a = headB
  if(!b) b = headA

  return a
}
```

#### 链表的基本题型三二：环形链表
1. 哈希法   
2. 快慢指针 - Floyd's   
快走2，慢走1，相遇过后快去head，再都走1，然后相遇的点就是环形链表入口。   
LC142


### 链表的基本题型四：设计题


```JavaScript

```


## 链表的三个注意

### 链表的三个注意一：出现环，造成死循环
### 链表的三个注意二：分不清边界
### 链表的三个注意三：搞不懂递归
链表具有递归性。回想二叉树遍历。   
绝大多数的题目都是单链表，而单链表只有一个后继指针。因此只有前序和后序，没有中序遍历。我们以主逻辑所在的地方定义遍历叫法。    

#### 反转链表前序
**如果是前序遍历，那么你可以想象前面的链表都处理好了，怎么处理不管。**
```JavaScript
const preOrderReverse = (head, pre = null) =>{
  if(!head) return null;
  const next = head.next;
  head.next = pre
  preOrder(next, head)
}

const preOrderReverseInterator = (head, pre = null) =>{
  while(cur != tail){
    const next = cur.next
    cur.next = pre
    pre = cur 
    cur = next
  }
}


```
![qianxu](https://mmbiz.qpic.cn/mmbiz_jpg/liaT5dytkaTdIIUUoh8P2v7gW2tiahdUBjz0fCWS6P41vmANyVvEialvKTUhgwIU8sfVq4T2wOl25IiaVVstcUUVJQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

#### 反转链表后序
**如果是后序遍历，那么你可以想象后面的链表都处理好了，怎么处理不管。**
```JavaScript
const postOrderReverse = (head) =>{
  if(!head || !head.next) return head;
  const res = postOrderReverse(head.next)
  head.next.next = head
  head.next = none
}
```

![houxu](https://mmbiz.qpic.cn/mmbiz_jpg/liaT5dytkaTdIIUUoh8P2v7gW2tiahdUBj74jdQcdJY6HDIcToM3vJDXHZnELSr84TeCUUQcbDiasZdfe8NhEuHhQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
![houxu2](https://mmbiz.qpic.cn/mmbiz_jpg/liaT5dytkaTdIIUUoh8P2v7gW2tiahdUBjSiaD5tXJkGu3BYFf88wGchz4XBicgv0ibiax89jSicWRaDpGniaYatSNicpxQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)


## 链表的四个技巧
### 链表的四个技巧一：虚拟头dummyHead
### 链表的四个技巧二：快慢指针
1. 处理环
2. 处理交点
3. 找第k个点（让一个先走几步，另一个再走）
4. 穿针引线 - 反转某段已经反转的列表

![houxu2](https://mmbiz.qpic.cn/mmbiz_jpg/liaT5dytkaTdIIUUoh8P2v7gW2tiahdUBjJeibAnKTWHhwvJ3v0YBk1kT8k6mfW7RKO9mWpaHGEQnCyq72RWmfPyA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

```JavaScript
a.next = c
b.next = d
```

### 链表的四个技巧三：先穿再排后判空
先把穿的都写了，然后排序，最后再看需要判空不。