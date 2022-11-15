function solution(s) {
    let arr = s.split(' ')
    let tmp = []
    let sum = 0
    arr.forEach((x,i)=> x=='Z'? tmp.pop() : tmp.push(x))
    return tmp.reduce((acc,cur)=> acc+Number(cur),0)
}