function factorial(n){
    return n>1 ? n*factorial(n-1) : 1
}

function solution(n) {
    let i =1
    while(factorial(i)<=n){
        result = i
        i++
    }
    return i-1
}