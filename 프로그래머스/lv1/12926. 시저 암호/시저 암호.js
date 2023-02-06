function solution(s, n) {
    let result = []
    s= [...s]
    
    //65~90 대문자 97~122 소문자 26 알파벳개수
    s.map(char=>{
        if(char===" "){result.push(char)}
        if(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90){
            if(char.charCodeAt(0)+n<65){
                result.push(String.fromCharCode(char.charCodeAt(0)+n+26))
            }else if(char.charCodeAt(0)+n>90){
                result.push(String.fromCharCode(char.charCodeAt(0)+n-26))
            }else{
                result.push(String.fromCharCode(char.charCodeAt(0)+n))
            }
        }else if(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122){
            if(char.charCodeAt(0)+n<97){
                result.push(String.fromCharCode(char.charCodeAt(0)+n+26))
            }else if(char.charCodeAt(0)+n>122){
                result.push(String.fromCharCode(char.charCodeAt(0)+n-26))
            }else{
                result.push(String.fromCharCode(char.charCodeAt(0)+n))
            }
        }
    })
    return result.join('')
}