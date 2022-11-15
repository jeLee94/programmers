function solution(my_string) {
  
    let tmp = [];

    tmp = my_string.split(/\s/g);
    let result = Number(tmp[0]);
    
    tmp.forEach((x, i) =>
      x.match(/[+]/) ? (result += Number(tmp[i + 1])) 
                : x.match(/[-]/) ? (result -= Number(tmp[i + 1])) : null
    );
    return result
}