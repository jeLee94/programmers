function solution(s){
    var answer = true;
    var array = [...s]
    var stack = []

    array.map((c,idx)=> {
        if(c==='(') {
            stack.push(c)
        }
        if(c ===')'){
            if(stack[stack.length-1] === '('){
                stack.pop()
            }
            else(stack.push(c))
        }
        
    })

    if(stack.length === 0) answer = true
    else answer=false
    
    return answer;
}