function solution(A, B) {
    let arr = [...A]
    let result = -1
    for(let i=1;i<=A.length;i++){
        arr = [arr[A.length-1], ...arr.slice(0,A.length-1)]
        console.log(arr.join(''))
        if(arr.join('') ===B){
            i<A.length ? result = i : result = 0
            break
        }
    }
    return result
}
