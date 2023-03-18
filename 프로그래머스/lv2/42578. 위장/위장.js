function solution(clothes) {
    let obj = {}
    let result= 1
    clothes.map(cloth=> obj[cloth[1]] = 0)
    Object.keys(obj).map(key=> clothes.map(cloth=>key === cloth[1] ? obj[key] +=1 : null))
    Object.values(obj).map(value=> result *= (value+1))
 
    return result-1
}