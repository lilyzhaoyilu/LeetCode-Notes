有这链接

https://jsonmock.hackerrank.com/api/food_outlets?city=Boston&page=1

返回

```
{"page":1,"per_page":10,"total":40,"total_pages":4,"data":[{"city":"Boston","name":"Boathouse","estimated_cost":150,"user_rating":{"average_rating":4.5,"votes":1061},"id":121},{"city":"Boston","name":"Sector 7 Social","estimated_cost":140,"user_rating":{"average_rating":4.8,"votes":2435},"id":122},{"city":"Boston","name":"Food@U","estimated_cost":70,"user_rating":{"average_rating":4.2,"votes":2056},"id":123},{"city":"Boston","name":"The Night Factory","estimated_cost":80,"user_rating":{"average_rating":3.9,"votes":1983},"id":124},{"city":"Boston","name":"La Pino'z Pizza","estimated_cost":550,"user_rating":{"average_rating":4.3,"votes":1271},"id":125},{"city":"Boston","name":"Bhena Da Dhaba","estimated_cost":250,"user_rating":{"average_rating":3.8,"votes":1466},"id":126},{"city":"Boston","name":"Cafe Z","estimated_cost":120,"user_rating":{"average_rating":4.5,"votes":1181},"id":127},{"city":"Boston","name":"Burger King","estimated_cost":50,"user_rating":{"average_rating":3.9,"votes":1082},"id":128},{"city":"Boston","name":"Subway","estimated_cost":50,"user_rating":{"average_rating":4.2,"votes":1147},"id":129},{"city":"Boston","name":"La Pino'z Pizza","estimated_cost":550,"user_rating":{"average_rating":4.5,"votes":855},"id":1210}]}
```

要求，返回一个 array，里面有从 page 1 到 page：total_pages（4，在这个例子里）所有 estimate_cost < maxCost 的 name

问题：为啥我的`console.log(result)` 是对的，但是返回的 result 是空的 0 。0

```JavaScript
async function getRelevant(city = Boston, maxCost = 50) {
  var https = require('https');


  let pageNumber = 1;
  let totalPageNumber = 100;
  const result = [];
  let totalPagesLoaded = 0;
  const url = `https://jsonmock.hackerrank.com/api/food_outlets?city=${city}&page=${pageNumber}`


  while(pageNumber < totalPageNumber){

      https.get(url, function(res){
          let body = '';

          res.on('data', (chunk) => {
            body = JSON.parse(chunk)
            console.log(body.page)
              totalPageNumber = body.total_pages
              let listData = body.data
              for(let destination of listData){
                  if(destination.estimated_cost < maxCost){
                  result.push(destination.name)}

              }
              pageNumber++
            // result.push(chunk)
          })

          res.on('end', () => {
            if(pageNumber == totalPageNumber){
              console.log(result)
            }
          })
      })


  }
;
}


```
