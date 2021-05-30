# LeetCode JavaScript PriorityQueue API

```JavaScript
const maxHeap = new MaxPriorityQueue();
const minHeap = new MinPriorityQueue();

// enqueue O(logN)
maxHeap.enqueue('element', 'priority') //0 returns to errors
maxHeap.dequeue() //=> {element: 11, priority: 12}
maxHeap.dequeue()['element'] //=> 11
maxHeap.front() //peak root
maxHeap.isEmpty()
maxHeap.size()
maxHeap.toArray() //? not sure
```
