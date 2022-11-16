function solution(chicken) {
    let result = 0
    let coupon = chicken
    let mod = 0
    while(coupon>=10){
        mod = coupon % 10
        chicken = ~~(coupon/10)
        result += chicken
        coupon = chicken + mod
        
    }
    return result
}