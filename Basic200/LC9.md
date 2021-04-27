## LC 9

### 思路

双指针 转换为字符串

### 代码

```JavaScript
var isPalindrome = function(x) {
  // if(x < 0) return false;
  x = x.toString();
  let left= 0, right = x.length - 1;

  while(left < right){
    if(x[left] != x[right]) return false;
    left++;
    right--;
  }
  return true;
};

```

### 复杂度分析

时间复杂度：O(N)
空间复杂度：O(1)

### 思路

只转换一半，然后对比他们是否相等

### 代码

```JavaScript
var isPalindrome = function(x) {
if(x < 0 || (x % 10 == 0 && x != 0)) return false;
let temp = 0;
while(temp < x){
temp = temp * 10 + x % 10;
x = Math.floor(x / 10);
}
// console.log(temp, x)
return   (temp == x) || (Math.floor(temp / 10) == x) ; //第二种情况是在x的原长度为奇数的情况下
};

```

### 复杂度分析

时间复杂度：O(log(n))
空间复杂度：O(1)
