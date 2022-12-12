function solution(quiz) {
    var result = []
    var tmp_answer = 0
    for(const q of quiz){
        const[exp,answer] = q.split(" = ")
        const[num1,opr,num2]=exp.split(' ')
        
        opr === '+'? tmp_answer = Number(num1)+Number(num2) : tmp_answer = Number(num1)-Number(num2)
        tmp_answer === Number(answer)? result.push("O") : result.push("X")
        
    }
    return result
}