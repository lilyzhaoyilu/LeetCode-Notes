# Trie / Prefix Trie

学习 https://github.com/azl397985856/leetcode/blob/master/thinkings/trie.md

## 简介

[力扣字典树合集](https://leetcode-cn.com/tag/trie/problemset/)  
字典树也叫前缀树、Trie。它本身就是一个树型结构，也就是一颗多叉树。  
核心操作：插入，查找  
本质是在有多个相同前缀的时候用空间换时间。

## Hints to use

- 查找包含某个前缀的字符串是否存在字符串合集中
- 字符矩阵中找单词

## Trie Structure / 字典树的结构

- 节点

  - 根没有实际意义
  - 每一个节点代表一个**字符**
  - 节点数据结构可以自定义，比如 isWord, count...

- API

  - insert(word)
  - search(word)
  - **startsWith(word)**

- 查询
  - 如果 search 途中没有下一个字符 - 没有这个词
  - 如果 search 结束后不是 isWord - 没有这个词 （比如 search(ca) 在 [cat]中）

## 复杂度

- Time complexity: O(L) L 是字符串长度 增删查改
- Space complexity: O(N \* L) N 是单词数

## 基础模板 [LC208](https://leetcode-cn.com/problems/implement-trie-prefix-tree/)

```JavaScript
/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.children = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.children;
  for(let char of word){
    if(!node[char]) node[char] = {}
    node = node[char]
  }
  node.isEnd = true
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.children;
  for(let char of word){
    if(!node[char]) return false
    node = node[char]
  }
  console.log(node)
  return node.isEnd == true
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.children;
  for(let char of prefix){
    if(!node[char]) return false
    node = node[char]
  }
  return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
```

如果搜索里可能有'.'来代表模糊字符的话 [LC211 解](https://github.com/lilyzhaoyilu/LeetCodeRecord/blob/master/Basic200/Trie/LC211.%20Design%20Add%20and%20Search%20Words%20Data%20Structure.md)

```JavaScript

WordDictionary.prototype.search = function(word, node = this.root) {
  //确立好node是哪个node 从哪个node开始搜索
  for(let i = 0; i < word.length; i++){
    if(word[i] == '.'){
      //iterate through object keys 要用in
      for(const key in node){
        if (this.search(word.slice(i+1), node[key])) return true;
      }
      //这里记得返回fasle
      return false;
    }else if(!node[word[i]]){
      return false;
    }
    node = node[word[i]]
  }

  return node.isEnd != undefined

};

```

[LC212 Word SearchII](https://leetcode-cn.com/problems/word-search-ii/)

[My Solution]()
