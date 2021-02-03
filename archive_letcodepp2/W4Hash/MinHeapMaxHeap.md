## Min Heap 小顶堆/最小堆 & Max Heap 大顶堆   
https://www.educative.io/edpresso/min-heap-vs-max-heap
### Definition 
Min and Max heaps are complete binary trees with some unique properties.   
complete binary tree: https://web.cecs.pdx.edu/~sheard/course/Cs163/Doc/FullvsComplete.html#:~:text=A%20full%20binary%20tree%20(sometimes,as%20far%20left%20as%20possible    


How are Min/Max Heaps represented?   
A Min/Max heap is typically represented as an array.   

Arr[0] Returns the root node.   
Arr[(i-1)/2] Returns the parent node.   
Arr[(2*i)+1] Returns the left child node.   
Arr[(2*i)+2] Returns the right child node.   

### to-do
index calculation when representing a b-tree in arrays. 