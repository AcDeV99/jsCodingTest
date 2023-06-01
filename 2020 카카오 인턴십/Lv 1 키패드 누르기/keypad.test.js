const KEYPAD = {
  2: {
    1: 1,
    2: 0,
    3: 1,
    4: 2,
    5: 1,
    6: 2,
    7: 3,
    8: 2,
    9: 3,
    '*': 4,
    0: 3,
    '#': 4,
  },
  5: {
    1: 2,
    2: 1,
    3: 2,
    4: 1,
    5: 0,
    6: 1,
    7: 2,
    8: 1,
    9: 2,
    '*': 3,
    0: 2,
    '#': 3,
  },
  8: {
    1: 3,
    2: 2,
    3: 3,
    4: 2,
    5: 1,
    6: 2,
    7: 1,
    8: 0,
    9: 1,
    '*': 2,
    0: 1,
    '#': 2,
  },
  0: {
    1: 4,
    2: 3,
    3: 4,
    4: 3,
    5: 2,
    6: 3,
    7: 2,
    8: 1,
    9: 2,
    '*': 1,
    0: 0,
    '#': 1,
  },
};

function solution(numbers, hand) {
  let result = '';
  let left = '*';
  let right = '#';
  numbers.forEach(number => {
    switch (number) {
      case 1:
      case 4:
      case 7:
        result += 'L';
        left = number;
        break;
      case 3:
      case 6:
      case 9:
        result += 'R';
        right = number;
        break;
      case 2:
      case 5:
      case 8:
      case 0:
        if (KEYPAD[number][left] < KEYPAD[number][right]) {
          result += 'L';
          left = number;
        } else if (KEYPAD[number][left] > KEYPAD[number][right]) {
          result += 'R';
          right = number;
        } else if (hand === 'left') {
          result += 'L';
          left = number;
        } else {
          result += 'R';
          right = number;
        }
        break;
    }
  });
  return result;
}

describe('키패드 누르기', () => {
  test('LRLLLRLLRRL', () => {
    expect(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')).toBe(
      'LRLLLRLLRRL'
    );
  });
  test('LRLLRRLLLRR', () => {
    expect(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')).toBe(
      'LRLLRRLLLRR'
    );
  });
  test('LLRLLRLLRL', () => {
    expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right')).toBe(
      'LLRLLRLLRL'
    );
  });
});

// 직선 거리 : 1
// 대각선 거리 : 2
