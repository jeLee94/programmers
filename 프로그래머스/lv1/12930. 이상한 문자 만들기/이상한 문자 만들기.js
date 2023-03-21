function solution(s) {
    let array= s.split(' ')
    return array.map(word=>word.split('').map((c,idx)=>idx%2===0 ? c.toUpperCase() : c.toLowerCase()).join('')).join(' ')
}