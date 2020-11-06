### To do 
https://leetcode-cn.com/problems/max-chunks-to-make-sorted-ii/

need review!!!!!!!
### 思路
1)建立且维持一个单调增序栈
2)如果新来的数字（ele）大于等于栈顶的数字，则放入栈内；（[].last.to_i = 0)
如果新来的数字小于栈顶的数字，则把栈顶数字暂存于temp；
之后pop掉栈顶数字，直到栈顶数字大于等于ele；
这时候push temp
3）最后返回栈内元素个数

这个方法试用因为本题需要找到一定区域内的最大值，并且保证这个最大值小于等于下个区域的最小值。当ele小于本区域最大值的时候，对stack进行调整，最后存储的就是每个区域的最大值。[1]的最大值是1。这样数有多少个最大值，就相当于知道有多少个区域。



### 代码
 ``` Ruby
def max_chunks_to_sorted(arr)
  stack = []
  arr.each do |ele|
    if (ele >= stack.last.to_i)
      stack.push(ele)
    else 
      temp = stack.pop
      until stack.last.to_i <= ele
        stack.pop
      end 
      stack.push(temp)
    end 


  end 
  stack
end 
```
### 复杂度分析
时间复杂度：O($n^2$)
空间复杂度：O(n) 

 