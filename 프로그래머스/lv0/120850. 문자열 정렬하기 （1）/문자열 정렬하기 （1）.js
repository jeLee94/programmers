function solution(my_string){
    return [...my_string]
    .filter((x) => Number.isFinite(parseInt(x)))
    .map((x) => Number(x))
    .sort()
}