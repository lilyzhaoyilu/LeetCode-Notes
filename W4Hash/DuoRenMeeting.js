/*
多人运动 - Lucifer出的题!
题目描述
已知小猪每天都要约好几个女生见面。每个女生 i 与小猪约好的时间由 [si , ei］表示，其中 si 表示女生进入房间的时间， ei 表示女生离开房间的时间。
请计算出小猪房间最多同时几人。

例子：

Input ： [[ 0 , 30] ,[ 5 , 10 ] ， [15 , 20 ] ]

OutPut ：3
// 上面刚刚说了关于频率统计的方法，这里读完题，是不是就立刻想到了：
// 用hash表来统计每个时刻房间内的人数并维护一个最大值就是我们所求的结果啦
伪代码转JS
*/
//单调栈 inspired by suukii
function maxNum(arr) {
    const room = []; //栈
    let count = 0;
    arr = arr.sort((a,b) => a[0] - b[0]) //按进入时间先后排序

    arr.forEach((ele) =>{
        while (room.length > 0 && room[room.length - 1][1] <= ele[0]){
            room.pop(); //在room里有ele的情况下,
            //如果最后一个ele的离开时间小于等于新来ele的进入时间
            //则俩ele不在同一个room内
        }

        room.push(ele); //新来的进入
        room.sort((a, b) => b[1] - a[1]) //按离开的时间排序,离开时间越小的在room顶部/尾端
        count = Math.max(count,room.length); //时刻记录最大值
    })
    
    return  `最多同时有${count}个女生的「${count + 1}人」`;


}




// function maxNum(arr) {
//     arr = arr.sort((a,b) => a[0] - b[0]) //按进入时间先后排序
//     let maxNum = -1;
//     let hash = new Map();
//     arr.forEach((ele) => {
//         console.log("ele", ele);
//         ele.forEach(e => {
//             console.log("e", e);
//             (hash.has(e)) ? hash.set(e, hash.get(e) + 1) : hash.set(e, 1);

//             maxNum = Math.max(maxNum, hash.get(e))
//         })
//     })
//     console.log(hash);
//     return maxNum;
// }

console.log(maxNum([[0, 30], [5, 10], [15, 20]]));
