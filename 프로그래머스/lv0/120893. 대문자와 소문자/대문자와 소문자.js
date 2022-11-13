function solution(my_string) {
    return [...my_string].map(x=> x.match(/[a-z]/g)? x.toUpperCase():x.toLowerCase()).join('')
}