function solution(n) {
    let k=1;
    let sum=0;
    let count = 0;
    if(n===1) return 1
    for(let i=k; i<=n;i++){
        sum+=i
        if(sum===n){i = k++; count++; sum=0;}
        if(sum>n){i = k++; sum=0}
        if(k>Math.floor(n/2)) return count+1
    }
    
}