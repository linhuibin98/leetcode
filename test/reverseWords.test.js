const reverseWords = require('../code/string/557.reverseWords.js');

let s = "Let's take LeetCode contest";

test("测试用例: s'teL ekat edoCteeL tsetnoc", () => {
  expect(reverseWords(s)).toBe("s'teL ekat edoCteeL tsetnoc")
});