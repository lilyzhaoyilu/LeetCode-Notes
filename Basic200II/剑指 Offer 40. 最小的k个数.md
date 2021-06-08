## 剑指 Offer 40. 最小的k个数
https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
- [大根堆](#思路-大根堆)
明天学习 https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/solution/jian-zhi-offer-40-zui-xiao-de-k-ge-shu-j-9yze/

- [快速排序QuickSort](#思路-快速排序QuickSort)
- [根据快排的on](#思路-根据快排的on)

### 思路 根据快排的on
本质是通过每次分一半来节省时间  
时间复杂度是 N + N/2 + N/4 + n/6... ~= O(N)
#### 代码 JavaScript

```JavaScript
var getLeastNumbers = function(arr, k) {
    
    var quickSort = function(arr, l, r){
        if(l >= r) return;
        // l 是哨兵
        let i = l, j = r;

        while(i < j){
           while (i < j && arr[j] >= arr[l]) j--;
            while (i < j && arr[i] <= arr[l]) i++;

            swap(arr, j, i)
        }
        swap(arr, i, l)
        if(k < i) return quickSort(arr, l, i - 1)
        if(k > i) return quickSort(arr, i + 1, r)
        return arr
    }

    var swap = function(arr, i, j){
        let temp = arr[i] ;
        arr[i] = arr[j];
        arr[j] = temp;
    }

    quickSort(arr, 0, arr.length - 1)
    // console.log(arr)
    return arr.slice(0, k)



};

```

#### 复杂度分析
时间复杂度：O(N) </br>
空间复杂度：
### 思路 快速排序QuickSort
要先 j-- 不然会误判
#### 代码 JavaScript

```JavaScript
var getLeastNumbers = function(arr, k) {
    
    var quickSort = function(arr, l, r){
        if(l >= r) return;
        // l 是哨兵
        let i = l, j = r;

        while(i < j){
           while (i < j && arr[j] >= arr[l]) j--;
            while (i < j && arr[i] <= arr[l]) i++;

            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
        console.log(arr, `l ${l}... i ${i}`, 'j', j,' :::', arr[l], arr[i])
        swap(arr, i, l)
        quickSort(arr, l, i - 1)
        quickSort(arr, i + 1, r)
    }

    var swap = function(arr, i, j){
        let temp = arr[i] ;
        arr[i] = arr[j];
        arr[j] = temp;
    }

    quickSort(arr, 0, arr.length - 1)
    console.log(arr)
    return arr.slice(0, k)



};

```

#### 复杂度分析
时间复杂度：O(NlogN) </br>
空间复杂度：


### 思路 大根堆
堆 - 大根堆 topk
#### 代码 JavaScript

```JavaScript
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    const maxHeap = new MaxHeap()
    for(const num of arr){
        if(maxHeap.size() < k){
            maxHeap.insert(num)
        }else{
            if(num < maxHeap.peak()){
                maxHeap.pop()
                maxHeap.insert(num)
            }
        }
    }
    
    return maxHeap.all()

}


class MaxHeap{
    constructor(){
        this.heap = []
    }

    heapify(arr, size, i){
        let largest = i, left = i * 2 + 1, right = left + 1

        if(left < size && arr[left] > arr[largest]) largest = left
        if(right < size && arr[right] > arr[largest]) largest = right

        if( largest != i){
            [arr[largest], arr[i]] = [arr[i], arr[largest]]
            this.heapify(arr, size, largest)
        }
    }

    insert(num){
        this.heap.push(num)
        const size = this.heap.length
        for(let i = Math.floor(size / 2); i >= 0; i--){
            this.heapify(this.heap, this.heap.length, i)
        }
    }

    pop(){
        const last = this.heap.pop()
        if(this.heap.length == 0) return last;
        const root = this.heap[0]
        this.heap[0] = last;
        this.heapify(this.heap, this.heap.length, 0)
        return root;
    }

    peak(){
        return this.heap[0]
    }

    size(){
        return this.heap.length
    }

    all(){
        return this.heap
    }
}

```

#### 复杂度分析

时间复杂度：O(NlogK) </br>
空间复杂度：O(K)
