function solution(my_string, num1, num2) {
    let tmp = ''
    let result = [...my_string]
    tmp = result[num1]
    result[num1] = result[num2]
    result[num2] = tmp
    return result.join('')
}