// 队列结构的实现

class Queue {
  constructor() {
    this.item = [];
  }

  // 判断队列是否为空
  isEmpty() {
    if (this.item.length) return false;
    return true;
  }

  // 插入元素
  enqueue(el) {
    this.item.push(el)
    return this.item;
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
      queueStr += this.item[i];
    }
    return queueStr;
  }
}

let q = new Queue();

console.log(q.enqueue(20));