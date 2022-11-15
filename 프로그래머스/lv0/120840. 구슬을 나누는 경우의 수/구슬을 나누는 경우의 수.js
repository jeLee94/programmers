function factorial(n){
    return n>1 ? BigInt(n)*factorial(n-1) : BigInt(1)
}

function solution(balls, share) {
   return parseInt(factorial(balls)/(factorial(balls-share) * factorial(share)))
}