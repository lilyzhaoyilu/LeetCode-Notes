## LC 47. Permutations II
https://leetcode-cn.com/problems/permutations-ii/

### 思路 回溯剪枝
我觉得这类题最好的方法就是画状态树，画出来树了啥都知道了。   
状态树的框架讲义里有，具体画法如果不明白可以看高票题解。   
今天又是元气满满的一天呢 ヾ(◍°∇°◍)ﾉﾞ   
#### 代码 JavaScript

```JavaScript
var permuteUnique = function(nums) {
    const ret = [];
    const visited = new Set()
    const bt = (cur) => {
        console.log(cur)
        if(cur.length === nums.length){
            ret.push(cur.slice());
            return
        }

        for(let i = 0; i < nums.length; i++){
            if(visited.has(i)) continue
            if(nums[i] === nums[i - 1] && !visited.has(i - 1)) continue
            visited.add(i)
            bt(cur.concat(nums[i]))
            visited.delete(i)
        }
    }
    bt([])
    return ret;
};

```