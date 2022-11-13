function solution(age) {
    return [...String(age)].map(x=>String.fromCharCode(Number(x)+97)).join('')
}