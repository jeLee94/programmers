function solution(sides) {
    let mx = Math.max(...sides)
    let mn = Math.min(...sides)
    let cnt =0
    for(let i=mx-mn+1; i<mx+mn; i++){
        cnt++
    }
    return cnt
    
}