function solution(bin1, bin2) {
    let sum = 0
    bin1 = parseInt(bin1,2).toString(10)
    bin2 = parseInt(bin2,2).toString(10)
    sum = parseInt(bin1) + parseInt(bin2)
    return sum.toString(2)
    
    
}