function solution(order) {
    let cnt = 0;
    [...String(order)].map(x=>x.match(/[369]/g)? cnt++ : null)
    return cnt
}