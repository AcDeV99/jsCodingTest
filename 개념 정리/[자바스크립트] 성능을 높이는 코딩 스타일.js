// [배열의 생성, 초기화 성능 비교]
// Code #1 - Array() 생성자를 사용한 배열 생성
var arr = new Array();

// Code #2 - [] 리터럴 형식으로 배열 생성
var arr = [];

// → 리터럴 형식이 여러 브라우저에서 좀더 좋은 성능을 보임

// Code #1 - 접근자를 사용한 데이터 할당
var arr = [];
for (var i = 0; i < 1000; i++) {
  arr[i] = i;
}

// Code #2 - push() 함수를 사용한 데이터 할당
var arr = [];
for (var i = 0; i < 1000; i++) {
  arr.push(i);
}

// Chrome, firefox를 제외한 대부분의 브라우저에서
// push() 데이터 할당보다 접근자 [] 데이터 할당이 2배 이상 빠름
// 접근자를 이용한 데이터 할당이 더 성능이 좋다

// [오브젝트(Object) 객체의 생성, 초기화 성능 비교]
// Code #1 - new Object() 생성자를 사용한 오브젝트 객체 생성
var obj = new Object();

// Code #2 - {} 리터럴을 사용한 오브젝트 객체 생성
var obj = {};

// 리터럴을 사용한 오브젝트 객체 생성 방법이 근소한 차이로 더 성능이 좋으나
// 성능 차이가 거의 없는 경우에는 성능보다는 개발과 유지 보수, 가독성까지 고려해서
// 코드 작성방식을 선택하는 것이 올바른 최적화 방법이다

// Code #1 - . 연산자를 이용한 데이터 삽입
var obj = {};

obj.a = 1;
obj.b = 2;
obj.c = 3;
obj.d = 4;
obj.e = 5;

// Code #2 - [] 연산자를 이용한 데이터 삽입
var obj = {};
var str = "a";

obj[str] = 1;
obj["b"] = 2;
obj["c"] = 3;
obj["d"] = 4;
obj["e"] = 5;

// . 연산자를 이용한 데이터 삽입이 근소한 차이로 더 성능이 좋으나
// [] 연산자를 이용한 데이터 삽입은 [] 안에 변수를 넣을 수 있어
// 작성하는 코드의 크기와 주요 대상 브라우저 및
// 코드의 가독성과 유지 보수를감안해 적절한 방식을 선택

arr = [];
for (var i = 0; i < 400; i++) {
  arr[i] = i;
}

// [반복문과 성능]
// Code #1 - for 구문
for (var i = 0, len = arr.length; i < len; i++) {
  arr[i]++;
}

// Code #2 - for-in 구문
for (var i in arr) {
  arr[i]++;
}

// Code #3 - while 구문
var i = 0,
  len = arr.length;
while (i < len) {
  arr[i] = i;
  i++;
}

// Code #4 - do-while 구문
var i = 0,
  len = arr.length;
do {
  arr[i] = i;
  i++;
} while (i < len);

// for-in 구문을 제외한 반복문은 주어진 배열 객체를
// 배열의 특성에 맞게 순차적으로 모든 요소를 탐색

// for-in 구문은 인자로 주어진 배열을 배열이 아닌 일반 객체 취급
// 반복 시점마다 객체의 모든 속성을 무작위로 탐색
// → for-in 구문은 다른 반복문에 비해 현저히 느려 사용 X

// for-in을 제외한 나머지 구문의 성능 최적화
// 반복에 사용되는 var len = arr.length과 같이 미리 다른 변수에 저장하여
// 반복문이 arr.length까지가 아니라 len까지로 동작하게 하여
// 매번 arr.length를 다시 체크하는 과정을 없앤다.

// 데이터를 정렬하거나 탐색하는 데 반복문을 사용한다면
// quick-sort, merge-sort, BFS(Breadth First Search),
// DFS(Depth First Search) 등과 같은 증명된 알고리즘을
// 함께 사용해 반복 횟수를 줄여 자바스크립트 성능을 향상

// [조건문과 성능]
// if, if-else, switch, 삼항연산자(? :)

// Code #1 - if-else 구문을 활용한 조건분기
function toEnglish(value) {
  var number = "zero";

  if (value === 1) {
    number = "one";
  } else if (value === 2) {
    number = "two";
  } else if (value === 3) {
    number = "three";
  } else if (value === 4) {
    number = "four";
  } else if (value === 5) {
    number = "five";
  } else if (value === 6) {
    number = "six";
  } else if (value === 7) {
    number = "seven";
  } else if (value === 8) {
    number = "eight";
  } else if (value === 9) {
    number = "nine";
  } else if (value === 10) {
    number = "ten";
  } else {
    number = "null";
  }

  return number;
}

for (var i = 0; i < 12; i++) {
  toEnglish(i);
}

// Code #2 - switch-case 구문을 활용한 조건분기
function toEnglish(value) {
  var number = "zero";
  switch (value) {
    case 1:
      number = "one";
      break;
    case 2:
      number = "two";
      break;
    case 3:
      number = "three";
      break;
    case 4:
      number = "four";
      break;
    case 5:
      number = "five";
      break;
    case 6:
      number = "six";
      break;
    case 7:
      number = "seven";
      break;
    case 8:
      number = "eight";
      break;
    case 9:
      number = "nine";
      break;
    case 10:
      number = "ten";
      break;
    default:
      number = "null";
      break;
  }
  return number;
}
for (var i = 0; i < 12; i++) {
  toEnglish(i);
}

// Code #3 - 삼항연산자를 활용한 조건분기
function toEnglish(value) {
  var number = false;
  number =
    value === 1
      ? "one"
      : value === 2
      ? "two"
      : value === 3
      ? "three"
      : value === 4
      ? "four"
      : value === 5
      ? "five"
      : value === 6
      ? "six"
      : value === 7
      ? "seven"
      : value === 8
      ? "eight"
      : value === 9
      ? "nine"
      : value === 10
      ? "ten"
      : "null";

  return number;
}

for (var i = 0; i < 12; i++) {
  toEnglish(i);
}

// 조건문을 나열하는 방식은 권장하지 않음
// 조건이 많을 때는 배열이나 JSON, 해시 방식의 자바스크립트 객체를
// 사용하는 편이 개발은 물론 이후의 유지 보수 작업이 수월함

// 브라우저별 성능 차이는 크지 않지만, 일반적으로
// 조건 판단 요소가 많아질수록 switch-case 구문이 성능이 더 좋다.

// [조건문 구현 방식별 차이점]
// Code #0 단순한 구조의 조건 비교
function number_range(value) {
  var range = "";
  if (value <= 10) {
    range = "~10";
  } else if (value <= 20) {
    range = "11~20";
  } else if (value <= 30) {
    range = "21~30";
  } else if (value <= 40) {
    range = "31~40";
  } else if (value <= 50) {
    range = "41~50";
  } else if (value <= 60) {
    range = "51~60";
  } else if (value <= 70) {
    range = "61~70";
  } else {
    range = "71~";
  }
  return range;
}
number_range(42);

// Code #1 계층 구조를 활용한 조건 비교
function number_range(value) {
  var range = "";

  if (value <= 40) {
    if (value <= 20) {
      if (value <= 10) {
        range = "~10";
      } else {
        range = "11~20";
      }
    } else {
      if (value <= 30) {
        range = "21~30";
      } else {
        range = "31~40";
      }
    }
  } else {
    if (value <= 60) {
      if (value <= 50) {
        range = "41~50";
      } else {
        range = "51~60";
      }
    } else {
      if (value <= 70) {
        range = "61~70";
      } else {
        range = "71~";
      }
    }
  }

  return range;
}

number_range(42);

// Code #2 배열을 활용한 조건 비교
function number_range(value) {
  var arr_range = [
    "~10",
    "11~20",
    "21~30",
    "31~40",
    "41~50",
    "51~60",
    "61~70",
    "71~",
  ];

  var arr_range_index = Math.ceil(value / 10) - 1;
  if (arr_range_index < 0) {
    arr_range_index = 0;
  } else if (arr_range_index >= arr_range.length) {
    arr_range_index = arr_range.length - 1;
  }
  return arr_range[arr_range_index];
}

number_range(42);

// Code #3 해시 객체를 활용한 조건 비교
function number_range(value) {
  var hash_range = {
    2: "11~20",
    3: "21~30",
    4: "31~40",
    5: "41~50",
    6: "51~60",
    7: "61~70",
  };

  var hash_range_key = Math.ceil(value / 10);
  if (hash_range[hash_range_key]) {
    return hash_range[hash_range_key];
  }
  if (value <= 10) {
    return "~10";
  }
  return "71~";
}

number_range(42);

// 실행 성능은 Code#1의 실행속도가 가장 빠름
// 코드에서 조건문이 호출되는 횟수는 Code#2, Code#3이 Code#1보다 적음
// 하지만 Code#2, Code#3에서 필수적인 배열과 해시 객체를 생성하고 탐색하는 시간과
// 자바스크립트 내장 함수인 Math.ceil() 함수를 호출하는 시간이 성능에 영향을 미침
// → 조건문의 호출 횟수가 성능 개선에서 중요한 요소는 아니다.

// [문자열 연산과 성능]
// Code #1 - String 객체를 이용한 문자열 생성
var str = new String("abcdefghijklmnopqrstuvwxyz");

// Code #2 - " " 리터럴을 이용한 문자열 생성
var str = "abcdefghijklmnopqrstuvwxyz";

// → 문자열 생성시 리터럴을 이용한 문자열 생성이 더 성능이 좋음

// Code #1 - += 연산자를 이용한 문자열 병합
str = "";
for (var i = 0; i < 100; i++) {
  str += "test";
}

// Code #2 - Array.join() 메서드를 이용한 문자열 병합
arr = [];
for (var i = 0; i < 100; i++) {
  arr[i] = "test";
}
arr.join("");

// += 연산자는 두 문자열을 합친 새로운 문자열을 만들고
//  새로운 메모리 위치에 저장함과 동시에 기존 문자열에 대한 참조를
// 변경하는 연산을 반복적으로 실행

// Array.join() 함수로 연산하면 비교적 메모리에 효율적으로
// 접근할 수 있는 배열을 사용

// → Array.join() 함수가 훨씬 더 성능 좋음

// [정규 표현식과 성능]
// 문자열이 공백으로 시작하는지 보면서
// 공백 다음에 문자열 끝이 오는지도 확인
// Code #1. 한꺼번에 탐색
str.replace(/^\s+|\s+$/g, "");

// 문자열이 공백으로 시작되는지 보고
// 공백이 끝나는 데까지 공백을 제거 후
// 공백이 제거된 문자열에서 공백 다음에 문자열 끝이 있다면
// 문자열 끝 앞에 있는 공백을 제거
// Code #2. 나눠서 탐색
str.replace(/^\s+/, "").replace(/\s+$/, "");

// Code #2가 더 효율적이다.
// 정규 표현식의 최적화 핵심은 '탐색 대상의 축소'이므로
// 불필요한 탐색 과정이 반복되지 않도록 주의해야 함

// [컴파일 횟수 축소를 통한 성능 향상]
// Code #1 - 정규 표현식의 컴파일과 실행을 반복하는 경우
for (var i = 0; i < 100; i++) {
  str.replace(/^\s+/, "").replace(/\s+$/, "");
}

// Code #2 - 정규 표현식의 컴파일을 최초 1번만 실행하는 경우
var reg1 = /^\s+/;
var reg2 = /\s+$/;
for (var i = 0; i < 100; i++) {
  str.replace(reg1, "").replace(reg2, "");
}

// [스코프 체인 탐색과 성능]
// 런타임 환경에서 가장 많이 발생하는 브라우저의 작업 가운데
// 자바스크립트의 실행 성능을 저해하는 요인이 변수, 객체, 함수 등의
// 메모리 상의 위치를 찾는 탐색 작업입니다. 이 탐색 작업이 브라우저에서
// 어떻게 이뤄지는지는 스코프 체인을 통해 알 수 있습니다.

// [스코프 체인]
// 자바스크립트의 함수를 실행하면서 어떤 속성(변수, 객체 등)에 접근해야 할 때
// 해당 속성을 효율적으로 탐색하도록 속성을 일정한 객체 단위로 분류하고
// 각 객체에 접근하기 위한 객체의 참조를 저장하는 특별한 공간

// [스코프 체인의 구성 요소]
// 활성화 객체(Activation Object)와 전역 객체(Global Object)

// 어떤 자바스크립트 함수가 있을 때 함수에서 접근할 수 있는 모든 속성 가운데
// 함수 내부에서만 접근할 수 있는 함수의 지역변수나 this, arguments 객체 등의 속성은
// 스코프 체인의 활성화 객체에 포함돼 관리됩니다.

// 그리고 함수 외부에서도 접근할 수 있는 windows, document, 전역함수, 전역변수와 같은 속성은
// 스코프 체인의 전역 객체에 포함돼 관리됩니다.

// 이 활성화 객체와 전역 객체가 실행 중인 함수의 스코프 체인(유효범위 체인)에 포함돼
// 함수에서 어떤 속성을 탐색할 때 길잡이 역할을 하게 되는 것입니다.

// window와 document 등의 전역 객체는 자바스크립트 동작 시
// 어디서나 항상 접근 가능한 데이터를 포함하고 있기 때문에
// 웹 페이지의 자바스크립트가 동작하는 모든 시간 동안 존재하며,
// 함수 실행 시 함수의 스코프 체인에서 전역 속성을 탐색하는 데 사용됩니다.

// 반면 활성화 객체는 실행 중인 함수의 내부 데이터(지역변수, this, arguments 등)를 포함하기 때문에
// 전역 객체와는 달리 함수가 실행되는 동안에만 존재하며,
// 함수 내부에서 자주 사용하는 데이터가 모여 있는 만큼
// 모든 속성을 탐색할 경우 최우선으로 탐색하는 대상 객체가 됩니다.

// [실행 문맥(Execution Context)]
// 함수가 동작하는 환경을 나타내며, 브라우저 내부에서 사용되는 객체

// 실행 문맥은 함수가 실행될 때 새로 생성되고 함수가 종료될 때 소멸되며
// 함수의 스코프 체인에 대한 참조를 가지고 있게 됩니다.
// 함수는 어떤 속성에 접근해야 할 때 실행 문맥을 통해 스코프 체인에 접근합니다.

// 실행 문맥은 자신과 연관된 함수의 스코프 체인을 참조하고 있으며,
// 함수에서 접근해야할 어떤 속성의 탐색 경로는
// '실행 문맥 > 스코프 체인 > 활성화 객체 > 스코프 체인 > 전역 객체'와 같이 구성됩니다.

function isZero(num) {
  var res = num === 0;
  return res;
}
var result = isZero(0);

// isZero() 함수가 생성되면 함수의 실행 문맥은 아직 생성되지 않은 상태이므로
// 함수의 내부 속성(브라우저 내부 기능)의 하나인 [[Scope]] 속성에
// 전역 객체(Global Object)를 가리키는 스코프 체인은 우선적으로 저장합니다.
// 함수의 실행 문맥은 함수가 실행되는 시점에 생성됩니다.

// isZero() 함수가 실행되면 실행 문맥이 생성되며
// 함수의 [[Scope]] 속성에 저장한 전역 객체를 함수의 실행 문맥이 가리키는 스코프 체인에 복사합니다.
// 그리고 활성화 객체를 생성하고 함수의 내부에서 접근할 수 있는 속성
// (파라미터 변수인 num과 boolean 값을 저장하는 변수인 res 및 this, arguments 등)을 채워 넣은 후
// 활성화 객체를 스코프 체인에 추가합니다.
// 이렇게 함수를 실행할 준비를 마치면 그 후에 함수에 정의된 각 구문을 실행합니다.

// var res = (num === 0);
// isZero() 함수에 있는 위 구문을 실행할 때
// 함수의 파라미터 변수인 num과 함수의 지역변수로 선언된 res에 대해
// 해당 변수의 메모리에 접근해야 하는데, 둘 다 활성화 객체에 포함돼 있는 속성이기 때문에
// '실행 문맥 > 스코프 체인 > 활성화 객체'의 경로로 탐색해 접근합니다.
// 전역 객체는 탐색하지 않습니다.

// 만약 isZero() 함수 내에서 window, document 등의 전역변수에 접근해야 한다면
// '실행 문맥 > 스코프 체인 > 활성화 객체 > 스코프 체인 > 전역 객체'의 경로로
// 속성(window, document)을 탐색했을 것입니다.
// 즉, 활성화 객체를 먼저 탐색한 후 찾는 속성이 없을 때는
// 스코프 체인에 참조돼 있는 다음 탐색 대상인 전역 객체를 탐색하게 됩니다.
// 그럼 스코프 체인에서 발생하는 속성 탐색 과정을 성능과 연관 지어 생각해 볼 수 있습니다.

// 즉, 함수에서 어떤 속성에 접근해야 하는 경우를 가정해 보면 됩니다.
// 만약 함수가 중첩될 경우에는 중첩이 깊어질수록 활성화 객체는 함수의 중첩된 깊이만큼 생성됩니다.
// 즉, 3번의 중첩된 함수에서 가장 안쪽의 함수 스코프 체인에 3개의 활성화 객체를 갖게되는 것이며, 그 결과는 다음과 같습니다.

// 이 경우 가장 안쪽의 함수에서 전역 속성에 접근할 때는
// '실행 문맥 > 스코프 체인 > 활성화 객체 1 > 스코프 체인 > 활성화 객체2 > 스코프 체인 > 활성화 객체3 > 스코프 체인 > 전역 객체'
// 와 같이 긴 탐색 경로를 거쳐야 합니다.

// 이러한 탐색 경로를 줄임으로써 실행 시간을 단축하고 자바스크립트 성능을 향상시킬 수 있습니다.

// 속성의 탐색경로를 줄임으로써 우리는 자바스크립트의 성능을 높일 수 있습니다.

// [지역변수를 활용한 스코프 체인 탐색 성능 개선]
// 앞에서 스코프 체인의 탐색 방법을 살펴보면 여러 개의 활성화 객체와 전역 객체를 탐색하면서 접근하려는 속성이 있는지 확인하는 과정이 반복됩니다.
// 그렇다면 첫 번째로 탐색하는 활성화 객체에 찾고자 하는 속성이 있는 경우 추가로 발생할 수 있는 다른 활성화 객체, 전역 객체를 탐색하는 과정을 줄여 성능을 향상시킬 수 있을 것입니다.

// Code #1 - 함수 내에서 전역 스코프 변수에 직접 접근하는 예제
window.htmlstring = [];

function makeList() {
  htmlstring.push("<ul>");
  for (var i = 0; i < 100; i++) {
    htmlstring.push("<li>value : " + i + "</li>");
  }
  htmlstring.push("</ul>");
}
makeList();
// makeList() 함수가 실행되면 함수 내부에서 htmlstring, i 속성에 접근하기 위해 스코프 체인을 탐색합니다.
// i 변수는 실행 중인 함수의 지역변수 이므로 처음 탐색하는 활성화 객체에서 찾을 수 있습니다.
// 그러나 htmlstring 객체는 활성화 객체에 먼저 접근해서 탐색하지만 찾지 못하고, 다시 전역 객체를 탐색해서 찾아야 합니다.

// Code #2 - 함수 지역변수로 참조해 전역 스코프 변수에 접근하는 예제
window.htmlstring = [];

function makeList() {
  var htmlstr = htmlstring;
  htmlstr.push("<ul>");
  for (var i = 0; i < 100; i++) {
    htmlstr.push("<li>value : " + i + "</li>");
  }
  htmlstr.push("</ul>");
}
makeList();
// 수정한 코드 중 var htmlstr = htmlstring; 부분이 성능 개선의 핵심입니다.
// 전역 객체에 존재하는 htmlstring 속성을 makeList() 함수의 지역변수에 저장해 활성화 객체에서 바로 찾을 수 있게 한 것입니다.
// 물론 var htmlstring = htmlstring; 구문을 실행하는 동안 htmlstring 속성에 접근해야 하므로 최초 한 번은 활성화 객체와 전역 객체를 모두 탐색해야 합니다.
// 하지만 그 이후에는 활성화 객체에 저장된 htmlstr 속성으로 전역변수인 htmlstring 객체에 접근할 수 있으니 활성화 객체를 거쳐 전역 객체까지 탐색할 필요가 없어집니다.

// 최적화 이전의 코드에서 htmlstring 객체를 찾으려면 '실행 문맥 > 스코프 체인 > 활성화 객체 > 스코프 체인 > 전역 객체'와 같이 동일한 탐색 경로를 7번 거칩니다.
// 하지만 수정한 코드에서는 var htmlstr = htmlstring; 구문을 실행할 경우 최초 한 번만 '실행 문맥 > 스코프 체인 > 활성화 객체 > 스코프 체인 > 전역 객체'와 같은 속성 탐색 경로를 거칩니다.
// 그 이후 window 객체의 htmlstring 속성에 접근하는 것은 지역변수 htmlstr 속성에 접근하는 것으로 대체돼 '실행 문맥 > 스코프 체인 > 활성화 객체'와 같이 단축된 탐색 경로를 거치므로 실행 속도가 더 빨라집니다.

// [프로토타입 체인]
// 자바스크립트의 모든 객체의 인스턴스는 new 연산자로 생성할 수 있으며,
// 생성된 인스턴스 객체는 생성자의 프로토타입(prototype)을 참조하게 됩니다.

var obj = new Object(); // obj - 인스턴스 객체, Object - 생성자 함수
// 이렇게 생성한 인스턴스 객체는 원본 객체 생성자 함수의 프로토타입 속성에 접근할 수 있습니다.
// 인스턴스 객체가 원본 객체 생성자 함수의 프로토타입 속성을 탐색할 때도 탐색을 위한 체인이 생성되는데,
// 이를 프로토타입 체인이라고 합니다.

// 위 코드에서 Object는 자신의 프로토타입을 참조하며, var obj = new Object(); 구문이 실행되면 obj는 Object이 프로토타입을 상속받습니다.
// 이때 스코프 체인에서 어떤 속성을 찾기 위해 활성화 객체로부터 전역 객체로 탐색 범위를 넓혀나간 것과 같이,
// 프로토타입 체인에서도 obj는 obj의 어떤 속성을 찾기 위해 obj의 프로토타입으로부터 프로토타입이 참조한 경로를 따라 탐색 범위를 넓혀 나가며
// Object의 프로토타입 속성에 접근합니다. 이 과정에서 탐색 경로가 길어질 수 있으며,
// 탐색 경로의 거리에 따라 프로토타입 체인에서도 스코프 체인에서와 같은 성능 저하가 발생할 수 있습니다.
// 그러므로 프로토타입에 존재하는 속성을 사용할 때 스코프 체인에서와 마찬가지로 지역변수에 담아서 사용한다면
// 불필요한 탐색 과정을 줄여 성능을 높일 수 있습니다.

// [그 외 스코프 체인 탐색 성능에 영향을 미치는 요소]
// 여러가지 스코프 체인의 변화와 그에 따른 속성의 탐색 시간에 영향을 미치는 요소가 있습니다.
// 그 가운데 with 구문이 존재합니다. with 구문은 쓰지 말라는 구문으로 자주 등장하는데,
// 그 이유를 스코프 체인 탐색 관점에서 살펴보면 다음과 같습니다
// with 구문을 사용하면 참조하는 멤버가 속한 객체를 지정하는 과정을 생략해서 코드의 용량을 줄일 수 있다는 장점이 있습니다.
obj.name = "test";
obj.age = 22;
obj.address = "seoul";
// 위와 같이 객체의 속성을 빈번하게 참조하는 구문을 with 구문을 사용해 다음과 같이 줄일 수 있습니다.

with (obj) {
  name = "test";
  age = 22;
  address = "seoul";
}
// 사람에 따라선 코드를 일기 편해졌다고 생각할 수도 있을 만큼 코드가 간결해졌으며,
// "obj."이라는 중복 코드가 제거돼 obj 객체의 멤버를 많이 참조할수록 with 구문을 사용하지 않은 코드보다 코드의 양을 줄일 수 있습니다.
// 자바스크립트 파일의 용량이 줄어들었으므로 다운로드 시간이 단축될 것입니다.

// 하지만 with 구문 내에서는 with 구문의 인자인 'obj' 객체의 멤버로 구성된 활성화 객체가 스코프 체인의 탐색 순위에서 최우선권을 갖습니다.
// 이로 인해 with 구문 내에서 with 구문에 포함된 영역의 지역변수 등에 접근하는 것조차 탐색 경로를 2번 거쳐야하므로 성능이 저하됩니다.
// try-catch 구문의 catch 구문도 with 구문과 같은 방식으로 동작하기 때문에 동일한 이유로 인한 성능 저하가 발생합니다.
// 그러므로 with 구문이나 catch 구문을 사용할 때는 이러한 스코프 체인 탐색에서의 성능 문제를 감안해야 합니다.
