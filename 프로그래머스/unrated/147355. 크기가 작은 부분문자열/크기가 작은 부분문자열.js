function solution(t, p) {
    let len = p.length
    let count = 0
    for(let i=0; i<=t.length-len; i++){
        let tmp = t.slice(i,i+len)
        if(tmp <= p){
            count++
        }
    }
    return count
}