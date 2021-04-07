## LC 704

### 思路

### 代码

```JavaScript

var search = function(nums, target) {
let l = 0, r = nums.length - 1, result = -1;

while(l <= r){
  let mid = (l + r) >> 1; // + left?
  // console.log(mid)
  if(nums[mid] == target){
    result = mid;
    return result;
  }else if(nums[mid] > target){
    r = mid - 1;
  }else{
    l = mid + 1;
  }
}
return result;
};

```

### 复杂度分析

时间复杂度：
空间复杂度：
