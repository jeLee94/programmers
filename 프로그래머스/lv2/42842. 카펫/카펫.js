function solution(brown, yellow) {
    //if(yello/i >=1) i*2 + (yello/2 +2) * 2 = brown
    for(let i=1; i<=yellow; i++){
        if(yellow/i >=1){
            if(i*2 + (yellow/i + 2) * 2 === brown)
                return [yellow/i+2, i+2]            
        }
    }
        
}