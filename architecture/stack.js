// 栈结构的实现: 封装栈类

class Stack {
  constructor() {
    this.item = [];  // 数组模拟栈结构
  }

  push(el) {  // 压栈
    this.item.unshift(el);
    return this.item;
  }

  pop() {  // 出栈
    return this.item.shift();
  }

  peek() {  // 返回栈顶的元素
    return this.item[0];
  }

  isEmpty() {  // 栈是否为空
    if (this.item.length) return false;
    return true;
  }

  size() {  // 返回栈里的元素个数
    return this.item.length;
  }

  toString() {  // 将栈结构的内容以字符形式返回
    let stackStr = '';
    for (let i = 0; i < this.item.length; i++) {
      stackStr += this.item[i];
    }
    return stackStr;
  }
}

function dec2bin(decNumber) {  // 十进制转二进制
  let stack = new Stack();
  while(decNumber > 1) {
    stack.push(decNumber % 2);
    decNumber = Math.floor(decNumber / 2);
  }
  return stack.toString();
}

// console.log(dec2bin(100));