function solution(numbers) {
    var engs = ['zero','one','two','three','four','five','six','seven','eight','nine']
    
    for(let idx in engs){
        if(numbers.includes(engs[idx])){
            numbers = numbers.replaceAll(engs[idx],idx)
        }
    }
    
    return Number(numbers);
}