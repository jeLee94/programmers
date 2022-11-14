function solution(array, n) {
    let min = Infinity
    let idx = 0
    array = array.sort((a,b)=>a-b)
    for(let i=0;i<array.length;i++){
        if (Math.abs(n-array[i])<min){
            min= Math.abs(n-array[i]);
            idx= i
        }
        
    }
    return array[idx]
}