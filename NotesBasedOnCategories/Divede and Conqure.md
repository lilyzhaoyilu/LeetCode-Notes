# Divide and Counqure

## 定义
分：将一个规模为N的问题分解到K个规模较小的子问题。  
治：根据子问题的解求原问题。

## Hints to Use
1. 问题可以被分解成若干规模较小的相同问题
2. 这些被分解的问题结果可以合并  
3. 被分解的问题都是相互独立，不包含重叠子问题（类似dp）


## 步骤
1. 将原问题分解至求解边界，结构相同的子问题 
2. 对这个问题进行求解（比如当n<= 2 的时候我们知道答案，所以子问题的边界是2）
3. 对所有求解了的子问题进行合并  
  - 合并的时候是两个有序数组，经常可以利用双指针
  - 重复计算的部分可以把结果存起来

问题  
https://leetcode-cn.com/problems/hanota-lcci/

https://leetcode-cn.com/problems/unique-binary-search-trees/

二叉树分治？


https://leetcode-solution.cn/solutionDetail?type=2&id=3006&max_id=3008