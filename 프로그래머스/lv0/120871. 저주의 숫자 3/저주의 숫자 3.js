function solution(n) {
    let j = 1;
    let i = 1;
    do {
      if (j % 3 == 0 || String(j).includes("3")) {
        j++;
        continue;
      } else {
        i++;
        j++;
      }
    } while (i <= n);
    return j-1
}