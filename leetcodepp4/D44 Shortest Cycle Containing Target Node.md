## Shortest Cycle Containing Target Node
https://binarysearch.com/problems/Shortest-Cycle-Containing-Target-Node
- [朴素BFS带参](#思路-朴素BFS带参)
- [朴素BFS分层](#思路-朴素BFS分层)
### 思路 朴素BFS带参

#### 代码 JavaScript

```JavaScript
class Solution {
    solve(graph, target) {
        if(graph[target].length == 0) return -1
        
        const visited = new Set
        const queue = []
        
        for(const start of graph[target]){
            queue.push([start, 1])
        }

        while(queue.length){
            const [node, dis] = queue.shift()
            if(node == target) return dis
            if(visited.has(node)) continue
            visited.add(node)

            if(!graph[node]) continue
            for(const nei of graph[node]){
                queue.push([nei, dis + 1])
            }
        }

        return -1
    }
}

```
#### 复杂度分析
时间复杂度：O(V+ E)  
空间复杂度：O(E)



### 思路 朴素BFS分层

#### 代码 JavaScript

```JavaScript
class Solution {
    solve(graph, target) {
        const queue = []
        const visited = new Set
        for(const s of graph[target]){
            queue.push(s)
        }

        let step = 0
        while(queue.length){
            const levelSize = queue.length
            step++
            for(let i = 0; i < levelSize; i++){
                const node = queue.shift()
                
                if(node == target) return step

                visited.add(node)
                for(let nei of graph[node]){
                    if(!visited.has(nei)){
                        queue.push(nei)
                    }
                }
            }
        }

        return -1
    }
}

```
#### 复杂度分析
时间复杂度：O(V + E)  
空间复杂度：O(E)

