## LC

### 思路

### 代码 JavaScript

```JavaScript
var quickSort = function(arr){
  if(arr.length <= 1) return arr;

  let pivot = arr[0];
  let left = [], right = [];

  for(let i = 1; i < arr.length; i++){
    if(arr[i]> pivot){
      right.push(arr[i]);
    }else{
      left.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot]).concat(quickSort(right));

}

console.log(quickSort([5,4,3,2,1,10,7]))

```

### 复杂度分析

时间复杂度：  
空间复杂度：
