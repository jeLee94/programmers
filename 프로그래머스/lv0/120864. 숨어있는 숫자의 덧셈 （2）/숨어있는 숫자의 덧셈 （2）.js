function solution(my_string) {
    my_string= my_string+'A'
    let num = 0
    let array = []
    array = my_string.match(/0|[1-9]+[0-9]*/g)
    for(let i=0; i<array?.length; i++){
        num += Number(array[i])
    }
    
    return num ?? 0
} 
