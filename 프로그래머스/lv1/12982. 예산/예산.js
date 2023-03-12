function solution(d, budget) {
    let departments = d.sort((a,b)=>a-b)
    let count = 0
    let sum = 0
    for(let i=0; i<departments.length; i++){
        sum += departments[i]        
        if(sum>budget){
            return count
        }else{count++}
    }
    return count
    
}