function solution(my_string) {
    return [...my_string].filter(x=>Number.isFinite(parseInt(x))).reduce((acc,cur)=> acc+Number(cur),0)
}