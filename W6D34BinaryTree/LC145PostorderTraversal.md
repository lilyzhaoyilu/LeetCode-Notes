## LC 144 PostorderTraversal

### 思路

后序遍历：按照访问左子树——右子树——根节点的方式遍历这棵树，而在访问左子树或者右子树的时候，按照同样的方式遍历，直到遍历完整棵树.
DFS Depth First Search
Recursive

### 代码

```JavaScript
var postorderTraversal = function(root) {
if(!root) return [];
    return postorderTraversal(root.left).concat(postorderTraversal(root.right)).concat([root.val])
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
var postorderTraversal = function(root) {
    if (!root) return [];
    const stack = [];
    const res = [];

    while (true){
        while(root){
            root.right && stack.push(root.right);
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();

        if (root.right && (root.right === stack[stack.length - 1])){
            let prev = stack.pop();
           stack.push(root);
           root = prev;
        }else{
            res.push(root.val);
            root = null;
        }

        if (!stack.length) break;
    }
    return res;
};
```

### 复杂度分析

时间复杂度：O(N), visit N treenodes
空间复杂度：O(N) in worst case where the binary tree is a linkedlist. Mostly O$log(N)$

### 思路

修改前序遍历

### 代码

```JavaScript
var postorderTraversal = function(root) {
    const stack = [root];
    const res = [];
    while (stack.length > 0){
        let node = stack.pop();
        if (node){
            res.unshift(node.val)
            stack.push(node.left, node.right)
        }
    }
    return res;
};

```
