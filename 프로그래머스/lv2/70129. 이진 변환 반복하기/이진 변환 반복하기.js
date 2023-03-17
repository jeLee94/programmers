function solution(s) {
    let count = 0
    let countZero = 0
    
    while(true){
        countZero += s.match(/0/g)?.length ?? 0
        s = s.replaceAll("0","").length.toString(2)
        count++
        if(s==="1") return [count, countZero]
    }
    
}