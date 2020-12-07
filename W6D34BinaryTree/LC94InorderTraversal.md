## LC 94 InorderTraversal

### 思路

中序遍历：按照访问左子树——右子树——根节点的方式遍历这棵树，而在访问左子树或者右子树的时候,我们按照同样的方式遍历，直到遍历完整棵树。
DFS Depth First Search
Recursive

### 代码

```JavaScript
var inorderTraversal = function(root) {
    if(!root) return [];
    return inorderTraversal(root.left).concat([root.val]).concat(inorderTraversal(root.right))
};
```

### 复杂度分析

时间复杂度：O(N), visit N treenodes
空间复杂度：O(N) in worst case where the binary tree is a linkedlist. On average O$log(N)$

### 思路

BFS Breadth First Search
Iteration
Using stack to imitate DFS

### 代码

```JavaScript
var inorderTraversal = function(root) {
    const stack = [];
    const res = [];
    while (root || stack.length > 0){
        while(root){
            stack.push(root);
           root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
};
};
```

### 复杂度分析

时间复杂度：O(N), visit N treenodes
空间复杂度：O(N) in worst case where the binary tree is a linkedlist. Mostly O$log(N)$
