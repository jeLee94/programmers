function solution(s) {
    let result = ''
    let tmp = []
    let arr = [...s].sort()
    arr.forEach((x,i)=> arr.indexOf(x) !== i ? result += x :null )
    return arr.join('').replace(new RegExp(`[${result}]`,'g'),'')
    
}