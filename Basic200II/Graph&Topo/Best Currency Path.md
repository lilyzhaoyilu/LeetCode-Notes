## Best Currency Path
https://binarysearch.com/problems/Best-Currency-Path

- [Bellman Ford](#思路-Bellman-Ford)

### 思路 Bellman Ford

#### 代码 JavaScript

```JavaScript
class Solution {
    solve(source, target, sources, targets, rates) {
        const dis = new Map()
        const edges = []
        for (let i = 0; i < sources.length; i++) {
            edges.push([sources[i], targets[i], rates[i]])
            dis.set(sources[i], 0)
            dis.set(targets[i], 0)
        }

        console.log(edges)

        dis.set(source, 1)

        for (let k = 0; k < edges.length; k++) {
            for (const [u, v, w] of edges) {
                if (dis.get(u) * w > dis.get(v)) {
                    dis.set(v, dis.get(u) * w)
                }
            }
        }
        console.log(dis)
        
        
        for (const [u, v, w] of edges) {
            if (dis.get(u) * w > dis.get(v)) {
                console.log(dis.get(u), '*', w, '>', dis.get(v))
                return -1
            }
        }
        if(!dis.has(target) || !dis.has(source)) return 0
        return dis.get(target)
    }
}

```

#### 复杂度分析
时间复杂度：O(MN) </br>
空间复杂度：O(edges + dis)
