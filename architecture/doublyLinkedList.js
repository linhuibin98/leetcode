// 双向链表

class DoublyLinkedList {
  static node(el) {
    class Node {  // 内部 链表节点类
      constructor(el) {
        // 节点的属性
        this.element = el;
        this.prev = null;
        this.next = null;
      }
    }
    return new Node(el);
  }

  constructor(el) {
    // 链表属性
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 尾部追加节点
  append(el) {
    // 创建节点
    let newNode = DoublyLinkedList.node(el);
    // case: 链表为空时
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode; // 链表尾部指向新节点
      return this.length += 1;
    }
    // 添加到链表尾部
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    return this.length += 1;
  }

  // 插入节点
  insert(position, el) {
    // position无效值
    if (position < 0 || position > this.length) return false;

    let newNode = DoublyLinkedList.node(el);
    let index = 0;
    let current = this.head;
    let previous = this.head;
    while (index <= this.length) {
      if (position === 0) {  // 插入在第一个位置时
        newNode.next = current;
        current.prev = newNode;
        this.head = newNode;
        this.length += 1;
        return true;
      } else if (position === index) {
        newNode.next = current;
        previous.next = newNode;
        if (position === this.length) {
          newNode.prev = previous;
          this.tail = newNode;
        } else {
          current.prev = newNode;
        }
        this.length += 1;
        return true;
      }
      previous = current;
      current = current.next;
      index++;
    }
    return false;
  }

  // get方法: 获取指定位置的值
  get(position) {
    // 判断position是否合法
    if (position < 0 || position >= this.length) return null;

    if (position < this.length / 2) {
      let current = this.head;  // 当前指向
      for (let i = 0; i < this.length; i++) {
        if (position === i) {
          return current.element;
        }
        current = current.next;
      }
    } else {
      let current = this.tail;  // 当前指向
      let num = this.length - 1 - position;
      for (let i = 0; i <= num; i++) {
        if (num === i) {
          return current.element;
        }
        current = current.prev;
      }
    }
  }

  // indexOf方法: 返回指定值在链表中的索引, 未找到返回-1
  indexOf(el) {
    // 若链表中没有数据的话，直接返回-1
    if (!this.length) return -1;

    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (el === current.element) {
        return i;
      }
      current = current.next;
    }
    // 没找到则返回-1
    return -1;
  }

  forwardString() {
    let current = this.tail; // 指针
    let str = '';
    while (current) {
      if (str === '') {
        str += current.element;
      } else {
        str = str + ' ' + current.element;
      }
      current = current.prev;
    }
    return str;
  }

  backwardString() {
    let current = this.head; // 指针
    let str = '';
    while (current) {
      if (str === '') {
        str += current.element;
      } else {
        str = str + ' ' + current.element;
      }
      current = current.next;
    }
    return str;
  }

  // remove(element): 移除内容指定项
  remove(el) {
    let current = this.head,
      next = current.next ? current.next : null,
      previous = null;

    // 遍历链表每项, 找到则删除
    for (let i = 0; i < this.length; i++) {
      if (el === current.element) {
        if (i === 0) { // case: position为零时
          this.head = next;
        } else {
          previous.next = next;
        }
        this.length--;
        return true;
      }

      previous = current;
      current = current.next;
      next = current && current.next ? current.next : null;
    }

    // 没有该项, true,静默成功
    return true;
  }

  // removeAt：从列表的指定位置移除一项
  removeAt(position) {
    // position取值判断
    if (position < 0 || position >= this.length) return false;
    let current = this.head,
      next = current.next ? current.next : null,
      previous = null;

    for (let i = 0; i < this.length; i++) {
      if (position === i) {
        if (position === 0) { // case: position为零时
          this.head = next;
        } else {
          previous.next = next;
        }
        this.length--;
        return true;
      }

      previous = current;
      current = current.next;
      next = current.next ? current.next : null;
    }
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length ? false : true;
  }
}

let dl = new DoublyLinkedList();

console.log(dl.append('a'));
console.log(dl.append('b'));
console.log(dl.append('c'));
console.log(dl.append('d'));
console.log(dl.insert(0, 'e'));
console.log(dl.insert(5, 'f'));
console.log(dl.forwardString());
console.log(dl.backwardString());
console.log(dl.indexOf('f'));
console.log(dl.length);
