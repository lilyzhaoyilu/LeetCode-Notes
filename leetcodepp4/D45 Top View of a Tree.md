## Top View of a Tree

https://binarysearch.com/problems/Top-View-of-a-Tree

### 思路 BFS
BFS带参（哦我超级无敌喜欢带参...  
只不过这次的参数是把root视为一个x轴，值为0；同时建立一个map来记录x坐标轴位置=>node。因为bfs的特性会先搜上面的层，所以如果某个坐标值被记录过了，就不用被更新了。
#### 代码 JavaScript

```JavaScript
class Solution {
    solve(root) {
        if(!root) return []
        const view = new Map
        view.set(0, root.val)
        const queue = [[root,0]]

        while(queue.length){
            const [node, cor] = queue.shift()
            if(!view.has(cor)) view.set(cor, node.val)
            node.left && queue.push([node.left, cor -1])
            node.right && queue.push([node.right, cor + 1])
        }

        const res = [...view.entries()].sort((a,b) => a[0] -b[0])
        return res.map(([k,v]) => v)
    }
}

```

#### 复杂度分析
时间复杂度：O(NlogN)排序的大小 搜所有的点 </br>
空间复杂度：O(N) memo和queue的大小