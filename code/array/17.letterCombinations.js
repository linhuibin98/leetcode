/*
  给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

/*
const letterCombinations = function (digits) {
  if (!digits) {return []};  // 如果没输入或输入为''时, 返回 []
  // map建立电话号码键盘映射
  let map = [0, 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  // 保存键盘映射后的字母内容, 如 23 => ['abc', 'def']
  let code = [];
  digits.split('').forEach(digit => {
    if (map[digit]) {
      code.push(map[digit]);
    }
  })
  // code项进行组合运算, 两两组合
  let front = code[0],  // 组合第一项
    later = '',  // 第二项
    index = 2,
    flag = 0,
    temp = [];   // 组合结果暂存

 if (code.length === 1) {  // 只输入一个数字的时候
    temp = front.split('');
  } else {
    later = code[1];
    for (let i = 0; i < front.length; i++) {
      const iv = front[i];
      for (let j = 0; j < later.length; j++) {
        const jv = later[j];
        item = iv + jv;
        temp.push(item)
      }
    }
  }

  function combination() {
    if (code[index]) {
      let temp2 = [];
      later = code[index];
      index++;
      if (temp[flag]) {
        front = temp[flag];
        flag++;
        
        for (let k = 0; k < later.length; k++) {
          for (let i = 0; i < temp.length; i++) {
            let kv = temp[i] + later[k]
            temp2.push(kv);
          }
        }
        temp = temp2;
        combination();
      }
    } 
    return temp;
  }

  return combination();
}
*/

const letterCombinations = function (digits) {
  if (!digits) {return []};  // 如果没输入或输入为''时, 返回 []
  // map建立电话号码键盘映射
  let map = [0, 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  // 保存键盘映射后的字母内容, 如 23 => ['abc', 'def']
  let code = [];
  digits.split('').forEach(digit => {
    if (map[digit]) {
      code.push(map[digit]);
    }
  })

  if (code.length === 1) return code[0].split('');  // 若只输入一个数字

  function comb(code) {
    let temp = [];  // 临时存储组合结果
    for (let i = 0; i < code[0].length; i++) {
      for (let j = 0; j < code[1].length; j++) {
        temp.push(`${code[0][i]}${code[1][j]}`);
      }
    }
    code.splice(0, 2, temp);  // 替换已经组合的前两项, 变成第一项, 继续和后面的组合
    if (code.length > 1) {  // 组合前两项后, 若有第三项, 继续组合 => 递归
      comb(code);
    }
    return code[0];
  }

  return comb(code);
}

// console.log(letterCombinations('234'));

module.exports = letterCombinations;