function solutionK(array, commands) {
  const lenCommands = commands.length;
  const result = [];
  for (let index = 0; index < lenCommands; index++) {
    const [i, j, k] = commands[index];
    result.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  }
  return result;
}

function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter((_, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}

describe('K번째수 정렬', () => {
  test('[1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]] = [5, 6, 3]', () => {
    expect(
      solutionK(
        [1, 5, 2, 6, 3, 7, 4],
        [
          [2, 5, 3],
          [4, 4, 1],
          [1, 7, 3],
        ]
      )
    ).toStrictEqual([5, 6, 3]);
  });
});
