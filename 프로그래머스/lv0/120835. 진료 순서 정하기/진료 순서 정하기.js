function solution(emergency) {
    let emer = emergency
    let result = Array(emergency.length)
    
    for(let i=0;i<emer.length;i++){
        let idx = emer.indexOf(Math.max(...emer))
        emer[idx] = 0
        result[idx]=i+1
    }
    return result
}