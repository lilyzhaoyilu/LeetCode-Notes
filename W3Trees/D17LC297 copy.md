## LC 297

### todo
1)revist whole question 
2)do BFS
### 思路
DFS
### 代码
 ``` JavaScript

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function(root) {
    if (root === null) return "x"; //这里return null 会报错并且没法完成遍历
    let left = serialize(root.left);
    let right = serialize(root.right);
  return root.val +',' + left+',' + right;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = (data) => {
    const list = data.split(',');

    const buildTree = (list) =>{
      let rootVal = list.shift();
      if (rootVal === "x") return null;

      const root = new TreeNode(rootVal);
      root.left = buildTree(list);
      root.right = buildTree(list);
      return root;
    }
    return buildTree(list);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

```
### 复杂度分析
时间复杂度：(ಥ﹏ಥ)递归怎么分析
空间复杂度：O(N)
