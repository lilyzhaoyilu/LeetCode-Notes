## LC 6. ZigZag Conversion

https://leetcode-cn.com/problems/zigzag-conversion/
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P A H N
A P L S I I G
Y I R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P I N
A L S I G
Y A H R
P I
Example 3:

Input: s = "A", numRows = 1
Output: "A"

### 思路

主要是分解问题，当 i== 0 或者 i == numRows -1 的时候就要转向  
转向的意思就是 ++ 变成 -- 或者 vise versa

### 代码 JavaScript

```JavaScript
var convert = function(s, numRows) {
  if(numRows < 2 ) return s;

  let rows = Array.from({length: numRows}).map(() => Array.from({length: 0}));
  let i = 0; flag = -1;
  for(char of s){
    if(i == 0 || i == numRows - 1) flag = -flag
    rows[i].push(char)
    i += flag
  }
  // console.log(rows)
  return rows.flat().join('');
};

```

### 复杂度分析

时间复杂度：O(N) </br>
空间复杂度：O(N)
