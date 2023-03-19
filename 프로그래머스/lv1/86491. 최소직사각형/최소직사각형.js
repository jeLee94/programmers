function solution(sizes) {
    let rowMax = 0
    let colMax = 0
    sizes.map(size=> {size.sort((a,b)=>b-a)
        if(rowMax < size[0]) rowMax = size[0]
        if(colMax < size[1]) colMax = size[1]                      
    })
    return rowMax * colMax
    
}