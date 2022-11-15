function solution(dots) {
    let x =[]
    let y =[]
    dots.forEach(([vX,vY])=> x.push(vX) && y.push(vY))
    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
}