## LC 50. Pow(x, n)

### 思路

普通递归
会爆栈

### 代码

```JavaScript
var myPow = function(x, n) {
  if(n == 1) return x;
  if(n == 0) return 1;
  let neg = n < 0 ? true : false;
  n = Math.abs(n)
  // if(n == -1) return 1/x;
  let ans = (myPow(x, n-1) * x)
  // console.log(ans)
  return neg ? (1/ans) : (ans)

}

```
