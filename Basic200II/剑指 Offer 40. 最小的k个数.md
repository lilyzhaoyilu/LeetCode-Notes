## 剑指 Offer 40. 最小的k个数
https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
- [大根堆](#思路-大根堆)
明天学习 https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/solution/jian-zhi-offer-40-zui-xiao-de-k-ge-shu-j-9yze/
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
