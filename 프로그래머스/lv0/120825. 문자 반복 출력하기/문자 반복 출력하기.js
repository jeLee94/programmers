function solution(my_string, n) {
let result = "";
[...my_string].map(function(x) {
    for(let i=0;i<n;i++){
        result += x;
    }
})
 return result
}