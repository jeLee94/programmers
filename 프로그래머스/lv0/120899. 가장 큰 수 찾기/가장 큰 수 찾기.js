function solution(array) {
    let result = []
    let maxim = Math.max(...array)
    result.push(maxim)
    result.push(array.findIndex(x=>x===maxim))
    
    return result
}