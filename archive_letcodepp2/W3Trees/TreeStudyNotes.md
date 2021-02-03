

### Binary Tree 二叉树
#### 前序遍历 preorder
顺序：
1)当前节点 root
2)遍历左子树
3)遍历右子树

JS Pseudocode
``` JavaScript
function preorder(root) {
  if (root === null) return "root null";
  doSomething(root);
  preorder(root.left);
  preorder(root.right);
}
```

#### 中序遍历 inorder
顺序：
1)遍历左子树
2)当前节点 root
3)遍历右子树

JS Pseudocode
``` JavaScript
function inorder(root) {
  if (root === null) return "root null";
  inorder(root.left);
  doSomething(root);
  inorder(root.right);
}
```
#### 后序遍历 postorder
顺序：
1)遍历左子树
2)遍历右子树
3)当前节点 root
JS Pseudocode
``` JavaScript
function postorder(root) {
  if (root === null) return "root null";
  postorder(root.left);
  postorder(root.right);
  doSomething(root);
}
```

#### 层序遍历
遍历每一层level

JS Pseudocode
``` JavaScript
function bfs(root) {
  if (root === null) return "root null";
  const queue = [];
  queue.push(root);
  while queue.length > 0 {
    let curLevel = queue;
    queue = [];
    for (let i = 0; i < curLevel.length, i++){
      doSomething(curLevel[i])
      if (curLevel[i].left){
        queue.push(curLevel[i].left);
      }
      if (curLevel[i].right){
        queue.push(curLevel[i].right);
      }
    }
  }
}
```