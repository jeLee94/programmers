function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function solution(a, b) {
  const d = gcd(a, b);
  a = a / d;
  b = b / d;
  let bFactor = [];
  while (b % 2 === 0) {
    bFactor.push(2);
    b /= 2;
  }
  while (b % 5 === 0) {
    bFactor.push(5);
    b /= 5;
  }
  return b === 1 ? 1 : 2;
}
