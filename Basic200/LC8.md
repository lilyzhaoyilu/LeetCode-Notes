## LC 8

https://leetcode-cn.com/problems/string-to-integer-atoi/

### 思路

### 代码

```JavaScript
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let result = '';
  let negative = false;
  let firstNumber = false;
  let memo = new Set(['0','1','2','3','4','5','6','7','8','9'])
  for(let i = 0;i < s.length; i++){
    if(firstNumber){
      if(!memo.has(s[i])) break;
      result = result + s[i]
    }else{
      if(memo.has(s[i])){
        result = result + s[i];
        firstNumber = true
      }else if(s[i] == ' ' ){
        continue;
      }else if(s[i] == '-' || s[i] == '+'){
        if(s[i] == '-') negative = true
        firstNumber = true
      }else{
        break;
      }
    }
  }
  // console.log(memo)
  // console.log(result)
  if(result == '') result = 0 // 判断掉 s= 'nice da 655' 这种情况
  result = negative ? -parseInt(result) : parseInt(result);


  // console.log(result)
  if(result >= Math.pow(2,31)) return Math.pow(2,31) - 1;
  if(result < -Math.pow(2,31)) return -Math.pow(2,31);
  return result;
};
```

### 复杂度分析

时间复杂度：O(N)
空间复杂度：O(n 字符的长度)
