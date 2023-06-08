/* 실패
function solution(numbers, target) {
  let allSum = numbers.reduce((acc, cur) => acc + cur, 0);
  let sum = allSum;
  let result = 0;
  for (let i = 0; i < 2 ** numbers.length; i++) {
    numbers.forEach(number => {
      if (sum > target) {
        sum -= number;
      } else {
        sum += number;
      }
    });
    if (sum === target) {
      result++;
    }
  }
  return result;
}
// 문제 접근
// 1. numbers의 값을 모두 더한다
// 2. target 값에 근접하기 위해 작은 수부터 빼고 난 후 sum 값과 target 값을 비교한다.
// 3. result에 1을 더하고 그 다음 작은 수부터 빼고 난 후 sum 값과 target 값을 비교한다.
// 2,3을 반복하고 sum 값이 target 값보다 작아지면 종료

// 처음에 원본 유지하고 + -
// 처음에 -하고 원본 찾아가기

// 다 더하고 하나씩 빼기
*/

function solution(numbers, target) {
  let answer = 0;
  dfs(0, 0);
  function dfs(level, sum) {
    if (level === numbers.length) {
      if (sum === target) answer++;
      return;
    }
    dfs(level + 1, sum + numbers[level]);
    dfs(level + 1, sum - numbers[level]);
  }
  return answer;
}
console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));

// [풀이]
/*
주어진 모든 숫자에 (+)연산과 (-)연산을 하는 경우를 탐색해 타겟 숫자가 나오는 횟수를 카운트하면 된다.
경우의 수를 고려해 보면 숫자 n개는 각각 (+)와 (-) 가 될 수 있는 두가지 경우의 수를 가지고 있고,
해당 경우의 수는 전체 숫자에 대해 동시에 발생하므로 2 * 2 * 2 * ….. n, 총 2^n번의 탐색이 일어난다.

DFS 알고리즘을 이용하면 전체 숫자가 (+) (-)일 모든 경우의 수를 탐색할 수 있다.
*/

// [그래프 탐색]
/*
하나의 정점으로부터 시작하여 차례대로 모든 정점들을 한 번씩 방문하는 것
  Ex) 특정 도시에서 다른 도시로 갈 수 있는지 없는지, 전자 회로에서 특정 단자와 단자가 서로 연결되어 있는지
*/

// [DFS(깊이우선탐색) 알고리즘]
/* 
루트 노드(혹은 다른 임의의 노드)에서 시작해서 다음 분기(branch)로 넘어가기 전에 해당 분기를 완벽하게 탐색하는 방법
  - 미로를 탐색할 때 한 방향으로 갈 수 있을 때까지 계속 가다가 더 이상 갈 수 없게 되면
    다시 가장 가까운 갈림길로 돌아와서 이곳으로부터 다른 방향으로 다시 탐색을 진행하는 방법과 유사하다.
  - 즉, 넓게(wide) 탐색하기 전에 깊게(deep) 탐색하는 것이다.
  - 사용하는 경우: 모든 노드를 방문 하고자 하는 경우에 이 방법을 선택한다.
  - 깊이 우선 탐색(DFS)이 너비 우선 탐색(BFS)보다 좀 더 간단하다.
  - 단순 검색 속도 자체는 너비 우선 탐색(BFS)에 비해서 느리다.
*/

// [DFS(깊이우선탐색)의 특징]
/*
  - 자기 자신을 호출하는 순환 알고리즘의 형태 를 가지고 있다.
  - 전위 순회(Pre-Order Traversals)를 포함한 다른 형태의 트리 순회는 모두 DFS의 한 종류이다.
  - 이 알고리즘을 구현할 때 가장 큰 차이점은, 그래프 탐색의 경우 어떤 노드를 방문했었는지
    여부를 반드시 검사 해야 한다는 것이다. 이를 검사하지 않을 경우 무한루프에 빠질 위험이 있다.
*/

// 백트래킹 : 해를 찾는 도중 해가 아니어서 막히면, 되돌아가서 다시 해를 찾아가는 기법

// [풀이]
// DFS는 깊이 우선 탐색으로, 자식부터 탐색한다는 의미이다.
// 자식노드를 우선적으로 탐색하여 원하는 값이 나올 때까지 재귀함수를 쓰는 방식을 사용한다.

// 여기에서는 원하는 sum 값을 얻을 때까지 +, - 하면서 깊이 우선 탐색을 하였다.
// DFS 방법에 따라 모든 숫자가 (+)인 경우를 모두 탐색한 뒤 다음 인덱스의 숫자가 (-)인 경우를 탐색한다.

// https://gmlwjd9405.github.io/2018/08/14/algorithm-dfs.html
// https://namu.wiki/w/%EB%B0%B1%ED%8A%B8%EB%9E%98%ED%82%B9
// https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/
