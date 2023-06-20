function solution(cards1, cards2, goal) {
  let in1 = 0,
    in2 = 0,
    in3 = 0;

  while (in3 < goal.length) {
    if (in1 < cards1.length && cards1[in1] === goal[in3]) in1++;
    else if (in2 < cards2.length && cards2[in2] === goal[in3]) in2++;
    else return 'No';
    in3++;
  }
  return 'Yes';
}

console.log(
  solution(
    ['i', 'drink', 'water'],
    ['want', 'to'],
    ['i', 'want', 'to', 'drink', 'water']
  )
); // "Yes"
console.log(
  solution(
    ['i', 'water', 'drink'],
    ['want', 'to'],
    ['i', 'want', 'to', 'drink', 'water']
  )
); // "No"

/*
[문제 접근]
1. goal의 배열값을 cards1과 cards2를 교차해서 비교한다.  
2. 같으면 넘어가고 cards1, cards2 둘 모두와 다르면 "No"를 반환하고 종료한다.
3. 모두 같으면 "Yes"를 반환하고 종료한다. 

[풀이]
1. goal을 foreach문으로 감싼다.
2. goal의 인덱스 값을 이용하여 cards 배열값들과 goal의 배열값을 비교한다.
3. 같으면 넘어가고 둘 모두 다르면 return "No"
4. 모두 같으면 retrun "Yes"


[문제 접근]
1. cards1 배열과 cards2 배열 둘중 하나의 값이 goal[i]와 같다면 나머지 값은 goal[i+1]과 같아야 한다.
2. 같으면 1번의 과정을 반복하고 다르면 "No"를 반환하고 종료한다.
3. 모두 같다면 "Yes"를 반환하고 종료한다.

*/
