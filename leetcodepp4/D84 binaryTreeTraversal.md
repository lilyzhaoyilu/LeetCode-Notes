
- [preOder递归](#思路-preOder递归)
- [preOrder迭代双色](#思路-preOrder迭代双色)

- [inOrder递归](#思路-inOrder递归)
- [inOrder迭代](#思路-inOrder迭代)
- [inOrder迭代双色](#思路-inOrder迭代双色)

- [postOrder递归](#思路-postOrder递归)
- [postOrder迭代双色](#思路-postOrder迭代双色)

## LC 144. Binary Tree Preorder Traversal
https://leetcode-cn.com/problems/binary-tree-preorder-traversal/

### 思路 preOder递归

#### 代码 JavaScript

```JavaScript
var preorderTraversal = function(root) {
    const ret = [];
    const preorder = (root) => {
        if(!root) return;
        ret.push(root.val)
        preorder(root.left)
        preorder(root.right)
    }
    preorder(root)
    return ret
};
```


### 思路 preOrder迭代双色
双色标记法，注意因为模拟的是stack，所以`cur.right`和`cur.left`的顺序是和写递归的时候反过来的
#### 代码 JavaScript

```JavaScript

var preorderTraversal = function(root) {
    const ret = [];
    if(!root) return ret;
    const stack = [[root, 'WHITE']];
    while(stack.length){
        const [cur, color] = stack.pop()

        if(color === 'GRAY'){
            ret.push(cur.val)
        }else if(color === 'WHITE'){
            cur.right && stack.push([cur.right, 'WHITE'])
            cur.left && stack.push([cur.left, 'WHITE'])
            stack.push([cur, 'GRAY'])
        }
    }
    return ret;
};
```


## LC 94. Binary Tree Inorder Traversal
https://leetcode-cn.com/problems/binary-tree-inorder-traversal/

### 思路 inOrder递归

#### 代码 JavaScript

```JavaScript
var inorderTraversal = function(root) {
    const ret = [];
    const inOrder递归 = (root) => {
        if(!root) return;

        inOrder递归(root.left);
        ret.push(root.val);
        inOrder递归(root.right);
    }
    inOrder递归(root)
    return ret;
};

```

### 思路 inOrder迭代双色

#### 代码 JavaScript

```JavaScript
var inorderTraversal = function(root) {
    const ret = [];
    if(!root) return ret;
    const stack = [[root, 'WHITE']]
    
    while(stack.length){
        const [cur, color] = stack.pop()

        if(color === 'GRAY'){
            ret.push(cur.val)
        }else if(color === 'WHITE'){
            cur.right && stack.push([cur.right, 'WHITE'])
            stack.push([cur, 'GRAY'])
            cur.left && stack.push([cur.left, 'WHITE'])
        }
    }
    return ret;
};

```

### 思路 inOrder迭代
考察这个等价拆解的写法挺多的，推荐掌握
#### 代码 JavaScript

```JavaScript
var inorderTraversal = function(root) {
    const ret = [];
    if(!root) return ret;
    const stack = [];
    while(root || stack.length){
        
        while(root){
            stack.push(root)
            root = root.left
        }

        root = stack.pop()
        ret.push(root.val)

        root = root.right
    }
    return ret;
};

```


## LC 145. Binary Tree Postorder Traversal
https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

### 思路 postOrder递归

#### 代码 JavaScript

```JavaScript
var postorderTraversal = function(root) {
    const ret = [];
    const postOrder递归 = (root) => {
        if(!root) return;

        postOrder递归(root.left)
        postOrder递归(root.right)
        ret.push(root.val)
    }
    postOrder递归(root)
    return ret;
};

```

### 思路 postOrder迭代双色

#### 代码 JavaScript

```JavaScript
var postorderTraversal = function(root) {
    const ret = [];
    if(!root) return ret;
    const stack = [[root, 'WHITE']]
    
    while(stack.length){
        const [cur, color] = stack.pop()

        if(color === 'GRAY'){
            ret.push(cur.val)
        }else if(color === 'WHITE'){
            stack.push([cur, 'GRAY'])
            cur.right && stack.push([cur.right, 'WHITE'])
            cur.left && stack.push([cur.left, 'WHITE'])
        }
    }
    return ret;
};

```

#### 复杂度分析
时间复杂度：O(n) n是节点总数字
空间复杂度：O(n) 最坏情况是O(n)，平均情况是O(logn)