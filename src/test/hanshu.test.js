/**
 * Created by lenovo on 2018/1/23.
 */
const hanshu = require('../common/js/testHanshu.js')

test('adds 1 + 2 to equal 3', ()=> {
  expect(hanshu.sum(1, 2)).toBe(3);
});
test('duplicate', ()=> {
  expect(hanshu.duplicate([1,2,4,5,1])).toEqual([1,2,4,5]);
});