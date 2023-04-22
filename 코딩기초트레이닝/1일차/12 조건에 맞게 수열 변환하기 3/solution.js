// function solution(arr, k) {
//   return k % 2 === 0 ? arr.map((ele) => ele + k) : arr.map((ele) => ele * k);
// }

// 함수의 매개변수 타입이 기본형인 경우 원본 데이터에 영향이 없다. ele 등
// 함수의 매개변수 타입이 객체 타입인 경우 원본 데이터에 영향을 끼친다. arr, arr[i] 등

// 매개변수 타입이 기본형이고 원본 데이터에 영향 없이
// map 함수로 계산한 결과를 return
function solution(arr, k) {
  return arr.map((v) => (k % 2 ? v * k : v + k));
}

// 매개변수 타입이 객체 타입이고 원본 데이터에 영향을 줘서
// 원본 데이터를 return 함
// map보다 3배 느리지만 테스트10 때는  더 빠름
function solution(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    k % 2 === 0 ? (arr[i] += k) : (arr[i] *= k);
  }
  return arr;
}

// 매개변수 타입이 기본형이고 원본 데이터에 영향이 없어 [1, 2, 3, 100, 99, 98] 을 그대로 반환
function solution(arr, k) {
  for (ele in arr) {
    k % 2 === 0 ? (ele += k) : (ele *= k);
  }
  return arr;
}

console.log(solution([1, 2, 3, 100, 99, 98], 3)); // [3, 6, 9, 300, 297, 294]
console.log(solution([1, 2, 3, 100, 99, 98], 2)); // [3, 4, 5, 102, 101, 100]
