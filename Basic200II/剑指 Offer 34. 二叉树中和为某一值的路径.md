## 剑指 Offer 34. 二叉树中和为某一值的路径
https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/
- [递归](#思路-递归)
- [迭代](#思路-迭代)
### 思路 递归
要注意value的匹配
#### 代码 JavaScript

```JavaScript
var pathSum = function(root, target) {
    if(!root) return [];
    const ret = []

    var dfs = function(root, remainingTarget, curList){
        if(!root.left && !root.right){
            if(remainingTarget == 0) ret.push([...curList])
            return 
        }

        if(root.left){
            dfs(root.left, remainingTarget - root.left.val, curList.concat([root.left.val]))
        }
        if(root.right){
            root.right && dfs(root.right, remainingTarget - root.right.val, curList.concat([root.right.val]))
        }
    }

    dfs(root, target - root.val, [root.val])

    return ret;
};

```

#### 复杂度分析
时间复杂度： </br>
空间复杂度：



### 思路 迭代

#### 代码 JavaScript

```JavaScript
var pathSum = function(root, target) {
    
    const ret = [];
    if(!root) return ret;
    const queue = [[root, [root.val], root.val]]

    while(queue.length){
        const [node, path, sum] = queue.shift()
        if(!node.left && !node.right && sum == target){
            ret.push([...path])
        }

        node.left && queue.push([node.left, path.concat([node.left.val]), sum + node.left.val])
        node.right && queue.push([node.right, path.concat([node.right.val]), sum + node.right.val])
    }

    return ret;
};

```

#### 复杂度分析
时间复杂度： </br>
空间复杂度：
