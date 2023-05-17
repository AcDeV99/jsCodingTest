import areBracketsBalanced from './areBracketsBalanced.js';

describe('괄호 검사 알고리즘', () => {
  test('Not Balanced', () => {
    expect(areBracketsBalanced('{[(])}')).toBe(false);
  });

  test('Balanced', () => {
    expect(areBracketsBalanced('{[()]}')).toBe(true);
  });

  test('Balanced', () => {
    expect(areBracketsBalanced('')).toBe(true);
  });
});

// import { sum, sub } from './calcs.js';
// describe('계산기', () => {
//   test('3 + 5 = 8', () => {
//     expect(sum(3, 5)).toBe(8);
//   });

//   test('3 - 5 = -2', () => {
//     expect(sub(3, 5)).toBe(-2);
//   });
// });
