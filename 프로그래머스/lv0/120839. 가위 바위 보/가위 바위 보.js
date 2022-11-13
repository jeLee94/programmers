function solution(rsp) {
    return [...rsp].map(x=>x=="2"?"0":x=="5"?"2":"5").join('')
}