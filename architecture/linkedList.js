// 单向链表

class LinkedList {
  static node(el) {
    class Node {  // 链表节点类
      constructor(el) {
        this.element = el;
        this.next = null;
      }
    }
    return new Node(el)
  }

  constructor() {
    this.head = null;
    this.length = 0;
  }

  // 添加节点方法
  append(el) {
    let newNode = LinkedList.node(el)
    // 判断添加的是不是第一个节点
    if (!this.length) {
      this.head = newNode;
    } else {  // 找到链表最后一个节点,next指向新节点
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      // next指向新节点
      current.next = newNode;
    }
    // 链表长度更新
    return this.length += 1;
  }

  // toString方法
  toString() {
    // 定义变量
    let current = this.head;
    let listString = '';
    // 循环获取每个节点
    while (current) {
      if (!listString) {
        listString = current.element;
      } else {
        listString = listString + ' ' + current.element;
      }
      current = current.next;
    }
    return listString;
  }

  // insert插入方法
  /**
   *
   *
   * @param {number} position
   *    必须是一个大于0并且<=链表长度的整数
   * @param {*} el
   * @returns {boolean} 
   *    false 插入失败
   *    true 插入成功
   */
  insert(position, el) {
    // position取值判断
    if (position < 0 || position > this.length) return false;

    let newNode = LinkedList.node(el);
    let index = 0; // 指针
    let current = this.head;  // 当前指向
    let previous = null;    // 上一个
    // 循环找到插入位置
    while (index <= this.length) {
      // case: position为0
      if (position === 0) {
        newNode.next = current;
        this.head = newNode;
        this.length++;
        return true;
      } else if (position === index) {
        newNode.next = current;
        previous.next = newNode;
        this.length++;
        return true;
      }
      previous = current;
      current = current.next;
      index++;
    }
  }
  
  // get方法: 获取指定位置的值
  get(position) {
    // 判断position是否合法
    if (position < 0 || position >= this.length) return null;

    let current = this.head;  // 当前指向
    for (let i = 0; i < this.length; i++) {
      if (position === i) {
        return current.element;
      }
      current = current.next;
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

  // update方法: 更新指定位置的值
  update(position, el) {
    // position取值判断
    if (position < 0 || position >= this.length) return false;

    let current = this.head;  // 当前指向
    for (let i = 0; i < this.length; i++) {
      if (position === i) {
        current.element = el;
        return true;
      }
      current = current.next;
    }
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

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length ? false : true;
  }
}

let l = new LinkedList();

console.log(l.append('a'));
console.log(l.append('b'));
console.log(l.insert(1, 'c'));
console.log(l.insert(0, 'd'));
console.log(l.insert(4, 'e'));
console.log(l.get(4));
console.log(l.indexOf('y'));
console.log(l.update(1, 'f'));
console.log(l.remove('e'));
console.log(l.toString());
console.log(l.size());