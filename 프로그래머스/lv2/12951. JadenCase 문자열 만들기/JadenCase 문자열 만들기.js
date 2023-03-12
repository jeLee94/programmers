function solution(s) {
    let lowerString = s.split('').map(string=> string.toLowerCase())
    let isFirst = true
    let convert = lowerString.map(char=> {if(char===' '){isFirst=true; return char}
                    else if(isFirst){isFirst=false; return char.toUpperCase()}
                    else {return char.toLowerCase()}
                    })    
    
    return convert.join("")
}