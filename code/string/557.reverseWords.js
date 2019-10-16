/*
  给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

示例 1:

输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc" 
注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
*/

  // 1. 字符串按空格分隔, 保存数组, 数组元素的先后顺序就是单词顺序
  // 2. reverse反转字符在数组中顺序, 在join合并成字符串
// const reverseWords = function (s) {
//   return s.split(' ').map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ');
// }

  // split 正则匹配空格
// const reverseWords = function (s) {
//   return s.split(/\s/).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ');
// }

  // match方法匹配单词, 字符串按单词分隔
const reverseWords = function (s) {
  return s.match(/[\w']+/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ');
}

module.exports = reverseWords;