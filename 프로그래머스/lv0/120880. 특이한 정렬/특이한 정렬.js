function solution(numlist, n) {
    let hash = {}
    numlist.map(num=> hash[num] = Math.abs(n-num))
    let array = Object.entries(hash).sort((a,b)=> a[1] !== b[1] ? a[1]-b[1] : b[0]-a[0])
    return array.map(item=> Number(item[0]))
}