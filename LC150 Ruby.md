## LC 150

### 思路
遍历tokens，1）如果遇到非运算符号字符（数字字符），则转换成数字并加入栈中
2）如果遇到运算符号字符，通过.send把它转换成function，并且取出栈中最后两个数字进行运算；
得到运算结果后，再push回栈。

### 代码
 ``` Ruby

def eval_rpn(tokens)
  stack = []
  operators = {"+" => "+","-" => "-","*" =>"*","/" => "/" }
  
  tokens.each do |token|  
    if operators[token] #如果有值，则Hash的返回值不是nil
      num1 = stack.pop
      num2 = stack.pop
      result = num2.send(token, num1)  #用.send(method_name_as_string,argument)来把字符运算符号转换成运算符号
      result += 1 if (token == "/") && (result < 0) && ((num2 % num1) != 0 )
      stack.push(result)
    else
      stack.push(token.to_i)
    end 
  end 

  stack.last
end


```
### 复杂度分析
时间复杂度：O(N)
空间复杂度：O(N)