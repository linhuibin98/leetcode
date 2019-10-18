// 优先级队列
class PriorityQueue {

  static queueElement(el, priority) {
    class QueueElement {  // 队列元素类
      constructor(el, priority) {
        this.element = el;
        this.priority = priority
      }
    }
    return new QueueElement(el, priority);
  }

  constructor() {
    this.item = [];
  }

  // 插入元素
  enqueue(el, priority) {  
    let queueElement = PriorityQueue.queueElement(el, priority);
    if (!this.item.length) { // 判断队列当前是否为空
      this.item.push(queueElement);
    } else {  // 不为空
      let isEnter = false;
      this.item.forEach((i, index) => {
        if (priority < i.priority) {
          this.item.splice(index, 0, queueElement);
          isEnter = true;
          return false;
        } 
      })
      if (!isEnter) {
        this.item.push(queueElement);
      }
    }
    return this.item.length;
  }

  // 判断队列是否为空
  isEmpty() {
    if (this.item.length) return false;
    return true;
  }

  // 删除队头元素
  dequeue() {
    return this.item.shift();
  }

  // 返回对头元素
  front() {
    return this.item[0];
  }

  // 大小
  size() {
    return this.item.length;
  }

  toString() {  // 将队列的内容以字符形式返回
    let queueStr = '';
    for (let i = 0; i < this.item.length; i++) {
      queueStr += this.item[i]['element'];
    }
    return queueStr;
  }

}

// let q = new PriorityQueue();

// console.log(q.enqueue('a', 1));
// console.log(q.enqueue('b', 2));
// console.log(q.enqueue('c', 1));
// console.log(q.enqueue('d', 1));
// console.log(q.enqueue('e', 2));
// console.log(q.toString())