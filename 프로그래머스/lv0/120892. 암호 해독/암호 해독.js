function solution(cipher, code) {
    let result = ''
    for(let i=1;i<=cipher.length/code;i++){
        
        result += cipher.substring(code*i-1,code*i)
    }
    return result
}