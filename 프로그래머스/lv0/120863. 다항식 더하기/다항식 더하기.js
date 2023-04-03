//1. x가 포함된 식의 숫자 더하기
//2. x가 포함되지 않은 식의 숫자 더하기
//3. +로 join

function solution(polynomial) {
    let linear = [], constant = [];
    polynomial=polynomial.split(" + ")
    polynomial.map(p=> p.includes("x")? linear.push(p.replace("x","")) : constant.push(p))
    let sum= [0,0]
    if(linear.length > 0){
        linear.map(l=> l==="" ? sum[0]+=1 : sum[0]+=Number(l))
    }
    if(constant.length >0){
        constant.map(c=> sum[1]+=Number(c))
    }
    
    if(sum[0] === 0){
        return `${sum[1]}`
    }else if(sum[1] === 0 ){
        return sum[0] ===1 ? `x` : `${sum[0]}x`
    }else if(sum[0] === 0 && sum[1] === 0){
        return "0"
    }else{
        return sum[0] ===1 ? `x + ${sum[1]}` : `${sum[0]}x + ${sum[1]}`
    }
}