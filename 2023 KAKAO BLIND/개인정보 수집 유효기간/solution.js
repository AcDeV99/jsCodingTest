function solution(today, terms, privacies) {
  let tod = new Date(today);
  if (tod.getFullYear() < 2000 || tod.getFullYear() > 2022) return;
  if (terms.length < 1 || terms.length > 20) return;
  if (privacies.length < 1 || privacies.length > 100) return;

  //풀이
  let p_date = []; // privacies의 날짜
  let p_alpha = []; // privacies의 약관 종류
  let t_alpha = []; // terms의 약관 종류
  let t_num = []; // terms의 유효기간
  let result = []; // 결과
  let num; // terms와 privacies의 약관 종류를 비교한 도출값
  let priv; // privacies의 유효기간 + terms의 유효기간으로, today와 비교될 날짜
  privacies.forEach((ele) => {
    p_date.push(ele.replace(/[A-Z\s]/g, ""));
    p_alpha.push(ele.replace(/[^A-Z]/g, ""));
  });
  terms.forEach((ele) => {
    t_alpha.push(ele.replace(/[^A-Z]/g, ""));
    t_num.push(ele.replace(/[\D]/g, ""));
  });

  for (let i = 0; i < privacies.length; i++) {
    for (let j = 0; j < terms.length; j++) {
      if (p_alpha[i] === t_alpha[j]) num = Number(t_num[j]);
    }
    priv = new Date(p_date[i]);
    priv.setMonth(priv.getMonth() + num);

    if (tod >= priv) result.push(i + 1);
  }
  return result;
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
);

console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
);

//privacies에서의 날짜 + terms의 기간 < today날짜 라면 privacies의 해당 인덱스 값 result에 반환
// 년 비교, 월 비교, 일 비교
