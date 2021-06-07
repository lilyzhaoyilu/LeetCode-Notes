## 剑指 Offer 55 - I. 二叉树的深度

- [BFS带层](#思路-BFS带层)
- [后序遍历](#思路-后序遍历)

### 思路 后序遍历
关键：树的深度 = max(左子树深度， 右子树深度) +1
#### 代码 JavaScript

```JavaScript
var maxDepth = function(root) {
    if(!root) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

```

#### 复杂度分析
时间复杂度：O(N) </br>
空间复杂度：O(N)
### 思路 BFS带层

#### 代码 JavaScript

```JavaScript
var maxDepth = function(root) {

    let maxDepth = 0
    if(!root) return maxDepth

    const queue = [root]

    while(queue.length){
        const curLevelSize = queue.length;

        for(let i = 0; i < curLevelSize; i++){
            const node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }

        maxDepth++
        
    }

    return maxDepth
};

```

#### 复杂度分析
时间复杂度：O(N) </br>
空间复杂度：O(N) queue的长度
