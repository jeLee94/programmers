function solution(numbers) {
    var engs = ['zero','one','two','three','four','five','six','seven','eight','nine']
    
    for(let idx in engs){
        numbers = numbers.replaceAll(engs[idx],idx)
    }
    
    return Number(numbers);
}