function solution(people, limit) {
    let count =0;
    people.sort((a,b)=>a-b)
    while(people.length>0){
        if(people[0] + people[people.length-1] > limit){
            count++
            people.pop()
        }
        else{
            count++
            people.pop()
            people.splice(0,1)
        }
    }
    return count
}