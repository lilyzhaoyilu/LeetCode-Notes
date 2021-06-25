# Promise

- [示例 XMLHttpRequest 获取多个page](#示例-XMLHttpRequest-获取多个page)
- [示例 fetch 获取多个page](#示例-fetch-获取多个page)
- [promisfy](#promisfy-httpsget-或者XMLHTTPREQUEST)

## 简介
- constructor
```JavaScript
var promise = new Promise(function(resolve, reject) {
    // 异步处理
    // 处理结束后、调用resolve 或 reject
});
```

- Instance Method
`promise.then(onFulfilled, onRejected)`
- Resolve
`onFulfilled`会被调用
- Reject
`onRejected`会被调用  
- static method
像 Promise 这样的全局对象还拥有一些静态方法。

包括 Promise.all() 还有 Promise.resolve() 等在内，主要都是一些对Promise进行操作的辅助方法。

## WorkFlow

```
function asyncFunction() {
    
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Async Hello world');
        }, 16);
    });
}

asyncFunction().then(function (value) {
    console.log(value);    // => 'Async Hello world'
}).catch(function (error) {
    console.log(error);
});
```


### Promise 的状态
new Promise实例化的promise对象有以下三个状态
"has-resolution" - Fulfilled
resolve(成功)时。此时会调用 onFulfilled

"has-rejection" - Rejected
reject(失败)时。此时会调用 onRejected

"unresolved" - Pending

### 编写promise
```JavaScript
function getURL(URL) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', URL, true);
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(new Error(req.statusText));
        };
        req.send();
    });
}
// 运行示例
var URL = "http://httpbin.org/get";
getURL(URL).then(function onFulfilled(value){
    console.log(value);
}).catch(function onRejected(error){
    console.error(error);
});
```

### promise的写法
```JavaScript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('*');
  }, 1000);
});

const twoStars = (star) => {
  return (star + star);
};

const oneDot = (star) => {
  return ('++' + star + '.');
};

const print = (val) => {
  console.log(val);
};

// Chaining them all together
promise.then(twoStars).then(oneDot).then(print);


```


```JavaScript
function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('*');
    }, 1000);
  })
}

const twoStars = (star) => {
  return (star + star);
};

const oneDot = (star) => {
  return ('++' + star + '.');
};

const print = (val) => {
  console.log(val);
};

// Chaining them all together
promise().then(twoStars).then(oneDot).then(print);

```

### promisfy httpsget 或者XMLHTTPREQUEST

```JavaScript
const promisify = fn => {
   return new Promise((resolve, reject) => { fn((err, data) => err ? reject(err) : resolve(data))})
}
```

### 示例 XMLHttpRequest 获取多个page

```JavaScript

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getURL(pageNumber) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET', `https://jsonmock.hackerrank.com/api/food_outlets?city=Boston&page=${pageNumber}`, true)
    req.onload = function () {
      if (req.status === 200) {
        resolve(req.responseText)
      } else {
        reject(new Error(req.statusText))
      }
    }

    req.onerror = function () {
      reject(new Error(req.statusText))
    }

    req.send()
  })
}

const getRes = Promise.all(Array.from({ length: 4 }, (_, i) => i + 1).map((pageNumber) => getURL(pageNumber)))


getRes.then((res) => console.log(res))
  .catch(error => console.error(error))
```

#### 示例 fetch 获取多个page
```JavaScript
const fetch = require("node-fetch");
async function getRelevant(city = "Boston", maxCost = 50) {

  const getFirst = (city) => (
    `https://jsonmock.hackerrank.com/api/food_outlets?city=${city}&page=1`)

  const res1 = await fetch(getFirst(city), { method: "GET" })
    .then((res1) => res1.json())
    .catch(console.error)


  const totalPage = res1.total_pages
  console.log(totalPage)

  const getUrl = (pageNumber) =>
    `https://jsonmock.hackerrank.com/api/food_outlets?city=${city}&page=${pageNumber}`;
  const res = await Promise.all(
    Array.from({ length: totalPage }, (_, i) => i + 1).map((page) =>
      fetch(getUrl(page), { method: "GET" })
        .then((res) => res.json())
        .catch(console.error)
    )
  );
  const ret = []
  for (const obj of res) {
    for (const second of obj.data) {
      console.log(second)
      if (second.estimated_cost == 50) {
        ret.push(second.name)
      }
    }
  }

  console.log(ret);
}
getRelevant();
```


```JavaScript

```