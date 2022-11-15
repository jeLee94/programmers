// function solution(n) {
//     let result = []
//     for(let i=2; i<=n; i++){
//         if(n%i == 0){
//             result.push(i)
//             n = n/i;
//         }
//     }
//     return [...new Set(result)].sort((a,b)=>a-b)
// }

function solution(n) {
  let pFactors = [];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      pFactors = [...pFactors, i];
      n /= i;
    }
  }
  if (n >= 2) pFactors = [...pFactors, n];
  return [...new Set(pFactors)].sort((a, b) => a - b);
}