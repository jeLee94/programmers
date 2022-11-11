function solution(s1, s2) {
    let cnt = 0
    s1.map(x=> s2.map(y=> x==y? cnt++ : 0))
    return cnt
}