/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 这里用了个最小堆，还可以用桶排序
var topKFrequent = function (nums, k) {
  const map = new Map()
  nums.forEach(num => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  })
  if (map.size <= k) {
    return [...map.keys()]
  }
  const minHeap = new MinHeap(defaultCompare)
  map.forEach((value, key) => {
    if (minHeap.size() < k) {
      minHeap.insert({ key, value })
    } else {
      if (minHeap.findMinimum().value < value) {
        minHeap.extract()
        minHeap.insert({ key, value })
      }
    }
  })
  return minHeap.heap.map(({ key }) => key)
};
function defaultCompare(a, b) {
  return a.value < b.value
}
class MinHeap {
  constructor(compareFun) {
    this.heap = []
    this.compareFun = compareFun
  }
  size() {
    return this.heap.length
  }
  findMinimum() {
    return this.heap[0]
  }
  parentIndex(index) {
    if (index === 0) {
      return undefined
    }
    return Math.floor((index - 1) / 2)
  }
  leftIndex(index) {
    return index * 2 + 1
  }
  rightIndex(index) {
    return index * 2 + 2
  }
  shiftUp(index) {
    let parentIndex = this.parentIndex(index)
    if (parentIndex !== undefined && this.compareFun(this.heap[index], this.heap[parentIndex])) {
      swap(this.heap, parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }
  shiftDown(index) {
    let element = index
    const left = this.leftIndex(index)
    const right = this.rightIndex(index)
    const size = this.size()

    if (left < size && this.compareFun(this.heap[left], this.heap[element])) {
      element = left
    }
    if (right < size && this.compareFun(this.heap[right], this.heap[element])) {
      element = right
    }
    if (element !== index) {
      swap(this.heap, element, index)
      this.shiftDown(element)
    }
  }
  insert(val) {
    this.heap.push(val)
    this.shiftUp(this.heap.length - 1)
  }
  extract() {
    if (this.size() === 1) {
      return this.heap.shift()
    }
    let element = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
    return element
  }
}
function swap(array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}
// @lc code=end

console.log(topKFrequent([3, 0, 1, 0], 1))