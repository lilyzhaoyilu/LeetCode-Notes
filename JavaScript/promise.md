# Promise

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