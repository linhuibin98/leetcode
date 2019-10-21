// 集合

class Set {
  constructor() {
    this.items = {};
  }

  // 添加元素
  add(value) {
    // 判断集合中是否包含该元素
    if (this.has(value)) {
      return false;
    }
    this.items[value] = value;
    return true;
  }

  // has: 集合中是否有该值
  has(value) {
    return this.items.hasOwnProperty(value);
  }

  // remove
  remove(value) {
    // 判断集合中是否包含该元素
    if (this.has(value)) {
      return false;
    }

    // 将属性在集合中删除
    delete this.items[value];
    return true;
  }

  // clear
  clear() {
    this.items = {}
  }

  // size方法
  size() {
    return Object.keys(this.items).length
  }

  // values: 获取集合中的所有值
  values() {
    return Object.entries(this.items).map(item => item[1]);
  }

  // union并集
  union(otherSet) {
    let s = new Set();

    this.values().forEach(val => {
      s.add(val);
    });

    otherSet.values().forEach(val => {
      s.add(val);
    });

    return s.values();
  }

  // 交集
  intersection(otherSet) {
    let s = new Set();

    this.values().forEach(val => {
      s.add(val);
    });

    let arr = [];

    otherSet.values().forEach(val => {
      if (!s.add(val)) {
        arr.push(val);
      }
    });
    return arr;
  }
}

let s = new Set();
let s2 = new Set();

console.log(s.add(1));
console.log(s.add(2));
console.log(s.add(3));
console.log(s.values());
console.log(s2.add(1));
console.log(s2.add(3));
console.log(s2.add(4));
console.log(s2.add(5));
console.log(s2.add(3));
console.log(s2.values());
// console.log(s.union(s2));
console.log(s.intersection(s2));