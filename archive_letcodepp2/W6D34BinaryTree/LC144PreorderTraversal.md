## LC 144 preorderTraversal

### 思路

前序遍历：按照访问根节点——左子树——右子树的方式遍历这棵树，而在访问左子树或者右子树的时候，我们按照同样的方式遍历，直到遍历完整棵树。
DFS Depth First Search
Recursive

### 代码

```JavaScript
var preorderTraversal = function(root) {
    if(!root) return [];
    let res = [];
    res.push(root.val);
    return res.concat(preorderTraversal(root.left), preorderTraversal(root.right))
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
var preorderTraversal = function(root) {
    const stack = [root];
    const res = [];
    while (stack.length > 0){
        let node = stack.pop();
        if (node){
            res.push(node.val)
            stack.push(node.right, node.left) // because it is a stack and stack.pop gets the last one first
        }
    }
    return res;
};
```

### 复杂度分析

时间复杂度：O(N), visit N treenodes
空间复杂度：O(N) in worst case where the binary tree is a linkedlist. Mostly O$log(N)$
