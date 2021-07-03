## LC LCP 07. 传递信息
https://leetcode-cn.com/problems/chuan-di-xin-xi/
- [普通解法](#思路-普通解法)
- [dp](#思路-dp)

### 思路 dp
f[i][j]代表已经走了i步，所在位置为j的方案数字
那么f[i][n-1]就是答案，起始是f[0][0] = 1 
#### 代码 JavaScript

```JavaScript
var numWays = function(n, relation, k) {
    const f = Array.from({length: k + 1}).map(() => Array.from({length: n}).fill(0))

    f[0][0] = 1

    for(let i = 1; i <= k; i++){
        for(let [from,to] of relation){
            f[i][to] += f[i - 1][from]
        }
        
    }

    return f[k][n - 1]
};

```

#### 复杂度分析
时间复杂度：O(n * k) </br>
空间复杂度：
### 思路 普通解法

#### 代码 JavaScript

```JavaScript
var numWays = function(n, relation, k) {
    let res = 0
    const graph = {}

    for(const [from, to] of relation){
        if(!graph[from]) graph[from] = []
        graph[from].push(to)
    }


    const queue = [0]

    while(queue.length && k >= 0){
        const levelSize = queue.length

        for(let i = 0; i < levelSize; i++){
            const cur = queue.shift()
            if( k === 0 && cur === n - 1) res++

            if(!graph[cur]) continue

            for(let next of graph[cur]){
                queue.push(next)
            }
        }

        k--
        


    }

    return res
    
};

```

#### 复杂度分析
时间复杂度：O(n ^  k )最多需要遍历k层，每层有n个选项 </br>
空间复杂度：O(n + m + n ^k)