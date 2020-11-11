## LC 146
### todo
use double linked list instead of @array
### 思路
super naive approach
### 代码
 ``` Ruby
class LRUCache

=begin
    :type capacity: Integer
=end
    def initialize(capacity)
    @capacity = capacity
    @cache = {}
    @order = []
    end


=begin
    :type key: Integer
    :rtype: Integer
=end
    def get(key)
    @order.unshift(key) if @order.delete(key) 
    
    @cache[key] ? @cache[key] : -1

    end


=begin
    :type key: Integer
    :type value: Integer
    :rtype: Void
=end
    def put(key, value)
    if @cache[key]
    @cache[key] = value 
    @order.delete(key)
    @order.unshift(key)
    return @cache[key]
    end

    if @order.size < @capacity
    @order.unshift(key)
    @cache[key] = value
    else 
    @cache.delete(@order.pop)
    @order.unshift(key)
    @cache[key] = value
    end        
    end


end

# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache.new(capacity)
# param_1 = obj.get(key)
# obj.put(key, value)
```
### 复杂度分析
时间复杂度：O(N)
因为用了array来储存order，会有unshift
空间复杂度：O(capacity)