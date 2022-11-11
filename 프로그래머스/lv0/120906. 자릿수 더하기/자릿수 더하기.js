function solution(n) {
    return Array.from(n.toString()).reduce((acc,cur)=>acc+parseInt(cur),0)
}