function solution(s) {
    var array = s.split(' ')
    return `${String(Math.min(...array)) +' '+ String(Math.max(...array))}`

}