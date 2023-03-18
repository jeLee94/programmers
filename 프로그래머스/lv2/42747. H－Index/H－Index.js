function solution(citations) {
    let h = 0
    let result = []
    while(h<citations.length){
        let highCount = 0, lowCount=0
        h++
        for(let i=0; i<citations.length; i++){
            citations[i] >= h ? highCount++ : lowCount++
            
        }
        if(highCount>=h && lowCount<=h){result.push(h)}
    }
    return result.length === 0 ? 0 :Math.max(...result)
}