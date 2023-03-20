function solution(people, limit) {
    let count =0;
    people.sort((a,b)=>a-b)
    let k =0
    while(people.length>0 && k<people.length){
        if(people[k] + people[people.length-1] > limit){
            count++
            people.pop()
        }
        else if(people[k] + people[people.length-1] <= limit){
            count++
            people.pop()
            people.splice(k,1)
        }
    }
    return count
}