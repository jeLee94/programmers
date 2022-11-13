function solution(my_string) {
    let result = new Set()
    for(let i=0;i<my_string.length;i++){
        result.add([...my_string][i])
    }
    return [...result].join('')
}