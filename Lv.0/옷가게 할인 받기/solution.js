function solution(price) {
  if (price < 10 || price > 1e6) return;
  price = ~~(price / 10) * 10;
  return price >= 5e5
    ? ~~(price - (price * 20) / 100)
    : price >= 3e5
    ? ~~(price - (price * 10) / 100)
    : price >= 1e5
    ? ~~(price - (price * 5) / 100)
    : price;
}

console.log(solution(150055));
console.log(solution(580000));
