function solution(numbers) {
    numbers = numbers.sort((a,b)=>b-a)
    return numbers[0] * numbers[1] > numbers.slice(-2,-1)*numbers.slice(-1) 
        ? numbers[0]*numbers[1]:numbers.slice(-2,-1)*numbers.slice(-1) 
    
}