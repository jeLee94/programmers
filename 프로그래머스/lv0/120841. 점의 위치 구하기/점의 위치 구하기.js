function solution(dot) {
    let mul = dot[0] * dot[1]
    return dot[0] >0 ? (mul>0 ? 1 : 4) : (mul>0?3:2)
}