function solution(answers) {
    let first = [1,2,3,4,5]
    let second = [2, 1, 2, 3, 2, 4, 2, 5]
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let result = [0,0,0]
    
    answers.map((answer,idx)=> {if(answer=== first[idx%5]) result[0] += 1
                                if(answer=== second[idx%8]) result[1] += 1
                                if(answer=== third[idx%10]) result[2] += 1
    })
    let ret = []
    result.map((res,idx)=> res===Math.max(...result) ? ret.push(idx+1) : null)
    return ret
}