const solution = (my_string) => {
  if (my_string.length >= 1 && my_string.length <= 1000) {
    return my_string.split("").reverse().join("");
  }
};

console.log(solution("jaron"));
console.log(solution("bread"));
