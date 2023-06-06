// // [재귀 풀이]

// // 문제 1: 주어진 문자열을 거꾸로 나열
// function reverseStr(str) {
//   if (str.length <= 1) return str;
//   return reverseStr(str.slice(1)) + str[0];
// }
// console.log(reverseStr('awesome')); // emosewa

// // 문제 2: 문자열을 거꾸로 해도 초기 문자열과 같으면 true, 아니면 false 반환
// function isPalindrome(str) {
//   if (str.length === 1) return true;
//   if (str.length === 2) return str[0] === str[1];
//   if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
//   return false;
// }
// console.log(isPalindrome('awesome')); // false
// console.log(isPalindrome('dad')); // true
// // slice(-1) : 문자열의 마지막 문자
// // slice(1, -1) : 문자열의 첫 문자와 끝문자를 제외한 문자열

// // 문제 3: 배열과 콜백함수를 인자로 받으며, 요소 중 하나라도 콜백함수를 만족하면 true 반환
// function someRecursive(arr, callback) {
//   if (arr.length === 0) return false;
//   if (callback(arr[0])) return true;
//   return someRecursive(arr.slice(1), callback);
// }
// function callback(some) {
//   return some === 3;
// }
// console.log(someRecursive([1, 2, 3], callback));

// // function cal(func, num) {
// //   return func(num);
// // }
// // function increase(num) {
// //   return num + 1;
// // }
// // function decrease(num) {
// //   return num - 1;
// // }
// // console.log(cal(increase, 1));
// // console.log(cal(decrease, 1));

// // 문제 4: 배열 안의 배열은 해체하여 기본 배열의 형태를 반환
// function flatten(oldArr) {
//   let newArr = [];
//   for (let i = 0; i < oldArr.length; i++) {
//     if (Array.isArray(oldArr[i])) {
//       newArr = newArr.concat(flatten(oldArr[i]));
//     } else {
//       newArr.push(oldArr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(flatten([1, [2, [3, 4], [5]]])); // [1, 2, 3, 4, 5]
// // [해설]
// // 1. 1은 newArr에 push되고 [2, [3, 4], [5]]는 concat(flatten())에 재귀
// // 2. 2는 재귀된 newArr에 push되고 [3, 4]는 concat(flatten())에 재귀
// // 3. 3, 4는 재귀된 newArr에 push되고 더이상 내부 배열이 없으니까 2의 concat 실행하여 2의 재귀된 newArr이 [2, 3, 4] 구성
// // 4. [2, 3, 4, [5]] 에서 [5]는 concat(flatten())에 재귀
// // 5. 5는 재귀된 newArr에 push되고 concat되어 [2, 3, 4, 5]로 재귀된 newArr 구성
// // 6. 1번의 concat에 의해 newArr은 [1, 2, 3, 4, 5] 구성

// // 문제 5: 배열 안의 모든 문자열의 첫번째 문자를 대문자, 나머지를 소문자로 바꾸어 반환
// function capitalizeFirst(arr) {
//   let result = [];
//   if (arr.length === 0) return [];
//   else
//     result.push(
//       arr[0][0].toUpperCase() + arr[0].slice(1).toLowerCase(),
//       ...capitalizeFirst(arr.slice(1))
//     );
//   return result;
// }
// console.log(capitalizeFirst(['banaNa', 'appLe', 'stRawberry'])); // ['Banana', 'Apple', 'Strawberry']

// // 재귀 안쓰고 풀기
// function solution(arr) {
//   let result = [];
//   arr.forEach(str => {
//     result.push(str[0].toUpperCase() + str.slice(1).toLowerCase());
//   });
//   return result;
// }
// console.log(solution(['banaNa', 'appLe', 'stRawberry'])); // ['Banana', 'Apple', 'Strawberry']

// // 문제 6: 주어진 객체 안에 숨겨진 짝수 값을 모두 더한 결과를 반환
// const obj = {
//   1: '1',
//   2: '2',
//   3: 3,
//   4: 4,
//   5: [1, 2, 3, 4, 5],
//   6: { 1: '1', 2: '2', 3: '3' },
//   7: '7',
//   8: 8,
//   9: [3, 6, 8],
// };

// function nestedEvenSum(obj, sum = 0) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'object') sum += nestedEvenSum(obj[key]);
//     else if (typeof obj[key] === 'number' && obj[key] % 2 === 0)
//       sum += obj[key];
//   }
//   return sum;
// }
// console.log(nestedEvenSum(obj));

// // # 자바스크립트 반복문 종류
// // 1. for : 고전적인 for문
// // 2. for in : 객체의 프로퍼티 키 열거 전용
// // 3. for of : 이터러블 순회 전용
// // 4. forEach(): 배열 순회 전용 메서드
// // 5. while : 고전적인 while문
// // 6. do while : 고전적인 do...while문
// // 7. Object 객체 메서드: 객체 순회 전용
// // 8. Array.prototye 메서드 : 배열 전용

// // 문제 7: 문자열이 담긴 배열이 주어졌을 때, 모든 문자열의 문자를 대문자로 바꾸는 함수
// function capitalizeWords(arr) {
//   let result = [];
//   if (arr.length === 0) return [];
//   result.push(arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1)));
//   return result;
// }
// // function capitalizeWords(arr) {
// //   if (arr.length === 1) return [arr[0].toUpperCase()];
// //   let res = capitalizeWords(arr.slice(0, -1));
// //   res.push(arr[arr.length - 1].toUpperCase());
// //   return res;
// // }
// console.log(capitalizeWords(['array', 'object']));

// // 문제 8: 객체가 인자로 주어질 때, 객체의 모든 '숫자'값을 '문자열'로 바꾸는 함수
// const obj = {
//   1: '1',
//   2: '2',
//   3: 3,
//   4: 4,
//   5: [1, 2, 3, 4, 5],
//   6: { 1: 1, 2: 2, 3: 3 },
//   7: '7',
//   8: 8,
//   9: { 3: 357, 5: 576, 8: 12312 },
// };
// function stringifyNumbers(obj) {
//   const newObj = {};
//   for (let key in obj) {
//     if (typeof obj[key] === 'number') newObj[key] = obj[key].toString();
//     else if (typeof obj[key] === 'object' && !Array.isArray(obj[key]))
//       newObj[key] = stringifyNumbers(obj[key]);
//     else newObj[key] = obj[key];
//   }
//   return newObj;
// }
// console.log(stringifyNumbers(obj));
// // typeof의 결과로 배열, 객체 모두 object가 나오기 때문에 else if 조건에서 배열은 빼줌.

// // 문제 9: 객체가 인자로 주어질 때, 객체의 모든 문자열 값을 담은 배열을 반환하는 함수
// const obj = {
//   1: '1',
//   2: '2',
//   3: 3,
//   4: 4,
//   5: [1, '2', 3, 4, '5'],
//   6: { 1: '1', 2: 2, 3: '3' },
//   7: '7',
//   8: 8,
//   9: { 3: 357, 5: 576, 8: 12312 },
// };
// function collectStrings(obj) {
//   let result = [];
//   for (let key in obj) {
//     if (typeof obj[key] === 'object') result.push(...collectStrings(obj[key]));
//     else if (typeof obj[key] === 'string') result.push(obj[key]);
//   }
//   return result;
// }
// console.log(collectStrings(obj)); // ['1', '2', '2', '5', '1', '3', '7']
// // [해설]
// // 1. 1, 2는 string이므로 result에 push
// // 2. 3, 4는 number이므로 제외
// // 3. 5는 object이므로 [1, '2', 3, 4, '5']로 재귀
// // 3-1. 재귀한 '2', '5'만 string이므로 재귀한 result에 push
// // 3-2. ...result이므로 ['2', '5']에서 '2', '5'로 된 것을 result에 push
// // 4. 6은 object이므로 { 1: '1', 2: 2, 3: '3' }로 재귀
// // 4-1. 1: '1'과 3: '3'만 string이므로 재귀한 result에 push
// // 4-2. ...result이므로 ['1', '3']에서 '1', '3'로 된 것을 result에 push
// // 5. 7은 string이므로 result에 push
// // 6. 8은 number이므로 제외
// // 7. 9는 object지만 내부에 string이 없으므로 제외
