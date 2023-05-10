// 이렇게 사용하면 잘못된 방법
function addElementList(num_list) {
  const [lastElement, last2Element] = [
    num_list[num_list.length - 1],
    num_list[num_list.length - 2],
  ];
  const result = [...num_list];
  result.push(
    lastElement > last2Element ? lastElement - last2Element : lastElement * 2
  );
  return result;
}

// 구조분해할당과 spread 연산자를 깔끔하게 사용함
function addElementList(num_list) {
  const [lastElement, last2Element] = [...num_list].reverse();
  return [
    ...num_list,
    lastElement > last2Element ? lastElement - last2Element : lastElement * 2,
  ];
}

console.log(addElementList([2, 1, 6])); // [2, 1, 6, 5]
console.log(addElementList([5, 2, 1, 7, 5])); // [5, 2, 1, 7, 5, 10]
