function solution(i, j, k) {
    let cnt = 0
    for(let x=i;x<=j;x++){
        [...String(x)].map(x=>x.match(String(k))?cnt++:false)
    }
    return cnt
}