# Bitwise Operations

## LC 136. Single Number
https://leetcode-cn.com/problems/single-number/

`a ^ a = 0`   
`a ^ 0 = a`
#### 代码 JavaScript

```JavaScript
var singleNumber = function(nums) {
    let res = nums[0]
    if(nums.length == 1) return res;
    for(let i = 1; i < nums.length; i++){
        res ^= nums[i]
    }
    return res
};

```

## LC137. Single Number II
https://leetcode-cn.com/problems/single-number-ii/submissions/

#### 代码 JavaScript

```JavaScript
var singleNumber = function(nums) {
    let ones = twos = 0;

    for(const num of nums){
        ones = ones ^ num & ~twos
        twos = twos ^ num & ~ones
    }

    return ones
};

```

## LC 260. Single Number III
https://leetcode-cn.com/problems/single-number-iii/
#### 代码 JavaScript

```JavaScript
var singleNumber = function(nums) {
    let bitmask = 0

    for(let n of nums){
        bitmask ^= n 
    }

    bitmask &= -bitmask

    const ret = [0,0]

    for(let n of nums){
        if((n & bitmask) == 0) ret[0] ^=n;
        else ret[1] ^= n;
    }

    return ret
};

```