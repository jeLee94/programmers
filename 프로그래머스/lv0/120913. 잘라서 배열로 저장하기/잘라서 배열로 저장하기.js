function solution(my_str, n) {
    let start = 0 
    let end = n
    let result = []
    for(let i=0;i<my_str.length/n;i++){
        
        start = 0 + n*i
        end = n + n*i
        result.push(my_str.slice(start,end))
    }
    return result
}