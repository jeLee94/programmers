function solution(num_list) {
    let list = num_list.sort((a,b)=>a-b)
    return list.slice(5)
}