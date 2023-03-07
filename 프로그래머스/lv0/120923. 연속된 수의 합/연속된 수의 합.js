function solution(num, total) {
    let answer = [];
    let sum = 0
    let defaultValue = 1
    
    while(true){
        sum=0
        answer = []
        for(let i=defaultValue; i<defaultValue+num ; i++) {
            sum += i
            answer.push(i)
            
        }
        
    
    if(sum > total){
        defaultValue -= 1
    }else if(sum< total){defaultValue +=1}
        
        if(sum === total){
            return answer
        }
    }
    
    return answer;
}