function solution(num) {
    var cnt = 0
    do{
        if(num===1){break}
        num%2 ===0? num=num/2 : num=num*3+1
        cnt++
        if(cnt>=500) {cnt=-1; break} 
    }while(num!==1)
       
    
    return cnt
    
}