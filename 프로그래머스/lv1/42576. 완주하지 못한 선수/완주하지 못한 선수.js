function solution(participant, completion) {
    completion.map(person=> {if(participant.includes(person))
    {let idx = participant.findIndex(item=> item===person)
    participant.splice(idx,1)}})
    return String(participant)
}