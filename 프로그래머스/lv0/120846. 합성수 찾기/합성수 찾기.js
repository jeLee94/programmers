function solution(n) {
    let mcnt = 0
    let cnt = 0
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            if(i%j==0){
                mcnt++
            }
        }
        if(mcnt>=3){
            cnt++
        }
        mcnt = 0
    }
    return cnt    
}