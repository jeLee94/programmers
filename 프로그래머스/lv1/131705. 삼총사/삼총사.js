//1. 세개 더해서 0이 되는 경우
//2. 0이 여러개이거나 같은 원소가 여러개인 경우는 같은 값이 들어갈 수 있음
function solution(number) {
    let count = 0;
    for(let i = 0; i < number.length - 2; i++) {
        for(let j = i + 1; j < number.length - 1; j++) {
            for(let k = j + 1; k < number.length; k++) {
                if(number[i] + number[j] + number[k] === 0) {
                    count++;
                }
            }
        }
    }
    return count;
}
