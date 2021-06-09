## 剑指 Offer 27. 二叉树的镜像
https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/
- [递归](#思路-递归)
- [迭代](#思路-迭代)

### 思路 迭代
栈或者queue并没有区别
#### 代码 JavaScript

```JavaScript

var mirrorTree = function(root) {
    if(!root) return null;

    const queue = [root]

    while(queue.length){
        const node = queue.shift()
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
        let temp = node.right
        node.right = node.left
        node.left = temp
    }

    return root

};
```

#### 复杂度分析
时间复杂度： </br>
空间复杂度：

### 思路 递归

#### 代码 JavaScript

```JavaScript
var mirrorTree = function(root) {
    if(!root) return null
    const left = mirrorTree(root.left)
    const right = mirrorTree(root.right)

    root.left = right
    root.right = left
    return root
};

```

#### 复杂度分析
时间复杂度：O(N) </br>
空间复杂度：O(N)
