function solution(numbers, k) {
    let idx = 0 
    for(let i=1;i<=k-1;i++){
        idx += 2
        
        idx > numbers.length-1 ? idx -= (numbers.length) : null
    }
    
    return numbers[idx]
}