function gcd(n,m){
    if(n<m){
        [n,m]=[m,n]
    }
    if(m===0){
        return n;
    }
    return gcd(m,n%m)
}

function solution(n, m) {
    return [gcd(n,m), n*m/gcd(n,m)]
}