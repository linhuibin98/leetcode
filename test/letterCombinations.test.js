const letterCombinations = require('../code/array/17.letterCombinations.js');

let s = "";
let m = "23";

test("测试用例: 输入\"\", 返回[]", () => {
  expect(letterCombinations(s)).toEqual([]);
});

test("测试用例: 输入\"2\", 返回['a', 'b', 'c']", () => {
  expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
});

test('测试用例: 输入\"23\", 返回["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]', () => {
  expect(letterCombinations(m)).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
});