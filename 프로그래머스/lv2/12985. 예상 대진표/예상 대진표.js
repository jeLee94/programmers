function solution(n,a,b)
{
    let answer = 1
    while(true){
        if(Math.ceil(a/2)===Math.ceil(b/2)){
            return answer
        }else{
            answer++;
            a=Math.ceil(a/2)
            b=Math.ceil(b/2)
        }
    }
}