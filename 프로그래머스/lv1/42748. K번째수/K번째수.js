function solution(array, commands) {
    return commands.map(item=>array.slice(item[0]-1,item[1]).sort((a,b)=>a-b)[item[2]-1])
}